
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const locations = [
    {id: '1200', title: 'Location 1', content: 'The story begins...'},
    {id: '1201', title: 'Location 2', content: 'The story continues...'},
]

let nextId = 0

class LocationsService {
    
    getLocationList(campaignId){
        return Observable.of(locations)
    }

    getLocation({ campaignId, locationId }){
        console.log('locationId', locationId)
        console.log('locations', locations)
        const location = locations.find(c => c.id === locationId)
        console.log('getLocation', location)
        return Observable.of(
           location
        )
    }

    saveLocation({ id, title, content }){
        const idToSave = id ? id : (nextId++).toString()
        locations.push({ id: idToSave, title, content })
        return Observable.of(locations)
    }
}

export default LocationsService