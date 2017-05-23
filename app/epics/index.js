import { combineEpics } from 'redux-observable';
import campaignEpicsCreator from './campaign-epic';
const { createChapterRequestEpic } = campaignEpicsCreator();

export const rootEpic = combineEpics(
    createChapterRequestEpic
)