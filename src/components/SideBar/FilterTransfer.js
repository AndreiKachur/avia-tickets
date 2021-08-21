import React from 'react'

function FilterTransfer() {
    return (
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
    )
}

export default FilterTransfer
