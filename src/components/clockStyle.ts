import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

export const ClockWrapper = styled.div`
background:#111;
padding:5vw;
`


export const TimePart = styled.span`

font-size:2vw;
color:green;
}
`

export const GlobalStyle = createGlobalStyle`
    body {
        color:#CCC;
        background-color:#222;
    }
    `