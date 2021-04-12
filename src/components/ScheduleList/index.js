import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Title, List, Item, IconShell, Icon, Label } from './styles';

import calendar from '../../assets/icons/calendar.png';

const ScheduleList = ({ label, items, listIcon, height, onPressItem }) => {
    function renderItem({ item }) {
        return (
            <Item onPress={() => onPressItem(item)}>
                <IconShell>
                    <Icon source={listIcon} />
                </IconShell>
                <Label>{item.label}</Label>
            </Item>
        );
    }

    return (
        <Container>
            <Title>{label}</Title>
            <List
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                height={Dimensions.get('screen').height - height}
            />
        </Container>
    );
};

ScheduleList.propTypes = {
    label: PropTypes.string,
    items: PropTypes.array,
    listIcon: PropTypes.node,
    height: PropTypes.number,
    onPressItem: PropTypes.func,
};

ScheduleList.defaultProps = {
    label: 'Lista',
    items: [
        { label: 'Item 1' },
        { label: 'Item 2' },
        { label: 'Item 3' },
        { label: 'Item 4' },
        { label: 'Item 5' },
    ],
    listIcon: calendar,
    height: 415,
    onPressItem: () => {},
};

export default ScheduleList;
