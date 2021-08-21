import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Caption({ points }) {

    const backPoint = points?.length === 1 ? points[0] : points[1]

    return (
        <div>
            <p>
                <b>
                    {points[0]?.departureCity?.caption},
                        {' ' + points[0]?.departureAirport?.caption + ' '}
                    <span className='item_blue'>
                        ({points[0]?.departureAirport?.uid})
                        <BsArrowRight className='item__arrow' />
                    </span>
                    {backPoint?.arrivalCity?.caption},
                        {' ' + backPoint?.arrivalAirport?.caption + ' '}
                    <span className='item_blue'>
                        ({backPoint?.arrivalAirport?.uid})
                    </span>
                </b>
            </p>
        </div>
    )
}

export default Caption
