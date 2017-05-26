import {

    FETCH_CHARACTER_LIST_REQUEST,
    FETCH_CHARACTER_LIST_SUCCESS,
    FETCH_CHARACTER_LIST_FAILURE,

    CREATE_CHARACTER_REQUEST,
    CREATE_CHARACTER_SUCCESS,
    CREATE_CHARACTER_FAILURE,

    CHANGE_CHARACTER_NAME_REQUEST,
    CHANGE_CHARACTER_NAME_SUCCESS,
    CHANGE_CHARACTER_NAME_FAILURE,

    FETCH_CHARACTER_REQUEST,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE
} from './actions'

const initialState = {
    characterList: [],
    loading: false,
    selectedCharacter: null
};

export default function charactersReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_CHARACTER_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_CHARACTER_LIST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                characterList: action.characterList
            })

        case CREATE_CHARACTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CREATE_CHARACTER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                characterList: action.updatedCharacterList
            })

        case FETCH_CHARACTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case FETCH_CHARACTER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedCharacter: action.character
            })

        case CHANGE_CHARACTER_NAME_REQUEST:
            return Object.assign({}, state, {
                loading: true
            })

        case CHANGE_CHARACTER_NAME_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                selectedCharacter: { id: action.id, name: action.name },
                characterList: state.characterList.map( character => {
                    if(character.id === action.id)
                        return Object.assign({}, character, { name: action.newTitle })
                    else
                        return character
                })
            })

        default:
            return state
    }
}