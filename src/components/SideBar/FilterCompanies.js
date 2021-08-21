import React from 'react'

function FilterCompanies() {
    return (
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
    )
}

export default FilterCompanies
