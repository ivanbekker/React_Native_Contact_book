import { StackNavigator } from 'react-navigation';

import ContactBook from '../modules/views/ContactBook';
import ChangeContact from '../modules/views/ChangeContact';

export const AppRoutes = StackNavigator({
  Main: { screen: ContactBook },
  ChangeContact: { screen: ChangeContact },
}, {
  headerMode: 'none',
});

export default AppRoutes;
