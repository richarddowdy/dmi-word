import React from 'react';

import Ul from '../Ul/index';
import ListItem from '../ListItem/index';

function StringList({ strings, loading, error }) {
  return (
    <>
      <Ul>
        {strings.map((str, idx) => {
          return <ListItem className='text-primary' key={idx}>{str}</ListItem>;
        })}
      </Ul>
    </>
  );
}

export default StringList;
