import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    padding: 0 20px;
    padding-top: 50px;
    flex: 1;
    background: white;
`;

export const Keyboard = styled.KeyboardAvoidingView.attrs({
    behavior: 'position',
})``;

export const Content = styled.View`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Figure = styled.Image.attrs({
    resizeMode: 'contain',
})`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
`;

export const Name = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-family: 'Nunito Regular';
    font-size: 18px;
    color: black;
    text-align: center;
`;

export const Quantity = styled.Text`
    margin-top: 10px;
    font-family: 'Nunito Regular';
    font-size: 18px;
    color: #808080;
    text-align: center;
`;
