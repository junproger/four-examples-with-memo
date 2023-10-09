import { FC } from 'react';

import * as styles from './good.module.css';

import { RefBlockUnit } from './Ref/RefBlockUnit';
import { RefBlockLoop } from './Ref/RefBlockLoop';
import { StateBlockUnit } from './State/StateBlockUnit';
import { StateBlockLoop } from './State/StateBlockLoop';

export const Good: FC = () => {
  return (
    <div className={styles['good']}>
      <RefBlockUnit />
      <RefBlockLoop />
      <StateBlockUnit />
      <StateBlockLoop />
    </div>
  );
};
