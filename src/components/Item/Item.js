import React from 'react'
import './Item.scss';

function Item() {
    return (
        <section className='item'>
            <>
                <header className='item__header'>
                    <h2>Polish Airlines</h2>
                    <div className='item__header__right'>
                        <h2>21049 руб.</h2>
                        <p>Стоимость для одного взрослого пассажира</p>
                    </div>
                </header>
                <div>
                    <p><b>Москва, ШЕРЕМЕТЬЕВО </b>(SVO) -{'>'} <b>ЛОНДОН, Лондон, Хитроу (LHR)</b></p>
                </div>
                <hr />
                <div className='item__time'>
                    <span><b>20:40 18 авг. вт </b></span>
                    <span><b>23 ч 35 мин </b></span>
                    <span><b>18 авг. вт 20:40</b></span>
                </div>
                <div className='item__changing'>
                    <div></div>
                </div>
                <div>
                    <p>Рейс выполняет: LOT Polish Airlines</p>
                </div>
            </>
            <hr className='item_rule-bold' />
            <>
                <div>
                    <p><b>Москва, ШЕРЕМЕТЬЕВО </b>(SVO) -{'>'} <b>ЛОНДОН, Лондон, Хитроу (LHR)</b></p>
                </div>
                <hr />
                <div className='item__time'>
                    <span><b>20:40 18 авг. вт </b></span>
                    <span><b>23 ч 35 мин </b></span>
                    <span><b>18 авг. вт 20:40</b></span>
                </div>
                <div className='item__changing'>
                    <div></div>
                    <span>1 пересадка</span>
                </div>
                <div>
                    <p>Рейс выполняет: LOT Polish Airlines</p>
                </div>
            </>
            <button className='item__button'>ВЫБРАТЬ</button>
        </section>
    )
}

export default Item
