import React from 'react';
import PropTypes from 'prop-types';

import { Container, IconContainer, Icon, TextContainer, Text } from './styles';
import styles from '../../globals/styles';

import pills from '../../assets/icons/pills.png';

function NamedButton({
    iconSource,
    background,
    color,
    text,
    onPress,
    labelWidth,
}) {
    return (
        <Container onPress={onPress}>
            <TextContainer background={background} width={labelWidth}>
                <Text color={color}>{text}</Text>
            </TextContainer>
            <IconContainer style={styles.shadow}>
                <Icon source={iconSource} />
            </IconContainer>
        </Container>
    );
}

NamedButton.propTypes = {
    iconSource: PropTypes.node,
    background: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func,
    labelWidth: PropTypes.string,
};

NamedButton.defaultProps = {
    iconSource: pills,
    background: '#6DA0CF',
    color: 'white',
    text: 'Botão',
    onPress: () => {},
    labelWidth: 'auto',
};

export default NamedButton;
