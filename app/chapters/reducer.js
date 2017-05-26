import {

    FETCH_CHAPTER_LIST_REQUEST,
    FETCH_CHAPTER_LIST_SUCCESS,
    FETCH_CHAPTER_LIST_FAILURE,

    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_FAILURE,

    CHANGE_CHAPTER_NAME_REQUEST,
    CHANGE_CHAPTER_NAME_SUCCESS,
    CHANGE_CHAPTER_NAME_FAILURE,

    FETCH_CHAPTER_REQUEST,
    FETCH_CHAPTER_SUCCESS,
    FETCH_CHAPTER_FAILURE
} from './actions'

const initialState = {
    chapterList: [],
    loading: false,
    selectedChapter: null
};

export default function campaignReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_CHAPTER_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_CHAPTER_LIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                chapterList: action.chapterList
            })

        case CREATE_CHAPTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CREATE_CHAPTER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                chapterList: action.updatedChapterList
            })

        case FETCH_CHAPTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_CHAPTER_SUCCESS:
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
                selectedChapter: { id: action.id, title: action.newTitle },
                chapterList: state.chapterList.map( chapter => {
                    if(chapter.id === action.id)
                        return Object.assign({}, chapter, { title: action.newTitle })
                    else
                        return chapter
                })
            })

        default:
            return state
    }
}