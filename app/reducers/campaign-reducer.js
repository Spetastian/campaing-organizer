import {
    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_FAILURE,

    CHANGE_CHAPTER_NAME_REQUEST,
    CHANGE_CHAPTER_NAME_SUCCESS,
    CHANGE_CHAPTER_NAME_FAILURE,

    FETCH_CHAPTER_REQUEST,
    FETCH_CHAPTER_SUCCESS,
    FETCH_CHAPTER_FAILURE
} from '../actions/types'

const initialState = {
    chapters: [],
    loading: false,
    selectedChapter: null
};

export default function campaignReducer(state = initialState, action) {
    switch (action.type) {

        case CREATE_CHAPTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CREATE_CHAPTER_SUCCESS:
            console.log(action)
            return Object.assign({}, state, {
                loading: false,
                chapters: action.updatedChapterList
            })

        case FETCH_CHAPTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_CHAPTER_SUCCESS:
            console.log(action)
            return Object.assign({}, state, {
                loading: false,
                selectedChapter: action.chapter
            })

        case CHANGE_CHAPTER_NAME_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CHANGE_CHAPTER_NAME_SUCCESS:
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