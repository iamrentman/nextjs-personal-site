import React from 'react';
import NewThing from './components/new-thing/new-thing'
import data from '../../data/stanford/data.json'
import styles from './stanford-base.module.scss'

const newPage = () => {
  return (
    <header className={styles.header}>
      <NewThing
        heading={data.heading}
      />
    </header>
  );
};

export default newPage;
