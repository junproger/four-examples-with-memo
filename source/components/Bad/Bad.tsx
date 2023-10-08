import { FC } from 'react';

import * as styles from './bad.module.css';

import { RefUnitBlock } from './Ref/RefUnitBlock';
import { RefLoopBlock } from './Ref/RefLoopBlock';
import { StateUnitBlock } from './State/StateUnitBlock';
import { StateLoopBlock } from './State/StateLoopBlock';

export const Bad: FC = () => {
  return (
    <div className={styles['bad']}>
      <RefUnitBlock />
      <RefLoopBlock />
      <StateUnitBlock />
      <StateLoopBlock />
    </div>
  );
};
