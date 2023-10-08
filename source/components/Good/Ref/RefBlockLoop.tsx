import { FC, useCallback, useState } from 'react';

import * as styles from '../../block.module.css';

import { logging } from '../../../utils/logging';
import { uidkey } from '../../../helpers/uidkey';

import { RefItemLoop } from './RefItemLoop';

export const RefBlockLoop: FC = () => {
  logging('REFBlockLoop rendered');
  const numCounters = 4;
  const [getSum, setSum] = useState(0);
  const summator = useCallback((): void => {
    setSum((prev) => prev + 1);
  }, []);
  return (
    <div className={styles['block']}>
      <p>
        <button>Total Value {getSum}</button>
      </p>
      {[...Array(numCounters).keys()].map((index) => (
        <RefItemLoop key={uidkey(index)} index={uidkey(index)} summator={summator} />
      ))}
    </div>
  );
};
