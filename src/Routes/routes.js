import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {
    SignSwitchNavigator,
    UserSwitchNavigator,
    AdministratorSwitchNavigator,
} from './navigators';

selectBottomMenu = (isSigned, personality) => {
    if (isSigned && personality === 'administrator') {
        return 'Administrator';
    }

    if (isSigned) {
        return 'User';
    }

    // return 'Sign';
    return 'User';
};

navigation = (isSigned, personality) =>
    createSwitchNavigator(
        {
            Sign: SignSwitchNavigator,
            User: UserSwitchNavigator,
            Administrator: AdministratorSwitchNavigator,
        },
        {
            initialRouteName: selectBottomMenu(isSigned, personality),
        }
    );

export default (isSigned = false, personality = 'user') =>
    createAppContainer(navigation(isSigned, personality));
