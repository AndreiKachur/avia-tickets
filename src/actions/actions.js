const flightsLoaded = (newFlights) => {
    return {
        type: 'FLIGHTS_LOADED',
        payload: newFlights
    }
}
const flightsRequested = () => ({ type: 'FLIGHTS_REQUESTED' })
const onSort = sortType => ({ type: 'SORT', sortType: sortType })
const refresher = () => ({ type: 'REFRESH' })

export {
    flightsLoaded,
    flightsRequested,
    onSort,
    refresher
}