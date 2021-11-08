import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { H1, P, Header, HeaderMain, Ovl, Top, Bottom, Left, H2, Right, Span } from '../styled/Header'

const TopHeader = () => {
    return (
        <HeaderMain>
            <Ovl>
                <Top>
                    <H1>Welcome Back</H1>
                    <P>Wed, Nov 4 2021</P>
                </Top>
                <Bottom>
                    <Left>
                        <Span>Lagos</Span>
                    </Left>
                    <Right>
                        <H2>190CE</H2>
                        <H2>80FH</H2>
                    </Right>
                </Bottom>
            </Ovl>
            <Header
                imageStyle={styles.imgBgCont}
                resizeMode="cover"
                source={{ uri: "https://images.unsplash.com/photo-1491466424936-e304919aada7" }}
            ></Header>
        </HeaderMain>
    )
}

export default TopHeader

const styles = StyleSheet.create({
    imgBgCont: {
        borderRadius: 10,
    }
})
