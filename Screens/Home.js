import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import Cards from '../components/Cards/Cards';
import TopHeader from '../components/Header/Header';
import { P } from '../components/styled/Header';
import { HomeContainer } from '../components/styled/Home';


const Home = () => {
    return (
        <HomeContainer>
            <TopHeader />
            <P>Resent Tasks</P>
            <Text>Welcome</Text>
            <Cards />
        </HomeContainer>
    )
}

export default Home
