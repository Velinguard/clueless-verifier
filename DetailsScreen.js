import React from 'react'
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { primaryGradientArray } from './utils/Colors'

class DetailsScreen extends React.Component {
	render() {
		/* 2. Get the param, provide a fallback value if not available */
		const { navigation } = this.props
		const itemId = navigation.getParam('itemId', 'NO-ID')
		const otherParam = navigation.getParam('otherParam', 'some default value')

		return (
			<LinearGradient colors={primaryGradientArray} style={styles.container}>
				<View
					style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
				>
					<Text>Details Screen</Text>
					<Text>itemId: {JSON.stringify(itemId)}</Text>
					<Text>otherParam: {JSON.stringify(otherParam)}</Text>
					<Button
						title='Go to Details... again'
						onPress={() =>
							this.props.navigation.push('Details', {
								itemId: Math.floor(Math.random() * 100)
							})
						}
					/>
					<Button
						title='Update the title'
						onPress={() =>
							this.props.navigation.setParams({ otherParam: 'Updated!' })
						}
					/>
					<Button
						title='Go to Home'
						onPress={() => this.props.navigation.navigate('Home')}
					/>
					<Button
						title='Go back'
						onPress={() => this.props.navigation.goBack()}
					/>
				</View>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centered: {
		alignItems: 'center',
		width: 300
	}
})

export default DetailsScreen