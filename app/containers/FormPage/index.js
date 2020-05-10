/**
 *
 * Form
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
import { makeSelectForm, makeSelectError, makeSelectSuccess } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { changeInput, addNewString, stringSuccess, stringFailed } from './actions';

import Form from './Form';
import Input from './Input';
import Alert from '../../components/Alert/index';

export function FormPage({ newString, handleChange, handleSubmit, error, success, resetSuccess, resetError }) {
  useInjectReducer({ key: 'form', reducer });
  useInjectSaga({ key: 'form', saga });

  useEffect(() => {
    if (success) {
      resetSuccess();
    }
    if (error) {
      resetError();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Form</title>
        <meta name="description" content="Add word or phrase to list." />
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="newString">Add a New Word or Phrase to the list!</label>
        <Input
          className="form-group"
          id="new-string"
          type="text"
          placeholder="New Phrase!"
          value={newString}
          onChange={handleChange}
          onClick={success ? resetSuccess : error ? resetError : null}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
      {error ? <Alert className="alert alert-danger">{error}</Alert> : null}
      {success ? <Alert className="alert alert-success">{success}</Alert> : null}
    </div>
  );
}

FormPage.propTypes = {
  newString: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  success: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectForm(),
  error: makeSelectError(),
  success: makeSelectSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleChange: evt => dispatch(changeInput(evt.target.value)),
    handleSubmit: evt => {
      evt.preventDefault();
      dispatch(addNewString());
      dispatch(changeInput(''));
    },
    resetSuccess: () => dispatch(stringSuccess(false)),
    resetError: () => dispatch(stringFailed(false)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FormPage);
