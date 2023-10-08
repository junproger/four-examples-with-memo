import { FC, useCallback, useState } from 'react';

import * as styles from '../../block.module.css';

import { logging } from '../../../utils/logging';

import { RefItemUnit } from './RefItemUnit';

export const RefBlockUnit: FC = () => {
  logging('REFBlockUnit rendered');
  const [getSum, setSum] = useState(0);
  const summator = useCallback((): void => {
    setSum((prev) => prev + 1);
  }, []);
  return (
    <div className={styles['block']}>
      <p>
        <button>Total Value {getSum}</button>
      </p>
      <RefItemUnit index={'#1a'} summator={summator} />
      <RefItemUnit index={'#2b'} summator={summator} />
      <RefItemUnit index={'#3c'} summator={summator} />
      <RefItemUnit index={'#4d'} summator={summator} />
    </div>
  );
};
