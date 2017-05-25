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