const setWeekDay = date => {
    switch (date.getDay()) {
        case 0: return 'вс'
        case 1: return 'пн'
        case 2: return 'вт'
        case 3: return 'ср'
        case 4: return 'чт'
        case 5: return 'пт'
        case 6: return 'сб'
        default: return
    }
}
const setMonth = date => {
    switch (date.getMonth()) {
        case 0: return ' янв. '
        case 1: return ' фев. '
        case 2: return ' март '
        case 3: return ' апр. '
        case 4: return ' май '
        case 5: return ' июнь '
        case 6: return ' июль '
        case 7: return ' авг. '
        case 8: return ' сент. '
        case 9: return ' окт. '
        case 10: return ' нояб. '
        case 11: return ' дек. '
        default: return
    }
}

const FormatDate = ({ date, arrival = false }) => {
    if (arrival) {
        return (
            <span><b>
                <span className='item_blue'>
                    {new Date(date.arrivalDate).getDate()}
                    {setMonth(new Date(date.arrivalDate))}
                    {setWeekDay(new Date(date.arrivalDate))}
                </span>
                {' '}
                {date.arrivalDate.substr(-8, 5)}
            </b></span>
        )
    }
    return (
        <span><b>
            {date.departureDate.substr(-8, 5)}
            {' '}
            <span className='item_blue'>
                {new Date(date.departureDate).getDate()}
                {setMonth(new Date(date.departureDate))}
                {setWeekDay(new Date(date.departureDate))}
            </span>
        </b></span>
    )
}
export default FormatDate