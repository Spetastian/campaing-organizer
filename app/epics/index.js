import { combineEpics } from 'redux-observable';
import campaignEpicsCreator from './campaign-epic';
const campaignEpics = campaignEpicsCreator();

export const rootEpic = combineEpics(
    campaignEpics
)