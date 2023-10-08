import { FC, useState } from 'react';

import * as styles from '../../block.module.css';

import { logging } from '../../../utils/logging';

import { StateUnitItem } from './StateUnitItem';

export const StateUnitBlock: FC = () => {
  logging('StateUnitBlock rendered');
  const [getSum, setSum] = useState(0);
  const summator = (): void => {
    setSum((prev) => prev + 1);
  };
  return (
    <div className={styles['block']}>
      <p>
        <button>Total Value {getSum}</button>
      </p>
      <StateUnitItem index={'#1a'} summator={summator} />
      <StateUnitItem index={'#2b'} summator={summator} />
      <StateUnitItem index={'#3c'} summator={summator} />
      <StateUnitItem index={'#4d'} summator={summator} />
    </div>
  );
};
