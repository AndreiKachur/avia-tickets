const initialState = {
    flights: [],
    unfilteredFlights: [],
    loading: true,
    error: false,
    refresh: 0,
    minPrice: 0,
    maxPrice: 1e8,
    sortState: 0,
    carriers: [],
    carriersChecked: [],
    transfer: 'all'
}

const reducer = (state = initialState, actions) => {

    const { unfilteredFlights, refresh, sortState, minPrice, maxPrice, transfer, carriersChecked } = state
    let newMinPrice, newMaxPrice, newCarriers, newCarriersChecked = [], newFlights = []

    const onSort = (sortType, newFlights) => {
        const getPrice = el => el.flight.price.total.amount

        const getDuration = el =>
            el.flight.legs.reduce((res, el) => res + el.duration, 0)

        switch (sortType) {
            case 'ASCEND': return (
                newFlights.sort((a, b) => getPrice(a) - getPrice(b))
            )
            case 'DESCEND': return (
                newFlights.sort((a, b) => getPrice(b) - getPrice(a))
            )
            case 'TIMESPAN': return (
                newFlights.sort((a, b) => getDuration(a) - getDuration(b))
            )
            default: return newFlights
        }
    }
    const filterPrice = newFlights => {

        actions.border === 'FROM'
            ? newMinPrice = actions.price
            : newMinPrice = state.minPrice

        actions.border === 'TO'
            ? newMaxPrice = actions.price
            : newMaxPrice = state.maxPrice

        if (!newMinPrice) newMinPrice = 0
        if (!newMaxPrice) newMaxPrice = 1e8
        if (newMinPrice === 0 && newMaxPrice === 1e8) {
            return newFlights
        }

        const getPrice = el => el?.flight.price.total.amount

        return newFlights.filter(flight => {
            const price = +getPrice(flight)
            return price >= newMinPrice && price < newMaxPrice
        })
    }

    switch (actions.type) {
        case 'FIRST_FLIGHTS_LOADED':
            newCarriers = Array
                .from(new Set(actions.payload.map(el => el.flight.carrier.caption)))
                .sort()
            newCarriers.forEach(el => newCarriersChecked.push(false))

            return {
                ...state,
                flights: actions.payload,
                unfilteredFlights: actions.payload,
                carriers: newCarriers,
                carriersChecked: newCarriersChecked,
                loading: false
            }
        case 'FLIGHTS_LOADED':

            newFlights = sortState === 0
                ? actions.payload
                : onSort(sortState, actions.payload)
            newFlights = (minPrice === 0 && maxPrice === 1e8)
                ? newFlights
                : filterPrice(newFlights)

            return {
                ...state,
                flights: newFlights,
                unfilteredFlights: newFlights,
                loading: false,
            }
        case 'FLIGHTS_REQUESTED':
            return {
                ...state,
                loading: true,
            }
        case 'SORT':
            newFlights = filterPrice(unfilteredFlights)
            newFlights = onSort(actions.sortType, newFlights)

            return {
                ...state,
                flights: newFlights,
                refresh: refresh + 1,
                sortState: actions.sortType
            }
        case 'TRANSFER':
            if (actions.transfer === transfer) actions.transfer = 'all'

            return {
                ...state,
                transfer: actions.transfer
            }
        case 'CARRIERS':

            return {
                ...state,
                carriersChecked: [
                    ...carriersChecked.slice(0, +actions.id),
                    actions.checked,
                    ...carriersChecked.slice(+ actions.id + 1)]
            }
        case 'PUT_PRICE_BORDER':

            newFlights = sortState === 0
                ? unfilteredFlights
                : onSort(sortState, unfilteredFlights)

            newFlights = filterPrice(newFlights)

            return {
                ...state,
                flights: newFlights,
                refresh: refresh + 1,
                minPrice: newMinPrice,
                maxPrice: newMaxPrice
            }
        default: return state
    }
}

export default reducer