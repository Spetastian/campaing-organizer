import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { LocationsPage, LocationsSidebar } from './containers/Locations'
import { ChaptersPageContainer, ChaptersSidebarContainer } from './chapters'
import { CharactersPageContainer } from './characters'
import { MainNavigation } from './containers/Navigation'
import styles from './app.scss'

const App = () => {
  return (
    <div>
      <header className={styles.header}>
         Header
      </header>
          <div className={styles.mainWrapper}>
              <nav>
                  <MainNavigation />
              </nav>
              <article>
                  <Switch>
                      <Route exact path="/" component={ChaptersPageContainer}/>
                      <Route exact path="/campaign/:chapterId" component={ChaptersPageContainer}/>
                      <Route exact path="/characters" component={CharactersPageContainer}/>
                      <Route exact path="/locations" component={LocationsPage}/>
                  </Switch>
              </article>
              <aside>
                  <Switch>
                      <Route exact path="/" component={ChaptersSidebarContainer}/>
                      <Route exact path="/characters" component={ChaptersSidebarContainer}/>
                      <Route exact path="/locations" component={LocationsSidebar}/>
                      <Route path="/campaign" component={ChaptersSidebarContainer}/>
                  </Switch>
              </aside>
          </div>
      <footer>footer</footer>
    </div>
  );
};

export default App;