import { FC, memo, useState } from 'react';

import { logging } from '../../../utils/logging';

export interface IStateItemUnit {
  index: string;
  summator: () => void;
}

const StateItemUnitMemo: FC<IStateItemUnit> = ({ index, summator }) => {
  logging('StateItemUnit rendered');
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

export const StateItemUnit = memo(StateItemUnitMemo);
