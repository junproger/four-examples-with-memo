import { FC, useState } from 'react';

import { logging } from '../../../utils/logging';

export interface IStateUnitItem {
  index: string;
  summator: () => void;
}

export const StateUnitItem: FC<IStateUnitItem> = ({ index, summator }) => {
  logging('StateUnitItem rendered');
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
