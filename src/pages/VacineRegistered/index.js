import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import {
    Container,
    Content,
    Figure,
    Keyboard,
    Message,
    Schedule,
    PurpleMessage,
    BlackMessage,
} from './styles';
import BackButton from '../../components/BackButton';
import { BackHandler } from 'react-native';

import vacineBoard from '../../assets/icons/vacine-board.png';

const VacineRegistered = ({ navigation }) => {
    const date = useSelector(state => state.vacine.preferences.date);
    const schedule = useSelector(state => state.vacine.preferences.schedule);
    const time1 = schedule.replace(/\D/g, '').substring(0, 4);
    const time2 = schedule.replace(/\D/g, '').substring(4, 8);
    const backTo = navigation.getParam('backTo') || 'SearchPharm';
    const previousStack = navigation.getParam('previousStack');

    const dispatch = useDispatch();

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
            <Keyboard>
                <Content>
                    <Figure source={vacineBoard} />
                    <Message fontWeight="bold">
                        Seu agendamento foi criado!
                    </Message>
                    <Message marginTop="20px">
                        Lembre-se de levar sua carteirinha de vacinação e um
                        documento com foto!
                    </Message>
                    <Schedule>
                        <PurpleMessage>{date}</PurpleMessage>{' '}
                        <BlackMessage>as</BlackMessage>{' '}
                        <PurpleMessage>{time1}</PurpleMessage>{' '}
                        <BlackMessage>a</BlackMessage>{' '}
                        <PurpleMessage>{time2}</PurpleMessage>{' '}
                        <BlackMessage>horas</BlackMessage>
                    </Schedule>
                </Content>
            </Keyboard>
        </Container>
    );
};

VacineRegistered.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

VacineRegistered.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

export default VacineRegistered;
