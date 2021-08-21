import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions.js'
import Item from '../Item';
import Spinner from '../Spinner'
import './ItemList.scss';

function ItemList({ flights, refresh, flightsservice,
    flightsRequested, flightsLoaded, loading }) {

    let [flightsAmount, setFlightsAmount] = useState(2)
    flights = flights.slice(0, flightsAmount)

    useEffect(() => { }, [refresh])

    useEffect(() => {
        flightsRequested();
        flightsservice.getFlightsItems()
            .then(flights => flightsLoaded(flights))
    }, [flightsservice, flightsRequested, flightsLoaded])

    if (loading) {
        return <main className='item-list'><Spinner /></main>
    }
    console.log(flights[0].flight.legs[0].duration);

    return (
        <main className='item-list'>
            {flights.map((flight, i) => <Item
                key={'flight#' + i}
                flight={flight.flight} />)}
            <div className='item-list__more-btn'>
                <button onClick={() => setFlightsAmount(flightsAmount += 2)}>
                    Показать еще
                </button>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => ({
    flights: state.flights,
    loading: state.loading,
    refresh: state.refresh,
})
export default connect(mapStateToProps, actions)(ItemList)
