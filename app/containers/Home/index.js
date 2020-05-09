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
import { makeSelectStrings } from './selectors';
// import { makeSelectStrings } from '../App/selectors';
import { loadStrings } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Section from './Section';
import StringList from '../../components/StringList/index';
import Header from '../../components/Header';
import H1 from '../../components/H1';
import LoadingSpinner from '../../components/LoadingSpinner';

export function Home({ strings, onPageLoad }) {
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
          <FormattedMessage {...messages.header} />
        </H1>
      </Header>
      <Section>
        {strings ? <StringList strings={strings} /> : <LoadingSpinner />}
      </Section>
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  strings: PropTypes.array,
  onPageLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(loadStrings()),
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
