import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import {
    Container,
    List,
    Item,
    Icon,
    Column,
    Name,
    Schedule,
    PurpleMessage,
    BlackMessage,
} from './styles';
import BackButton from '../../components/BackButton';
import { BackHandler } from 'react-native';

import mask from '../../services/mask';

import vacine from '../../assets/icons/vacine-icon.png';

const VacinesScheduled = ({ navigation }) => {
    const vacines = useSelector(state => state.vacine.vacinesScheduled);
    const backTo = navigation.getParam('backTo') || 'SearchPharm';

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressBack);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    }, []);

    function goToPage(page, data) {
        navigation.navigate(page, data);
    }

    function onPressBack(event) {
        goToPage(backTo);
        return true;
    }

    function renderItem({ item }) {
        const time1 = item.schedule.replace(/\D/g, '').substring(0, 4);
        const time2 = item.schedule.replace(/\D/g, '').substring(4, 8);

        return (
            <Item>
                <Icon source={vacine} />
                <Column>
                    <Name>{item.name}</Name>
                    <Schedule>
                        <PurpleMessage>{item.date} </PurpleMessage>
                        <BlackMessage>as </BlackMessage>
                        <PurpleMessage>{mask(time1, '99:99')} </PurpleMessage>
                        <BlackMessage>a </BlackMessage>
                        <PurpleMessage>{mask(time2, '99:99')} </PurpleMessage>
                        <BlackMessage>horas</BlackMessage>
                    </Schedule>
                </Column>
            </Item>
        );
    }

    return (
        <Container>
            <BackButton onPress={() => goToPage(backTo)} />
            <List
                data={vacines}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
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
