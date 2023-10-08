import { FC } from 'react';

import * as styles from './app.module.css';

export const App: FC = () => {
  return (
    <>
      <main className={styles['app']}>
        <h2>Bad Examples</h2>
        <div>Four bad examples</div>
        <h2>Good Examples</h2>
        <div>Four good examples</div>
      </main>
    </>
  );
};
