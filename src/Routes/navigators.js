import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import transition from './transition';

import SearchPharm from '../pages/SearchPharm';
import Pharm from '../pages/Pharm';
import SearchMedicine from '../pages/SearchMedicine';
import VacineCPF from '../pages/VacineCPF';
import VacineDate from '../pages/VacineDate';
import VacineSchedule from '../pages/VacineSchedule';

export const SignSwitchNavigator = createAnimatedSwitchNavigator(
    {
        SearchPharm,
        Pharm,
        SearchMedicine,
        VacineCPF,
        VacineDate,
        VacineSchedule,
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
