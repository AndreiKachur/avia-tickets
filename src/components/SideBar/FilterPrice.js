import React from 'react'
import { connect } from 'react-redux'
import { putPriceBorder } from '../../actions/actions.js'

function FilterPrice({ putPriceBorder }) {

    const priceList = [
        ['from', 'От', 'FROM'],
        ['to', 'До', 'TO'],
    ]

    return (
        <section className='side-bar__section'>
            <h3>Цена</h3>
            {
                priceList.map((item, i) => {
                    return (
                        <div className='side-bar__section__price' key={item[0] + i}>
                            <div><label htmlFor={item[0]}>{item[1]}</label></div>
                            <input
                                type='number'
                                name={item[0]}
                                className='side-bar__section__input-text'
                                onChange={(e) => putPriceBorder(item[2], e.target.value)}
                            />

                        </div>
                    )
                })
            }
        </section>
    )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { putPriceBorder })(FilterPrice)
