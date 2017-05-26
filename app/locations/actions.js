export const CREATE_LOCATION_REQUEST = 'CHAPTER_CREATE_REQUEST'
export const CREATE_LOCATION_SUCCESS = 'CHAPTER_CREATE_SUCCESS'
export const CREATE_LOCATION_FAILURE = 'CHAPTER_CREATE_FAILURE'

export const CHANGE_LOCATION_NAME_REQUEST = 'CHANGE_LOCATION_NAME_REQUEST'
export const CHANGE_LOCATION_NAME_SUCCESS = 'CHANGE_LOCATION_NAME_SUCCESS'
export const CHANGE_LOCATION_NAME_FAILURE = 'CHANGE_LOCATION_NAME_FAILURE'

export const FETCH_LOCATION_REQUEST = 'FETCH_LOCATION_REQUEST'
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE'

export const FETCH_LOCATION_LIST_REQUEST = 'FETCH_LOCATION_LIST_REQUEST'
export const FETCH_LOCATION_LIST_SUCCESS = 'FETCH_LOCATION_LIST_SUCCESS'
export const FETCH_LOCATION_LIST_FAILURE = 'FETCH_LOCATION_LIST_FAILURE'

export const fetchLocationListRequest = () =>
    ({ type: FETCH_LOCATION_LIST_REQUEST })

export const fetchLocationListSuccess = (locationList) =>
    ({ type: FETCH_LOCATION_LIST_SUCCESS, locationList })

export const fetchLocationListFailure = (error) =>
    ({ type: FETCH_LOCATION_LIST_FAILURE, error: error })

export const createLocationRequest = (title) =>
    ({ type: CREATE_LOCATION_REQUEST, title })

export const createLocationSuccess = (updatedLocationList) =>
    ({ type: CREATE_LOCATION_SUCCESS, updatedLocationList })

export const createLocationFailure = (error) =>
    ({ type: CREATE_LOCATION_FAILURE, error: error })

export const changeLocationNameRequest = (id, newTitle) =>
    ({ type: CHANGE_LOCATION_NAME_REQUEST, id, newTitle })

export const changeLocationNameSuccess = (id, newTitle) =>
    ({ type: CHANGE_LOCATION_NAME_SUCCESS, id, newTitle })

export const changeLocationNameFailure = (error) =>
    ({ type: CHANGE_LOCATION_NAME_FAILURE, error: error })

export const fetchLocationRequest = (id) =>
    ({ type: FETCH_LOCATION_REQUEST, id })

export const fetchLocationSuccess = (location) =>
    ({ type: FETCH_LOCATION_SUCCESS, location })

export const fetchLocationFailure = (error) =>
    ({ type: FETCH_LOCATION_FAILURE, error: error })