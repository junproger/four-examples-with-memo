import { FC, useState } from 'react';

import * as styles from '../../block.module.css';

import { logging } from '../../../utils/logging';

import { RefUnitItem } from './RefUnitItem';

export const RefUnitBlock: FC = () => {
  logging('REFUnitBlock rendered');
  const [getSum, setSum] = useState(0);
  const summator = (): void => {
    setSum((prev) => prev + 1);
  };
  return (
    <div className={styles['block']}>
      <p>
        <button>Total Value {getSum}</button>
      </p>
      <RefUnitItem index={'#1a'} summator={summator} />
      <RefUnitItem index={'#2b'} summator={summator} />
      <RefUnitItem index={'#3c'} summator={summator} />
      <RefUnitItem index={'#4d'} summator={summator} />
    </div>
  );
};
