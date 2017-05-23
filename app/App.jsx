import React from 'react'
import styles from './app.scss'
import { MainNavigation } from './containers/Navigation'
import { Switch } from 'react-router'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import { CharactersPage, CharactersSidebar } from './containers/Characters'
import { LocationsPage, LocationsSidebar } from './containers/Locations'
import { CampaignPage, CampaignSidebar } from './containers/Campaign'
import { connect } from 'react-redux'

const App = () => {
  return (
  <Router>
    <div>
      <header className={styles.header}>
         Header
      </header>
          <div className={styles.mainWrapper}>
              <article>
                  <Switch>
                      <Route exact path="/" component={CampaignPage}/>
                      <Route exact path="/characters" component={CharactersPage}/>
                      <Route exact path="/locations" component={LocationsPage}/>
                  </Switch>
              </article>
              <nav>
                  <MainNavigation />
              </nav>
              <aside>
                  <Switch>
                      <Route exact path="/" component={CampaignSidebar}/>
                      <Route exact path="/characters" component={CharactersSidebar}/>
                      <Route exact path="/locations" component={LocationsSidebar}/>
                  </Switch>
              </aside>
          </div>
      <footer>footer</footer>
    </div>
  </Router>
  );
};

export default App;