import React from 'react';
import propTypes from 'prop-types';

function Home({ name }) {
  return (
    <h1>
      Hello
      {name}
    </h1>
  );
}

Home.propTypes = {
  name: propTypes.string,
};

Home.defaultProps = {
  name: 'Name',
};

export default Home;
