import {

    FETCH_LOCATION_LIST_REQUEST,
    FETCH_LOCATION_LIST_SUCCESS,
    FETCH_LOCATION_LIST_FAILURE,

    CREATE_LOCATION_REQUEST,
    CREATE_LOCATION_SUCCESS,
    CREATE_LOCATION_FAILURE,

    CHANGE_LOCATION_NAME_REQUEST,
    CHANGE_LOCATION_NAME_SUCCESS,
    CHANGE_LOCATION_NAME_FAILURE,

    FETCH_LOCATION_REQUEST,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_FAILURE
} from './actions'

const initialState = {
    locationList: [],
    loading: false,
    selectedLocation: null
};

export default function campaignReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_LOCATION_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_LOCATION_LIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                locationList: action.locationList
            })

        case CREATE_LOCATION_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CREATE_LOCATION_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                locationList: action.updatedLocationList
            })

        case FETCH_LOCATION_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_LOCATION_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedLocation: action.location
            })

        case CHANGE_LOCATION_NAME_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CHANGE_LOCATION_NAME_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedLocation: { id: action.id, title: action.newTitle },
                locationList: state.locationList.map( location => {
                    if(location.id === action.id)
                        return Object.assign({}, location, { title: action.newTitle })
                    else
                        return location
                })
            })

        default:
            return state
    }
}