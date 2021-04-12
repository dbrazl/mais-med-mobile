import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 201px;
`;

export const IconContainer = styled.View`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background: white;
`;

export const Icon = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 24px;
    height: 24px;
`;

export const TextContainer = styled.View`
    position: absolute;
    right: 24px;
    width: ${props => (props.width ? props.width : 'auto')};
    min-width: 177px;
    height: 50px;
    padding-left: 15px;
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    background: ${props => props.background};
`;

export const Text = styled.Text`
    color: ${props => props.color};
    font-size: 18px;
    font-family: 'Nunito Regular';
`;
