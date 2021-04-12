import React from 'react';
import PropTypes from 'prop-types';

import { Container, Keyboard, Content, Figure } from './styles';
import BackButton from '../../components/BackButton';

import vacineBoard from '../../assets/icons/vacine-board.png';

const VacineDate = ({ navigation }) => {
    function goToPage(page, data) {
        navigation.navigate(page, data);
    }

    return (
        <Container>
            <BackButton onPress={() => goToPage('VacineHour')} />
            <Keyboard>
                <Content>
                    <Figure source={vacineBoard} />
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
