import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { LocationsPageContainer } from './locations'
import { ChaptersPageContainer, ChaptersSidebarContainer } from './chapters'
import { CharactersPageContainer, CharacterSheetPageContainer } from './characters'
import { PlayersPageContainer } from './players'
import MainNavigation from './common/components/MainNavigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './app.scss'

const App = () => {
  return (
    <MuiThemeProvider>
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
                        <Route exact path="/" component={CharacterSheetPageContainer}/>
                        <Route exact path="/campaign/:chapterId" component={ChaptersPageContainer}/>
                        <Route exact path="/players" component={PlayersPageContainer}/>
                        <Route exact path="/characters/:characterId" component={CharacterSheetPageContainer}/>
                        <Route exact path="/characters" component={CharactersPageContainer}/>
                        <Route exact path="/locations" component={LocationsPageContainer}/>
                    </Switch>
                </article>
                <aside>
                    <Switch>
                        <Route exact path="/" component={ChaptersSidebarContainer}/>
                        <Route exact path="/characters" component={ChaptersSidebarContainer}/>
                        <Route path="/campaign" component={ChaptersSidebarContainer}/>
                    </Switch>
                </aside>
            </div>
        <footer>footer</footer>
        </div>
    </MuiThemeProvider>

  );
};

export default App;