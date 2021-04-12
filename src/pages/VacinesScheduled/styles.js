import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    padding: 0 20px;
    padding-top: 50px;
    flex: 1;
    background: white;
`;

export const Title = styled.Text`
    margin-top: 40px;
    font-size: 18px;
    font-family: 'Nunito Regular';
    font-weight: bold;
    color: black;
`;

const height = Dimensions.get('screen').height;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
    height: ${height - 77}px;
`;

export const Item = styled.View`
    margin-top: 20px;
    height: 50px;
    display: flex;
    flex-direction: row;
`;

export const Icon = styled.Image`
    width: 50px;
    height: 50px;
`;

export const Column = styled.View`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: black;
`;

export const Schedule = styled.View`
    display: flex;
    flex-direction: row;
`;

export const PurpleMessage = styled.Text`
    font-family: 'Nunito Regular';
    font-size: 12px;
    font-weight: bold;
    color: #ba98ff;
    text-align: center;
`;

export const BlackMessage = styled.Text`
    font-family: 'Nunito Regular';
    font-size: 12px;
    color: black;
    text-align: center;
`;
