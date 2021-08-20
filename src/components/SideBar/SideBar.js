import React from 'react'
import './SideBar.scss'

function SideBar() {
    return (
        <aside className='side-bar'>

            <section className='side-bar__section'>
                <h3>Сортировать</h3>
                <div>
                    <input type='radio' name='increasing' />
                    <label htmlFor='increasing'>- по возрастанию цены</label>
                </div>
                <div>
                    <input type='radio' name='decreasing' />
                    <label htmlFor='decreasing'>- по убыванию цены</label>
                </div>
                <div>
                    <input type='radio' name='time' />
                    <label htmlFor='time'>- по времени в пути</label>
                </div>
            </section>

            <section className='side-bar__section'>
                <h3>Фильтровать</h3>
                <div>
                    <input type='checkbox' name='with-changing' />
                    <label htmlFor='with-changeing'>- 1 пересадка</label>
                </div>
                <div>
                    <input type='checkbox' name='without-changing' />
                    <label htmlFor='without-changing'>- без пересадок</label>
                </div>
            </section>

            <section className='side-bar__section'>
                <h3>Цена</h3>
                <div className='side-bar__section__price'>
                    <div><label htmlFor='from'>От</label></div>
                    <input type='number' name='from' className='side-bar__section__input-text' />
                </div>
                <div className='side-bar__section__price side-bar__section_zero-margin'>
                    <div><label htmlFor='to'>До</label></div>
                    <input type='number' name='to' className='side-bar__section__input-text' />
                </div>
            </section>

            <section className='side-bar__section'>
                <h3>Авиакомпании</h3>
                <div>
                    <input type='checkbox' name='with-changing' />
                    <label htmlFor='with-changeing'>- LOT Polish Airlines от 20000 р.</label>
                </div>
                <div>
                    <input type='checkbox' name='without-changing' />
                    <label htmlFor='without-changing'>- Аэрофлот рос... от 30000 р.</label>
                </div>
            </section>

        </aside>
    )
}

export default SideBar
