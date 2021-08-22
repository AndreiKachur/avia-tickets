import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions.js'
import Flightsservice from '../../services/flights-service'
import Item from '../Item';
import Spinner from '../Spinner'
import './ItemList.scss';

function ItemList({ flights, refresh, flightsRequested, firstFlightsLoaded, loading }) {

    let [flightsAmount, setFlightsAmount] = useState(2)

    useEffect(() => { }, [refresh])

    useEffect(() => {
        flightsRequested();
        new Flightsservice().getFlightsItems()
            .then(flights => firstFlightsLoaded(flights))
    }, [flightsRequested, firstFlightsLoaded])

    flights = flights.slice(0, flightsAmount)

    if (loading) {
        return <main><Spinner /></main>
    }
    if (flights.length === 0) {
        return (
            <main className='item-list item-list_center'>
                <h1>К сожалению, ничего не найдено.</h1>
                <h3>Попробуйте изменить фильтры поиска.</h3>
                <img src='https://i0.wp.com/epifora.by/wp-content/uploads/2020/07/plane-5271535_1280.png' alt='not found' />
            </main>
        )
    }

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
