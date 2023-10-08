import { FC } from 'react';

import * as styles from './good.module.css';

import { RefBlockUnit } from './Ref/RefBlockUnit';
import { RefBlockLoop } from './Ref/RefBlockLoop';

export const Good: FC = () => {
  return (
    <div className={styles['good']}>
      <RefBlockUnit />
      <RefBlockLoop />
      <p>Good example 3</p>
      <p>Good example 4</p>
    </div>
  );
};
