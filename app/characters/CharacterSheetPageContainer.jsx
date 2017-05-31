import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    fetchCharacterListRequest, 
    createCharacterRequest
 } from './actions'

import CharacterSheet from './components/CharacterSheet'

class CharacterSheetPageContainer extends Component {

    componentDidMount(){
        const { params: { characterId } } = this.props.match
        console.log('characterId', characterId)
    }

    render () {
        return <CharacterSheet />
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
)(CharacterSheetPageContainer)