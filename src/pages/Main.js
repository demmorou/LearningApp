import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Welcome to React + Laravel </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
