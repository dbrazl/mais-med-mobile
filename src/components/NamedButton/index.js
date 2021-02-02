import React from 'react';
import PropTypes from 'prop-types';

import { Container, IconContainer, Icon, TextContainer, Text } from './styles';
import styles from '../../globals/styles';

function NamedButton({ iconSource, background, color, text, onPress }) {
    return (
        <Container onPress={onPress}>
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
    onPress: PropTypes.func,
};

NamedButton.defaultProps = {
    iconSource: '',
    background: '#6DA0CF',
    color: 'white',
    text: 'Botão',
    onPress: () => {},
};

export default NamedButton;
