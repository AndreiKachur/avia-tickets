import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Caption({ points }) {
    return (
        <div>
            <p>
                <b>
                    {points[0].departureCity.caption},
                        {' ' + points[0].departureAirport.caption + ' '}
                    <span className='item_blue'>
                        ({points[0].departureAirport.uid})
                        <BsArrowRight className='item__arrow' />
                    </span>
                    {points[1].arrivalCity.caption},
                        {' ' + points[1].arrivalAirport.caption + ' '}
                    <span className='item_blue'>
                        ({points[1].arrivalAirport.uid})
                </span>
                </b>
            </p>
        </div>
    )
}

export default Caption
