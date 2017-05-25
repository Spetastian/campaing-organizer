import {

    FETCH_CHARACTER_LIST_REQUEST,
    FETCH_CHARACTER_LIST_SUCCESS,
    FETCH_CHARACTER_LIST_FAILURE,

    CREATE_CHARACTER_REQUEST,
    CREATE_CHARACTER_SUCCESS,
    CREATE_CHARACTER_FAILURE,

    CHANGE_CHARACTER_NAME_REQUEST,
    CHANGE_CHARACTER_NAME_SUCCESS,
    CHANGE_CHARACTER_NAME_FAILURE,

    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE
} from '../actions/types'

const initialState = {
    chapters: [],
    loading: false,
    selectedChapter: null
};

export default function campaignReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_CHARACTER_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_CHARACTER_LIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                chapters: action.chapterList
            })

        case CREATE_CHARACTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CREATE_CHARACTER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                chapters: action.updatedChapterList
            })

        case FETCH_CHARACTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_CHARACTER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedChapter: action.chapter
            })

        case CHANGE_CHARACTER_NAME_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CHANGE_CHARACTER_NAME_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedChapter: { id: action.chapterId, title: action.newTitle },
                chapters: state.chapters.map( chapter => {
                    if(chapter.id === action.chapterId)
                        return Object.assign({}, chapter, { title: action.newTitle })
                    else
                        return chapter
                })
            })

        default:
            return state
    }
}