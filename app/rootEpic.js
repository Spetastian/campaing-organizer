import { combineEpics } from 'redux-observable'
import { chaptersEpics } from './chapters'
import { charactersEpics } from './characters'
import { locationsEpics } from './locations'
import { playerssEpics } from './players'

export default combineEpics(
    chaptersEpics(),
    charactersEpics(),
    locationsEpics(),
    playerssEpics()
)