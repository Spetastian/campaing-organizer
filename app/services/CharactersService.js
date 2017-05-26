
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const characters = [
    {id: '1200', name: 'Jeff'},
    {id: '1201', name: 'Bob'},
]

let nextId = 0

class CharactersService {
    
    getCharacterList(campaignId){
        return Observable.of(characters)
    }

    getCharacter({ id }){
        const character = characters.find(c => c.id === id)
        return Observable.of(
           character
        )
    }

    saveCharacter({ id, name }){
        const idToSave = id ? id : (nextId++).toString()
        characters.push({ id: idToSave, name })
        return Observable.of(characters)
    }
}

export default CharactersService