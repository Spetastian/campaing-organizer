import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    fetchCharacterListRequest, 
    createCharacterRequest
 } from './actions'

import CharacterList from './components/CharacterList'

class CharactersPageContainer extends Component {

    componentDidMount(){
        this.props.loadCharacterList()
    }

    render () {
        return <CharacterList characters={this.props.characters} />
    }
}

const mapStateToProps = (state) => {
    return { characters: state.characters.characterList }
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