import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    fetchCharacterListRequest, 
    createCharacterRequest
 } from '../actions/creators'

import CharacterList from './components/CharacterList'

class CharactersPageContainer extends Component {

    render () {
        return <CharacterList characters={this.props.characters} />
    }
}

const mapStateToProps = (state) => {
    return { characters: state.characters }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCharacterList: () =>
            dispatch(fetchCharacterListRequest()),
        createNewCharacter: (name) =>
            dispatch(createCharacterRequest(name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharactersPageContainer)