
import { createSwitchNavigator, StackNavigator, SwitchNavigator } 
from 'react-navigation';
import Home from './components/common/Home'
import LoginForm from './components/loginForm'

export default SwitchNavigator(
    {
      AuthLoading: LoginForm,
      App: Home,
      Auth: LoginForm,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );