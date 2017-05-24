import {
    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_FAILURE,

    CHANGE_CHAPTER_NAME_REQUEST,
    CHANGE_CHAPTER_NAME_SUCCESS,
    CHANGE_CHAPTER_NAME_FAILURE
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
            const newChapter =
                { id: action.chapterId, title: action.chapterTitle }
            const selectedChapter =
                state.selectedChapter ? state.selectedChapter : newChapter
            return Object.assign({}, state, {
                loading: false,
                selectedChapter,
                chapters: [...state.chapters, newChapter]
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