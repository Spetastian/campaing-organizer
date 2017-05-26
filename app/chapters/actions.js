export const CREATE_CHAPTER_REQUEST = 'CHAPTER_CREATE_REQUEST'
export const CREATE_CHAPTER_SUCCESS = 'CHAPTER_CREATE_SUCCESS'
export const CREATE_CHAPTER_FAILURE = 'CHAPTER_CREATE_FAILURE'

export const CHANGE_CHAPTER_NAME_REQUEST = 'CHANGE_CHAPTER_NAME_REQUEST'
export const CHANGE_CHAPTER_NAME_SUCCESS = 'CHANGE_CHAPTER_NAME_SUCCESS'
export const CHANGE_CHAPTER_NAME_FAILURE = 'CHANGE_CHAPTER_NAME_FAILURE'

export const FETCH_CHAPTER_REQUEST = 'FETCH_CHAPTER_REQUEST'
export const FETCH_CHAPTER_SUCCESS = 'FETCH_CHAPTER_SUCCESS'
export const FETCH_CHAPTER_FAILURE = 'FETCH_CHAPTER_FAILURE'

export const FETCH_CHAPTER_LIST_REQUEST = 'FETCH_CHAPTER_LIST_REQUEST'
export const FETCH_CHAPTER_LIST_SUCCESS = 'FETCH_CHAPTER_LIST_SUCCESS'
export const FETCH_CHAPTER_LIST_FAILURE = 'FETCH_CHAPTER_LIST_FAILURE'

export const fetchChapterListRequest = () =>
    ({ type: FETCH_CHAPTER_LIST_REQUEST })

export const fetchChapterListSuccess = (chapterList) =>
    ({ type: FETCH_CHAPTER_LIST_SUCCESS, chapterList })

export const fetchChapterListFailure = (error) =>
    ({ type: FETCH_CHAPTER_LIST_FAILURE, error: error })

export const createChapterRequest = (title) =>
    ({ type: CREATE_CHAPTER_REQUEST, title })

export const createChapterSuccess = (updatedChapterList) =>
    ({ type: CREATE_CHAPTER_SUCCESS, updatedChapterList })

export const createChapterFailure = (error) =>
    ({ type: CREATE_CHAPTER_FAILURE, error: error })

export const changeChapterNameRequest = (id, newTitle) =>
    ({ type: CHANGE_CHAPTER_NAME_REQUEST, id, newTitle })

export const changeChapterNameSuccess = (id, newTitle) =>
    ({ type: CHANGE_CHAPTER_NAME_SUCCESS, id, newTitle })

export const changeChapterNameFailure = (error) =>
    ({ type: CHANGE_CHAPTER_NAME_FAILURE, error: error })

export const fetchChapterRequest = (id) =>
    ({ type: FETCH_CHAPTER_REQUEST, id })

export const fetchChapterSuccess = (chapter) =>
    ({ type: FETCH_CHAPTER_SUCCESS, chapter })

export const fetchChapterFailure = (error) =>
    ({ type: FETCH_CHAPTER_FAILURE, error: error })