import React, { Component } from 'react'
import CharacterItem from './CharacterItem'

class CharacterList extends Component{
    
    render(){
        return (
            <div>
                {
                    this.props.characters.map(
                        character => (
                            <CharacterItem 
                                key={character.id}
                                id={character.id} 
                                name={character.name}
                            />
                        )
                    )
                }
            </div>
        )
    }
}

export default CharacterList