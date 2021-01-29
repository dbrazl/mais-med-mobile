import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import transition from './transition';

import SignIn from '../pages/SignIn';

export const SignSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SignIn,
    },
    {
        transition: transition(),
    }
);

export const UserSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SignIn,
    },
    {
        transition: transition(),
    }
);

export const AdministratorSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SignIn,
    },
    {
        transition: transition(),
    }
);
