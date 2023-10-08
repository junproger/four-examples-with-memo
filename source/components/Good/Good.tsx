import { FC } from 'react';

import * as styles from './good.module.css';

export const Good: FC = () => {
  return (
    <div className={styles['good']}>
      <p>Good example 1</p>
      <p>Good example 2</p>
      <p>Good example 3</p>
      <p>Good example 4</p>
    </div>
  );
};
