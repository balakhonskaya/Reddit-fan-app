import React from 'react';
import styles from './card.css';
import { CardControls } from './CardControls';
import {CardMenu} from './CardMenu';
import {CardTextContent} from './CardTextContent';
import {CardPreview} from './CardPreview';

export function Card() {
  return (
    <li className={styles.card}>
      <CardTextContent/>
      <CardMenu/>
      <CardPreview/>
      <CardControls/>
    </li>
  );
}
