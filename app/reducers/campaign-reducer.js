import {
    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_FAILURE
} from '../actions/types'

const initialState = {
    chapters: [],
    selectedChapter: null,
    loading: false
};

export default function campaignReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CHAPTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })
        case CREATE_CHAPTER_SUCCESS:
            const selectedChapter =
                state.selectedChapter ? state.selectedChapter :
                    { id: action.chapterId, title: action.chapterTitle }
            return Object.assign({}, state, {
                loading: false,
                selectedChapter
            })
        default:
            return state
    }
}