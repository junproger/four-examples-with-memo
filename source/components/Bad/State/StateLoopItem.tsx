import { FC, useState } from 'react';

import { logging } from '../../../utils/logging';

export interface IStateLoopItem {
  index: string;
  summator: () => void;
}

export const StateLoopItem: FC<IStateLoopItem> = ({ index, summator }) => {
  logging('StateLoopItem rendered');
  const [getValue, setValue] = useState('0');
  const clickHandle = (): void => {
    setValue((prev) => +prev + 1 + '');
    summator();
  };
  return (
    <p style={{ color: 'white' }}>
      Item {index} <input type="button" value={getValue} onClick={clickHandle} />
    </p>
  );
};
