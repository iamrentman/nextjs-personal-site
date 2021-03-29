import React from 'react';
import PropTypes from 'prop-types';
import styles from './new-thing.module.scss'

const exampleThing = ({ heading }) => {
  return (
    <h1 className={styles.heading}>{heading}</h1>
  );
};

exampleThing.propTypes = {
  heading: PropTypes.string
};

export default exampleThing;
