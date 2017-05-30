export const CREATE_PLAYER_REQUEST = 'CHAPTER_CREATE_REQUEST'
export const CREATE_PLAYER_SUCCESS = 'CHAPTER_CREATE_SUCCESS'
export const CREATE_PLAYER_FAILURE = 'CHAPTER_CREATE_FAILURE'

export const CHANGE_PLAYER_NAME_REQUEST = 'CHANGE_PLAYER_NAME_REQUEST'
export const CHANGE_PLAYER_NAME_SUCCESS = 'CHANGE_PLAYER_NAME_SUCCESS'
export const CHANGE_PLAYER_NAME_FAILURE = 'CHANGE_PLAYER_NAME_FAILURE'

export const FETCH_PLAYER_REQUEST = 'FETCH_PLAYER_REQUEST'
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS'
export const FETCH_PLAYER_FAILURE = 'FETCH_PLAYER_FAILURE'

export const FETCH_PLAYER_LIST_REQUEST = 'FETCH_PLAYER_LIST_REQUEST'
export const FETCH_PLAYER_LIST_SUCCESS = 'FETCH_PLAYER_LIST_SUCCESS'
export const FETCH_PLAYER_LIST_FAILURE = 'FETCH_PLAYER_LIST_FAILURE'

export const fetchPlayerListRequest = () =>
    ({ type: FETCH_PLAYER_LIST_REQUEST })

export const fetchPlayerListSuccess = (playerList) =>
    ({ type: FETCH_PLAYER_LIST_SUCCESS, playerList })

export const fetchPlayerListFailure = (error) =>
    ({ type: FETCH_PLAYER_LIST_FAILURE, error: error })

export const createPlayerRequest = ({name, email}) =>
    ({ type: CREATE_PLAYER_REQUEST, name, email })

export const createPlayerSuccess = (updatedPlayerList) =>
    ({ type: CREATE_PLAYER_SUCCESS, updatedPlayerList })

export const createPlayerFailure = (error) =>
    ({ type: CREATE_PLAYER_FAILURE, error: error })

export const changePlayerNameRequest = (id, newName) =>
    ({ type: CHANGE_PLAYER_NAME_REQUEST, id, newName })

export const changePlayerNameSuccess = (id, newName) =>
    ({ type: CHANGE_PLAYER_NAME_SUCCESS, id, newName })

export const changePlayerNameFailure = (error) =>
    ({ type: CHANGE_PLAYER_NAME_FAILURE, error: error })

export const fetchPlayerRequest = (id) =>
    ({ type: FETCH_PLAYER_REQUEST, id })

export const fetchPlayerSuccess = (player) =>
    ({ type: FETCH_PLAYER_SUCCESS, player })

export const fetchPlayerFailure = (error) =>
    ({ type: FETCH_PLAYER_FAILURE, error: error })