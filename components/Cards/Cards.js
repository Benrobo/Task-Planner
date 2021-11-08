import React from 'react'
import { CardContainer, Left, Right, P, Span } from '../styled/Card'

const Cards = () => {
    return (
        <CardContainer>
            <Cards>
                <Left>
                    <P>Learn some stuff</P>
                    <Span>12/04/2020</Span>
                </Left>
                <Right>
                    <Span>12/04/2020</Span>
                </Right>
            </Cards>
        </CardContainer>
    )
}

export default Cards
