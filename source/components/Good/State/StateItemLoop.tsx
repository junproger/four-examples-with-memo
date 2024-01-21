import { FC, memo, useState } from 'react';

import { logging } from '../../../utils/logging';

export interface IStateItemLoop {
  index: string;
  summator: () => void;
}

const StateItemLoopMemo: FC<IStateItemLoop> = ({ index, summator }) => {
  logging('StateItemLoop rendered');
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

export const StateItemLoop = memo(StateItemLoopMemo);
