import React from 'react'
import FilterSort from './FilterSort'
import FilterTransfer from './FilterTransfer'
import FilterPrice from './FilterPrice'
import FilterCompanies from './FilterCompanies'
import './SideBar.scss'

function SideBar() {
    return (
        <aside className='side-bar'>
            <FilterSort />
            <FilterTransfer />
            <FilterPrice />
            <FilterCompanies />
        </aside>
    )
}

export default SideBar
