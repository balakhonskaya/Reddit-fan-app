import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg}
      src="https://cdn.dribbble.com/users/518045/screenshots/15734941/media/b33ba442df5f77254544702fd5163387.png"
        alt="preview"
      />
    </div>
  );
}
