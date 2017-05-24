import { combineEpics } from 'redux-observable';
import campaignEpicsCreator from './campaign-epic';
const { createChapterRequestEpic, changeChapterNameEpic } = campaignEpicsCreator();

export const rootEpic = combineEpics(
    createChapterRequestEpic,
    changeChapterNameEpic
)