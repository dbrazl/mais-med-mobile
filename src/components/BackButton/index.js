import React from 'react';
import PropTypes from 'prop-types';

import { Container, BackIcon, BackText } from './styles';

function BackButton({ onPress }) {
    return (
        <Container onPress={onPress}>
            <BackIcon />
            <BackText>voltar</BackText>
        </Container>
    );
}

export default BackButton;

BackButton.propTypes = {
    onPress: PropTypes.func,
};

BackButton.defaultProps = {
    onPress: () => {},
};
