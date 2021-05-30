import React from 'react';
import styles from './cardtextcontent.css';

export function CardTextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>

          <a href="#user_link" className={styles.user}>Дмитрий Петров</a>
          <img className={styles.avatar}
          src="https://www.edarling.ru/wp-content/uploads/sites/31/2019/08/idealnyi_muzhchina_0.jpg"
          alt="avatar"
          />
          <span className={styles.createdAt}>4 часа назад</span>
        </div>
      </div>
      <h2 className={styles.title}>
        <a href="#content_url" className={styles.postLinks}>Противиположная точка зрения на данную проблему будет изучена
        </a>
      </h2>
      
    </div>
  );
}
