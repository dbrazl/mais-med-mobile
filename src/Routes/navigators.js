import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import transition from './transition';

import SearchPharm from '../pages/SearchPharm';
import Pharm from '../pages/Pharm';
import SearchMedicine from '../pages/SearchMedicine';

export const SignSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SearchPharm,
        Pharm,
        SearchMedicine,
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
