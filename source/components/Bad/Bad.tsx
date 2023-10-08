import { FC } from 'react';

import * as styles from './bad.module.css';

import { RefUnitBlock } from './Ref/RefUnitBlock';
import { RefLoopBlock } from './Ref/RefLoopBlock';

export const Bad: FC = () => {
  return (
    <div className={styles['bad']}>
      <RefUnitBlock />
      <RefLoopBlock />
      <p>Bad example 3</p>
      <p>Bad example 4</p>
    </div>
  );
};
