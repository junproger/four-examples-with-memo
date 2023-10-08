import { FC } from 'react';

import * as styles from './bad.module.css';

export const Bad: FC = () => {
  return (
    <div className={styles['bad']}>
      <p>Bad example 1</p>
      <p>Bad example 2</p>
      <p>Bad example 3</p>
      <p>Bad example 4</p>
    </div>
  );
};
