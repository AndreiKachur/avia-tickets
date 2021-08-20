import React from 'react'
import Caption from './Caption'
import Date from './Date'
import './Item.scss';
import { BiRuble } from 'react-icons/bi'

function Item({ flight }) {
    const {
        carrier: { caption },
        price: { total: { amount, currency } },
        legs: [direction, backDirection],
        seats: [seats] } = flight

    const getSeatsAmount = seats => {
        switch (seats.count) {
            case 1: return 'одного взрослого пассажира'
            default: return
        }
    }

    return (
        <section className='item'>

            <header className='item__header'>
                <h2>{caption}</h2>
                <div className='item__header__right'>
                    <h2>{amount} {currency === 'руб.'
                        ? <BiRuble className='item__rub' />
                        : currency}</h2>
                    <p>Стоимость для {getSeatsAmount(seats)}</p>
                </div>
            </header>

            <Caption points={direction.segments} />
            <hr />
            <Date direction={direction} />
            <div><p>Рейс выполняет: {caption}</p></div>

            <hr className='item_rule-bold' />

            <Caption points={backDirection.segments} />
            <hr />
            <Date direction={backDirection} />
            <div><p>Рейс выполняет: {caption}</p></div>

            <button className='item__button'>ВЫБРАТЬ</button>
        </section>
    )
}

export default Item
