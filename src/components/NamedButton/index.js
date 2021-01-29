import React from 'react';
import PropTypes from 'prop-types';

import { Container, IconContainer, Icon, TextContainer, Text } from './styles';
import styles from '../../globals/styles';

function NamedButton({ iconSource, background, color, text }) {
    return (
        <Container>
            <TextContainer background={background}>
                <Text color={color}>{text}</Text>
            </TextContainer>
            <IconContainer style={styles.shadow}>
                <Icon source={iconSource} />
            </IconContainer>
        </Container>
    );
}

NamedButton.propTypes = {
    iconSource: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    background: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
};

NamedButton.defaultProps = {
    iconSource: '',
    background: '#6DA0CF',
    color: 'white',
    text: 'Botão',
};

export default NamedButton;
