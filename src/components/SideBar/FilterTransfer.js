import React from 'react'
import { connect } from 'react-redux'
import { onTransfer } from '../../actions/actions.js'

function FilterTransfer({ transfer, onTransfer }) {

    return (
        <section className='side-bar__section'>
            <h3>Фильтровать</h3>
            <div>
                <input type='checkbox' name='with-changing'
                    checked={transfer === 'one'}
                    onChange={() => onTransfer('one')} />
                <label htmlFor='with-changeing'>- 1 пересадка</label>
            </div>
            <div>
                <input type='checkbox' name='without-changing'
                    checked={transfer === 'none'}
                    onChange={() => onTransfer('none')} />
                <label htmlFor='without-changing'>- без пересадок</label>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => ({
    transfer: state.transfer
})
export default connect(mapStateToProps, { onTransfer })(FilterTransfer)
