const initialState = {
    flights: [],
    loading: true,
    error: false,
    refresh: 0
}

const reducer = (state = initialState, actions) => {
    const { flights, refresh } = state
    let newFlights = []

    switch (actions.type) {
        case 'FLIGHTS_LOADED':
            return {
                ...state,
                flights: actions.payload,
                loading: false,
            }
        case 'FLIGHTS_REQUESTED':
            return {
                ...state,
                loading: true,
            }
        case 'SORT':
            newFlights = (() => {
                const getDeep = el => el.flight.price.total.amount

                const getDuration = el =>
                    el.flight.legs.reduce((res, el) => res + el.duration, 0)

                switch (actions.sortType) {
                    case 'ASCEND': return (
                        flights.sort((a, b) => getDeep(a) - getDeep(b))
                    )
                    case 'DESCEND': return (
                        flights.sort((a, b) => getDeep(b) - getDeep(a))
                    )
                    case 'TIMESPAN': return (
                        flights.sort((a, b) => getDuration(a) - getDuration(b))
                    )
                    default: return flights
                }
            })()

            return {
                ...state,
                flights: newFlights,
                refresh: refresh + 1
            }
        default: return state
    }
}

export default reducer