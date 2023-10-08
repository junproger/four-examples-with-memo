import { FC, useRef } from 'react';

import { logging } from '../../../utils/logging';

export interface IRefUnitItem {
  index: string;
  summator: () => void;
}

export const RefUnitItem: FC<IRefUnitItem> = ({ index, summator }) => {
  logging('REFUnitItem rendered');
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
