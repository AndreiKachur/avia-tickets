import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropupCircle } from 'react-icons/io'

function SrollUp() {
    return (
        <ScrollToTop smooth top={100}
            style={{
                background: 'transparent',
                boxShadow: 'unset'
            }}

            component={
                <IoIosArrowDropupCircle
                    style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        color: 'rgba(0, 138, 202,.85)',
                    }}
                />}
        />
    )
}

export default SrollUp
