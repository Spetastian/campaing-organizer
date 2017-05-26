export const CREATE_CHARACTER_REQUEST = 'CHAPTER_CREATE_REQUEST'
export const CREATE_CHARACTER_SUCCESS = 'CHAPTER_CREATE_SUCCESS'
export const CREATE_CHARACTER_FAILURE = 'CHAPTER_CREATE_FAILURE'

export const CHANGE_CHARACTER_NAME_REQUEST = 'CHANGE_CHARACTER_NAME_REQUEST'
export const CHANGE_CHARACTER_NAME_SUCCESS = 'CHANGE_CHARACTER_NAME_SUCCESS'
export const CHANGE_CHARACTER_NAME_FAILURE = 'CHANGE_CHARACTER_NAME_FAILURE'

export const FETCH_CHARACTER_REQUEST = 'FETCH_CHARACTER_REQUEST'
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE'

export const FETCH_CHARACTER_LIST_REQUEST = 'FETCH_CHARACTER_LIST_REQUEST'
export const FETCH_CHARACTER_LIST_SUCCESS = 'FETCH_CHARACTER_LIST_SUCCESS'
export const FETCH_CHARACTER_LIST_FAILURE = 'FETCH_CHARACTER_LIST_FAILURE'

export const fetchCharacterListRequest = () =>
    ({ type: FETCH_CHARACTER_LIST_REQUEST })

export const fetchCharacterListSuccess = (characterList) =>
    ({ type: FETCH_CHARACTER_LIST_SUCCESS, characterList })

export const fetchCharacterListFailure = (error) =>
    ({ type: FETCH_CHARACTER_LIST_FAILURE, error: error })

export const createCharacterRequest = (name) =>
    ({ type: CREATE_CHARACTER_REQUEST, name })

export const createCharacterSuccess = (updatedCharacterList) =>
    ({ type: CREATE_CHARACTER_SUCCESS, updatedCharacterList })

export const createCharacterFailure = (error) =>
    ({ type: CREATE_CHARACTER_FAILURE, error: error })

export const changeCharacterNameRequest = (id, newName) =>
    ({ type: CHANGE_CHARACTER_NAME_REQUEST, id, newName })

export const changeCharacterNameSuccess = (id, newName) =>
    ({ type: CHANGE_CHARACTER_NAME_SUCCESS, id, newName })

export const changeCharacterNameFailure = (error) =>
    ({ type: CHANGE_CHARACTER_NAME_FAILURE, error: error })

export const fetchCharacterRequest = (id) =>
    ({ type: FETCH_CHARACTER_REQUEST, id })

export const fetchCharacterSuccess = (character) =>
    ({ type: FETCH_CHARACTER_SUCCESS, character })

export const fetchCharacterFailure = (error) =>
    ({ type: FETCH_CHARACTER_FAILURE, error: error })