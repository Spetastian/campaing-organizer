import {

    FETCH_PLAYER_LIST_REQUEST,
    FETCH_PLAYER_LIST_SUCCESS,
    FETCH_PLAYER_LIST_FAILURE,

    CREATE_PLAYER_REQUEST,
    CREATE_PLAYER_SUCCESS,
    CREATE_PLAYER_FAILURE,

    CHANGE_PLAYER_NAME_REQUEST,
    CHANGE_PLAYER_NAME_SUCCESS,
    CHANGE_PLAYER_NAME_FAILURE,

    FETCH_PLAYER_REQUEST,
    FETCH_PLAYER_SUCCESS,
    FETCH_PLAYER_FAILURE
} from './actions'

const initialState = {
    playerList: [],
    loading: false,
    selectedPlayer: null
};

export default function campaignReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_PLAYER_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_PLAYER_LIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                playerList: action.playerList
            })

        case CREATE_PLAYER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CREATE_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                playerList: action.updatedPlayerList
            })

        case FETCH_PLAYER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedPlayer: action.player
            })

        case CHANGE_PLAYER_NAME_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CHANGE_PLAYER_NAME_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedPlayer: { id: action.id, title: action.newName },
                playerList: state.playerList.map( player => {
                    if(player.id === action.id)
                        return Object.assign({}, player, { title: action.newName })
                    else
                        return player
                })
            })

        default:
            return state
    }
}