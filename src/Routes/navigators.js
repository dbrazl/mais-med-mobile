import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import transition from './transition';

import SearchPharm from '../pages/SearchPharm';

export const SignSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SearchPharm,
    },
    {
        transition: transition(),
    }
);

export const UserSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SearchPharm,
    },
    {
        transition: transition(),
    }
);

export const AdministratorSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SearchPharm,
    },
    {
        transition: transition(),
    }
);
