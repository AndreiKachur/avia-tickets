import React from 'react'
import FormatDate from './FormatDate.js'

function Date({ direction }) {

    const getDuration = duration => [Math.floor(duration / 60), duration % 60]
    const getTransfer = dirSegmentsLength => {
        return dirSegmentsLength === 1
            ? null : <span>{dirSegmentsLength - 1} пересадка</span>
    }

    const flightDuration = getDuration(direction.duration)

    return (
        <>
            <div className='item__time'>
                <FormatDate date={direction.segments[0]} />
                <span><b>
                    {flightDuration[0]} ч {flightDuration[1]} мин
                    </b></span>
                <span><b>
                    <FormatDate date={direction.segments[1]} arrival />
                </b></span>
            </div>
            <div className='item__changing'>
                <div></div>
                {getTransfer(direction.segments.length)}
            </div>
        </>
    )
}

export default Date
