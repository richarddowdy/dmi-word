/**
 *
 * Home
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectStrings,
  makeSelectDeleteSuccess,
  makeSelectDeleteError,
} from './selectors';
import { loadStrings, deleteString, resetSuccess } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Section from './Section';
import StringList from '../../components/StringList/index';
import Header from '../../components/Header';
import H1 from '../../components/H1';
import LoadingSpinner from '../../components/LoadingSpinner';
import Alert from '../../components/Alert/index';

export function Home({
  strings,
  onPageLoad,
  handleDelete,
  deleteSuccess,
  deleteError,
  resetSuccessAlert,
}) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  useEffect(() => {
    onPageLoad();
  }, []);

  console.log(deleteSuccess)
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Show all strings in array" />
      </Helmet>
      <Header>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </Header>
      <Section>
        {deleteError ? <Alert className="alert alert-warning">{deleteError}</Alert> : null}
        {deleteSuccess ? <Alert className="alert alert-danger">{deleteSuccess}</Alert> : null}
        {strings ? (
          <StringList strings={strings} handleDelete={handleDelete} />
        ) : (
          <LoadingSpinner />
        )}
      </Section>
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  deleteSuccess: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  deleteError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onPageLoad: PropTypes.func,
  handleDelete: PropTypes.func,
  resetSuccessAlert: PropTypes.func,
};
// TODO success and deleteError for feedback on delete
const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  deleteSuccess: makeSelectDeleteSuccess(),
  deleteError: makeSelectDeleteError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(loadStrings()),
    handleDelete: evt =>
      dispatch(deleteString(evt.target.parentNode.textContent)),
    resetSuccessAlert: () => {dispatch(resetSuccess())},
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
)(Home);
