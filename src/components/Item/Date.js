import React from 'react'
import FormatDate from './FormatDate.js'

function Date({ direction }) {

    if (!direction?.segments?.length) {
        return 'Direction data error.'
    }
    const getDuration = duration => [Math.floor(duration / 60), duration % 60]

    const getTransfer = dirSegmentsLength => {
        return dirSegmentsLength === 1
            ? null
            : <span>{dirSegmentsLength - 1} пересадка</span>
    }
    const backDate = direction.segments.length === 1
        ? direction.segments[0]
        : direction.segments[1]

    const flightDuration = getDuration(direction.duration)

    return (
        <>
            <div className='item__time'>
                <FormatDate date={direction.segments[0]} />
                <span><b>
                    {flightDuration[0]} ч {flightDuration[1]} мин
                    </b></span>
                <span><b>
                    <FormatDate date={backDate} arrival />
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
