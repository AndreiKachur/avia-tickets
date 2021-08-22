import React, { useState } from 'react'
import { connect } from 'react-redux'
import { onSort } from '../../actions/actions.js'

function FilterSort({ onSort }) {
    const [checked, setChecked] = useState([false, false, false])

    const sortList = [
        ['increasing', '- по возрастанию цены', 'ASCEND'],
        ['decreasing', '- по убыванию цены', 'DESCEND'],
        ['time-span', '- по времени в пути', 'TIMESPAN'],
    ]
    const beChecked = e => {
        let newChecked = [false, false, false]
        const idx = sortList.findIndex(el => e.target.name === el[0])
        newChecked[idx] = true
        onSort(sortList[idx][2])
        setChecked(newChecked)
    }
    return (
        <section className='side-bar__section' >
            <h3>Сортировать</h3>
            {
                sortList.map((item, i) => {
                    return (
                        <div key={item[0] + i}>
                            <input
                                type='radio'
                                name={item[0]}
                                checked={checked[i]}
                                onChange={(e) => beChecked(e)}
                            />
                            <label htmlFor={item[0]}>{item[1]}</label>
                        </div>
                    )
                })
            }
        </section>
    )
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, { onSort })(FilterSort)
