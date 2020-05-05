/*
 * FormPage
 *
 * This is the first thing users see of our Form, at the '/new' route
 *
 */

import React from 'react';

import Form from './Form';

export default function FormPage() {
  return (
    <Form>
      <label htmlFor="newString">
        <input
          id="newString"
          type="text"
          placeholder="Enter a new string to add to the list"
        />
      </label>
    </Form>
  );
}
