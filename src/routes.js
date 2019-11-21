import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';

export default createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    }
})