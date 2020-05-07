/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectStrings, makeSelectLoading } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import messages from './messages';

// import CenteredSection from './CenteredSection';
import Section from './Section';
import StringList from '../../components/StringList/index';
import Header from '../../components/Header';
import H1 from '../../components/H1';
import LoadingSpinner from '../../components/LoadingSpinner';

import { requestApiStrings } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

function HomePage({ strings, loading }) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const loadingTrue = false;

  useEffect(() => {
    console.log("running effect");
    if (!strings) {
      console.log("doing this thing");
      requestApiStrings();
      console.log(strings);
    }
  },[strings]);
  console.log('strings working????', strings);
  // const strings = ['well', 'iss', 'this', 'working'];
  return (
    <>
      <Header>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </Header>
      <Section>
        <LoadingSpinner />
        {/* <StringList loading={loadingTrue} strings={strings} /> */}
      </Section>
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ requestApiStrings }, dispatch);
};

// export default HomePage;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )
