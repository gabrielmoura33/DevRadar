import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import { WebView } from 'react-native-webview';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
          title: 'DevRadar'
      },
    },
    Profile:{
      screen: Profile,
      navigationOptions: {
        title: 'Perfil No GitHub'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7459c1',
      }
    },
  })
);

export default Routes;