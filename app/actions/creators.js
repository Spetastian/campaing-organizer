import {
    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_FAILURE,

    CHANGE_CHAPTER_NAME_REQUEST,
    CHANGE_CHAPTER_NAME_SUCCESS,
    CHANGE_CHAPTER_NAME_FAILURE,

    FETCH_CHAPTER_REQUEST,
    FETCH_CHAPTER_SUCCESS,
    FETCH_CHAPTER_FAILURE,

    FETCH_CHAPTER_LIST_REQUEST,
    FETCH_CHAPTER_LIST_SUCCESS,
    FETCH_CHAPTER_LIST_FAILURE

} from './types'



export const fetchChapterListRequest = () =>
    ({ type: FETCH_CHAPTER_LIST_REQUEST })

export const fetchChapterListSuccess = (chapterList) =>
    ({ type: FETCH_CHAPTER_LIST_SUCCESS, chapterList })

export const fetchChapterListFailure = (error) =>
    ({ type: FETCH_CHAPTER_LIST_FAILURE, error: error })

export const createChapterRequest = (chapterTitle) =>
    ({ type: CREATE_CHAPTER_REQUEST, chapterTitle })

export const createChapterSuccess = (updatedChapterList) =>
    ({ type: CREATE_CHAPTER_SUCCESS, updatedChapterList })

export const createChapterFailure = (error) =>
    ({ type: CREATE_CHAPTER_FAILURE, error: error })

export const changeChapterNameRequest = (chapterId, newTitle) =>
    ({ type: CHANGE_CHAPTER_NAME_REQUEST, chapterId, newTitle })

export const changeChapterNameSuccess = (chapterId, newTitle) =>
    ({ type: CHANGE_CHAPTER_NAME_SUCCESS, chapterId, newTitle })

export const changeChapterNameFailure = (error) =>
    ({ type: CHANGE_CHAPTER_NAME_FAILURE, error: error })

export const fetchChapterRequest = (chapterId) =>
    ({ type: FETCH_CHAPTER_REQUEST, chapterId })

export const fetchChapterSuccess = (chapter) =>
    ({ type: FETCH_CHAPTER_SUCCESS, chapter })

export const fetchChapterFailure = (error) =>
    ({ type: FETCH_CHAPTER_FAILURE, error: error })