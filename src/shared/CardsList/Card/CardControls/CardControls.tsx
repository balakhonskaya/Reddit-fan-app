import React from 'react';
import styles from './cardcontrols.css';
import {Rating} from './Rating';
import {Comments} from './Comments';
import {Share} from './Share';

export function CardControls() {
  return (
    <div className={styles.controls}>
      <Rating/>
      <Comments/>
      <Share/>
    </div>
  );
}
