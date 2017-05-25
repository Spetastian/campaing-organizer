import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { CharactersPage, CharactersSidebar } from './containers/Characters'
import { LocationsPage, LocationsSidebar } from './containers/Locations'
import { CampaignPageContainer, CampaignSidebarContainer } from './campaign'
import { MainNavigation } from './containers/Navigation'
import styles from './app.scss'

const App = () => {
  return (
    <div>
      <header className={styles.header}>
         Header
      </header>
          <div className={styles.mainWrapper}>
              <article>
                  <Switch>
                      <Route exact path="/" component={CampaignPageContainer}/>
                      <Route exact path="/campaign/:chapterId" component={CampaignPageContainer}/>
                      <Route exact path="/characters" component={CharactersPage}/>
                      <Route exact path="/locations" component={LocationsPage}/>
                  </Switch>
              </article>
              <nav>
                  <MainNavigation />
              </nav>
              <aside>
                  <Switch>
                      <Route exact path="/" component={CampaignSidebarContainer}/>
                      <Route exact path="/characters" component={CharactersSidebar}/>
                      <Route exact path="/locations" component={LocationsSidebar}/>
                      <Route path="/campaign" component={CampaignSidebarContainer}/>
                  </Switch>
              </aside>
          </div>
      <footer>footer</footer>
    </div>
  );
};

export default App;