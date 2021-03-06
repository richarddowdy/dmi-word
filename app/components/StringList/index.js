import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import Ul from '../Ul/index';
import ListItem from '../ListItem/index';
import I from '../I/index';
import Alert from '../Alert/index';

function StringList({ strings, handleDelete }) {
  return (
    <>
      {strings.length ? (
        <Ul>
          {strings.map(str => {
            return (
              <ListItem className="text-primary" key={uuid()}>
                {str}
                <I onClick={handleDelete} className="fas fa-times-circle ml-3 text-danger"></I>
              </ListItem>
            );
          })}
        </Ul>
      ) : (
        <Alert className="alert alert-info">OUT OF STRINGS</Alert>
      )}
    </>
  );
}

StringList.propTypes = {
  strings: PropTypes.array,
  handleDelete: PropTypes.func,
};
export default StringList;
