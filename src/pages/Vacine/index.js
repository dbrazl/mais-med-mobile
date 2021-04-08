import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';

import { Container } from './styles';
import BackButton from '../../components/BackButton';

const Vacine = ({ navigation }) => {
    const name = navigation.getParam('name') || 'Vacina';
    const quantity = navigation.getParam('quantity') || 0;
    const backTo = navigation.getParam('backTo') || 'SearchPharm';
    const previousStack = navigation.getParam('previousStack');

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressBack);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    }, []);

    function onPressBack(event) {
        goToPage(backTo, { backTo: previousStack });
        return true;
    }

    function goToPage(page, data) {
        navigation.navigate(page, data);
    }

    return (
        <Container>
            <BackButton
                onPress={() => goToPage(backTo, { backTo: previousStack })}
            />
        </Container>
    );
};

Vacine.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

Vacine.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

export default Vacine;
