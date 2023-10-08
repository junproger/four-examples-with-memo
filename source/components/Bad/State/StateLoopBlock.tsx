import { FC, useState } from 'react';

import * as styles from '../../block.module.css';

import { logging } from '../../../utils/logging';
import { uidkey } from '../../../helpers/uidkey';

import { StateLoopItem } from './StateLoopItem';

export const StateLoopBlock: FC = () => {
  logging('StateLoopBlock rendered');
  const numCounters = 4;
  const [getSum, setSum] = useState(0);
  const summator = (): void => {
    setSum((prev) => prev + 1);
  };
  return (
    <div className={styles['block']}>
      <p>
        <button>Total Value {getSum}</button>
      </p>
      {[...Array(numCounters).keys()].map((index) => (
        <StateLoopItem key={uidkey(index)} index={uidkey(index)} summator={summator} />
      ))}
    </div>
  );
};
