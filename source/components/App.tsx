import { FC } from 'react';

import * as styles from './app.module.css';

import { Bad } from './Bad/Bad';
import { Good } from './Good/Good';

export const App: FC = () => {
  return (
    <>
      <main className={styles['app']}>
        <h2>Bad Examples</h2>
        <Bad />
        <h2>Good Examples</h2>
        <Good />
      </main>
    </>
  );
};
