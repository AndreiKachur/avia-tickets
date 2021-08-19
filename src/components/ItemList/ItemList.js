import React from 'react'
import Item from '../Item';
import './ItemList.scss';

function ItemList() {
    return (
        <main className='item-list'>
            <Item />
            <div className='item-list__more-btn'><button>Показать еще</button></div>
        </main>
    )
}

export default ItemList
