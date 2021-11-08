// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NativeRouter, Routes, Route, Link } from "react-router-native"
import { Container } from './components/styled/Container';
import Home from './Screens/Home'
import About from './Screens/About'
import AddTask from './Screens/AddTask'
import theme from './components/styled/Theme';
import Navigation from './components/Navbar/Navigation'
import TopHeader from './components/Header/Header';



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container style={StyleSheet.navcontainer}>
        <StatusBar backgroundColor={theme.statusBg} />
        {/* <TopHeader /> */}
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<AddTask />} />
          </Routes>
          <Navigation theme={theme} />
        </NativeRouter>
        {/* <StatusBar style="auto" /> */}
      </Container>
    </ThemeProvider>
  );
}
