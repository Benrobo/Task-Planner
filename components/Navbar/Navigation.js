import React from 'react'
import { Text } from 'react-native'
import { Link, NativeRouter } from 'react-router-native'
import { Navbar } from "../styled/Navbar"
import { Ionicons } from '@expo/vector-icons'

const Navigation = ({ theme }) => {
    return (
        <Navbar>
            <Link to="/">
                <Ionicons name="home-outline" color={theme.textColor} size={20} />
            </Link>
            <Link to="/add">
                <Ionicons name="add-circle-outline" color={theme.textColor} size={25} />
            </Link>
            <Link to="/about">
                <Ionicons name="person-outline" color={theme.textColor} size={20} />
            </Link>
        </Navbar>
    )
}

export default Navigation
