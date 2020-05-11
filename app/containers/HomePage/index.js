/**
 *
 * Home Page
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectStrings, makeSelectDeleteError } from './selectors';
import { loadStrings, deleteString } from './actions';
import reducer from './reducer';
import saga from './saga';

import Section from './Section';
import StringList from '../../components/StringList/index';
import Header from '../../components/Header';
import H1 from '../../components/H1';
import LoadingSpinner from '../../components/LoadingSpinner';
import Alert from '../../components/Alert/index';

export function HomePage({ strings, onPageLoad, handleDelete, deleteError }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Show all strings in array" />
      </Helmet>
      <Header>
        <H1>
          The Lord of the <small>st</small><span style={{ fontSize: '90px' }}>R</span>ings
        </H1>
      </Header>
      <Section>
        {deleteError ? <Alert className="alert alert-warning">{deleteError}</Alert> : null}
        {strings ? (
          <StringList strings={strings} handleDelete={handleDelete} />
        ) : (
          <LoadingSpinner />
        )}
      </Section>
    </div>
  );
}

HomePage.propTypes = {
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  deleteError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onPageLoad: PropTypes.func,
  handleDelete: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  deleteError: makeSelectDeleteError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(loadStrings()),
    handleDelete: evt =>
      dispatch(deleteString(evt.target.parentNode.textContent)),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
