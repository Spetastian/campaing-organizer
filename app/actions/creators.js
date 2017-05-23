import {
    CREATE_CHAPTER_REQUEST,
    CREATE_CHAPTER_SUCCESS,
    CREATE_CHAPTER_FAILURE
} from './types'

export const createChapterRequest = (chapterName) =>
    ({ type: CREATE_CHAPTER_REQUEST, chapterName })

export const createChapterSuccess = (chapterId, chapterTitle) =>
    ({ type: CREATE_CHAPTER_SUCCESS, chapterId, chapterTitle })

export const createChapterFailure = (error) =>
    ({ type: CREATE_CHAPTER_FAILURE, error: error })