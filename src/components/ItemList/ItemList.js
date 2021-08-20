import React, { useEffect, useState } from 'react'
import Item from '../Item';
import './ItemList.scss';

function ItemList({ flightsservice }) {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        flightsservice.getFlightsItems()
            .then(flights => setFlights(flights))
    }, [flightsservice])
    return (
        <main className='item-list'>
            {flights.map((flight, i) => <Item
                key={'flight#' + i}
                flight={flight.flight} />)}
            <div className='item-list__more-btn'><button>Показать еще</button></div>
        </main>
    )
}

export default ItemList
