import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    fetchLocationListRequest, 
    createLocationRequest
 } from './actions'

 import LocationList from './components/LocationList'

class LocationsPageContainer extends Component {
    
    componentDidMount(){
        this.props.loadLocationList()
    }

    render () {
        return <LocationList locations={this.props.locations} />
    }
}

const mapStateToProps = (state) => {
    return { locations: state.locations.locationList }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadLocationList: () =>
            dispatch(fetchLocationListRequest()),
        createNewLocation: (name) =>
            dispatch(createLocationRequest(name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsPageContainer)