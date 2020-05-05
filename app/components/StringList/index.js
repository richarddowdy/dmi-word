import React from 'react';

import LoadingSpinner from '../LoadingSpinner/index';

function StringList({ strings, loading, error }) {
  if (loading) {
    return <LoadingSpinner />;
  }
  if (strings) {
    return (
      <>
        {strings.map(str => {
          return <p>{str}</p>;
        })}
      </>
    );
  }
}

export default StringList;
