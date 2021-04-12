import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';
import { BackHandler } from 'react-native';

const VacinesScheduled = ({ navigation }) => {
    const vacines = useSelector(state => state.vacine.vacinesScheduled);
    const backTo = navigation.getParam('backTo') || 'SearchPharm';
    const previousStack = navigation.getParam('previousStack');

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressBack);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    }, []);

    function goToPage(page, data) {
        navigation.navigate(page, data);
    }

    function onPressBack(event) {
        goToPage(backTo, { backTo: previousStack });
        return true;
    }

    return (
        <Container>
            <BackButton
                onPress={() =>
                    goToPage('VacineDate', { backTo: previousStack })
                }
            />
        </Container>
    );
};

VacinesScheduled.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

VacinesScheduled.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

export default VacinesScheduled;
