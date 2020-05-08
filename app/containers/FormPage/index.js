/**
 *
 * Form
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { changeInput, addNewString } from './actions';

import Form from './Form';
import Input from './Input';

export function FormPage({ newString, handleChange, handleSubmit }) {
  useInjectReducer({ key: 'form', reducer });
  useInjectSaga({ key: 'form', saga });

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
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
}

FormPage.propTypes = {
  newString: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleChange: evt => dispatch(changeInput(evt.target.value)),
    handleSubmit: evt => {
      evt.preventDefault();
      dispatch(addNewString());
      dispatch(changeInput(''));
    },
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
