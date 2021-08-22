import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const Spinner = () => {
    const override = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 500px;
        `;
    return <BeatLoader css={override} size={20} color={'rgb(253, 155, 42)'} />
}

export default Spinner;