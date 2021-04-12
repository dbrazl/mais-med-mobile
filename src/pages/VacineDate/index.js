import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import {
    Container,
    Keyboard,
    Content,
    Figure,
    Name,
    Quantity,
    Message,
} from './styles';
import BackButton from '../../components/BackButton';
import ScheduleList from '../../components/ScheduleList';
import { BackHandler } from 'react-native';

import vacineBoard from '../../assets/icons/vacine-board.png';

const VacineDate = ({ navigation }) => {
    const name = useSelector(state => state.vacine.vacine.name);
    const quantity = useSelector(state => state.vacine.vacine.quantity);
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
                onPress={() => goToPage('VacineCPF', { backTo: previousStack })}
            />
            <Keyboard>
                <Content>
                    <Figure source={vacineBoard} />
                    <Name>{name}</Name>
                    <Quantity>{`${quantity} un`}</Quantity>
                    <Message>Selecione uma data para vacinação</Message>
                    <ScheduleList />
                </Content>
            </Keyboard>
        </Container>
    );
};

VacineDate.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

VacineDate.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

export default VacineDate;
