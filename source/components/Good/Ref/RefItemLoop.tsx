import { FC, memo, useRef } from 'react';

import { logging } from '../../../utils/logging';

export interface IRefItemLoop {
  index: string;
  summator: () => void;
}

const RefItemLoopMemo: FC<IRefItemLoop> = ({ index, summator }) => {
  logging('REFItemLoop rendered');
  const refButton = useRef<HTMLInputElement | null>(null);
  const clickHandle = (): void => {
    if (refButton.current) {
      const prevValue = refButton.current.value;
      refButton.current.value = +prevValue + 1 + '';
      summator();
    }
  };
  return (
    <p style={{ color: 'white' }}>
      Item {index} <input type="button" ref={refButton} defaultValue="0" onClick={clickHandle} />
    </p>
  );
};

export const RefItemLoop = memo(RefItemLoopMemo);
