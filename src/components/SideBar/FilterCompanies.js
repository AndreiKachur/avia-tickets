import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Flightsservice from '../../services/flights-service'
import * as actions from '../../actions/actions.js'

function FilterCompanies({ flightsRequested, flightsLoaded, firstFlightsLoaded,
    onCarriers, transfer, carriers, carriersChecked }) {

    useEffect(() => {
        flightsRequested();
        new Flightsservice().getFiltered(carriers, carriersChecked, transfer)
            .then(flights => {
                flightsLoaded(flights)
                if (carriers.length === 0) {
                    firstFlightsLoaded()
                }
            })
    }, [transfer, flightsLoaded, flightsRequested,
        carriers, carriersChecked, firstFlightsLoaded])

    return (
        <section className='side-bar__section'>
            <h3>Авиакомпании</h3>
            {carriers.map((carrier, i) => {
                let carrierCut = carrier.length > 20
                    ? carrier.slice(0, 18) + '...'
                    : carrier
                return (
                    <div key={carrier}>
                        <input type='checkbox' name={carrier} data-id={i}
                            defaultChecked={carriersChecked[i]}
                            onChange={(e) => onCarriers(e.target.dataset.id, e.target.checked)} />
                        <label htmlFor={carrier}>- {carrierCut}</label>
                    </div>
                )
            })}
        </section>
    )
}
const mapStateToProps = (state) => ({
    carriers: state.carriers,
    carriersChecked: state.carriersChecked,
    transfer: state.transfer
})
export default connect(mapStateToProps, actions)(FilterCompanies)
