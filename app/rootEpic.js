import { combineEpics } from 'redux-observable'
import { chaptersEpics } from './chapters'
import { charactersEpics } from './characters'
import { locationsEpics } from './locations'

export default combineEpics(
    chaptersEpics(),
    charactersEpics(),
    locationsEpics()
)