import React from 'react'
import styles from './app.scss'
import MainNavigation from './containers/MainNavigation'
import { connect } from 'react-redux'

const App = ({children}) => {
  return (
  <body>
  <header className={styles.header}>
     Header
  </header>
  <div className={styles.mainWrapper}>
      <article>{children}</article>
      <nav>
          <MainNavigation />
      </nav>
      <aside>aside</aside>
  </div>
  <footer>footer</footer>
  </body>
  );
};

export default App;