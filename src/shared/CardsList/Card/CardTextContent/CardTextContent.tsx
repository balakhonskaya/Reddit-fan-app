import React from 'react';
import styles from './cardtextcontent.css';

export function CardTextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
        
          <img className={styles.avatar}
          src="https://cdn.dribbble.com/users/12363/screenshots/15553002/media/e184b167c6d0f8bf977ae623f006b0ad.png?compress=1&resize=50x50"
          alt="avatar"
          />
          <a href="#user_link">Дмитрий Петров</a>
          <span className={styles.createdAt}>4 часа назад</span>
        </div>
      </div>
      <h2 className={styles.title}>
        <a href="#content_url" className={styles.postLinks}>Противиположная точка зрения на данную проблему
        </a>
      </h2>
      
    </div>
  );
}
