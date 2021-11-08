import React from "react"
import styled from "styled-components/native"


export const Navbar = styled.View`
    flex:1;
    height:12%;
    padding:10px;
    background: ${({ theme }) => theme.appHeaderBg};
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content:space-around;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
`