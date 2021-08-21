import React from 'react'

function FilterPrice() {
    return (
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
    )
}

export default FilterPrice
