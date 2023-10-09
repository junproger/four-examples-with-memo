import { FC, useCallback, useState } from 'react';

import * as styles from '../../block.module.css';

import { logging } from '../../../utils/logging';

import { StateItemUnit } from './StateItemUnit';

export const StateBlockUnit: FC = () => {
  logging('StateBlockUnit rendered');
  const [getSum, setSum] = useState(0);
  const summator = useCallback((): void => {
    setSum((prev) => prev + 1);
  }, []);
  return (
    <div className={styles['block']}>
      <p>
        <button>Total Value {getSum}</button>
      </p>
      <StateItemUnit index={'#1a'} summator={summator} />
      <StateItemUnit index={'#2b'} summator={summator} />
      <StateItemUnit index={'#3c'} summator={summator} />
      <StateItemUnit index={'#4d'} summator={summator} />
    </div>
  );
};
