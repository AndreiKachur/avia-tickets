const firstFlightsLoaded = newFlights => {
    return {
        type: 'FIRST_FLIGHTS_LOADED',
        payload: newFlights
    }
}
const flightsLoaded = newFlights => {
    return {
        type: 'FLIGHTS_LOADED',
        payload: newFlights
    }
}
const flightsRequested = () => ({ type: 'FLIGHTS_REQUESTED' })

const onSort = sortType => ({ type: 'SORT', sortType: sortType })

const onTransfer = transfer => ({ type: 'TRANSFER', transfer: transfer })

const onCarriers = (id, checked) => ({ type: 'CARRIERS', id: id, checked: checked })

const putPriceBorder = (border, price) => ({
    type: 'PUT_PRICE_BORDER',
    border: border,
    price: price
})

export {
    firstFlightsLoaded,
    flightsLoaded,
    flightsRequested,
    onSort,
    onTransfer,
    onCarriers,
    putPriceBorder
}