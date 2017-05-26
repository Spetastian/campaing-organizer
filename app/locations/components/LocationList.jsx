import React, { Component } from 'react'
import LocationItem from './LocationItem'

class LocationList extends Component{
    
    render(){
        return (
            <div>
                {
                    this.props.locations.map(
                        location => (
                            <LocationItem 
                                key={location.id}
                                id={location.id} 
                                title={location.title}
                            />
                        )
                    )
                }
            </div>
        )
    }
}

export default LocationList