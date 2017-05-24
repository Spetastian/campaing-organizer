import {
    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_FAILURE,

    CHANGE_CHAPTER_NAME_REQUEST,
    CHANGE_CHAPTER_NAME_SUCCESS,
    CHANGE_CHAPTER_NAME_FAILURE
} from './types'

export const createChapterRequest = (chapterTitle) =>
    ({ type: CREATE_CHAPTER_REQUEST, chapterTitle })

export const createChapterSuccess = (chapterId, chapterTitle) =>
    ({ type: CREATE_CHAPTER_SUCCESS, chapterId, chapterTitle })

export const createChapterFailure = (error) =>
    ({ type: CREATE_CHAPTER_FAILURE, error: error })

export const changeChapterNameRequest = (chapterId, newTitle) =>
    ({ type: CHANGE_CHAPTER_NAME_REQUEST, chapterId, newTitle })

export const changeChapterNameSuccess = (chapterId, newTitle) =>
    ({ type: CHANGE_CHAPTER_NAME_SUCCESS, chapterId, newTitle })

export const changeChapterNameFailure = (error) =>
    ({ type: CHANGE_CHAPTER_NAME_FAILURE, error: error })