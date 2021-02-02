import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    padding: 0 20px;
    padding-top: 50px;
    flex: 1;
    background: white;
`;

export const SearchContainer = styled.View`
    margin: 20px 0;
`;

export const List = styled.FlatList``;

export const MessageContainer = styled(Animatable.View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Message = styled.Text`
    width: 200px;
    text-align: center;
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: #808080;
`;

export const ItemContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Wrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const IconContainer = styled.View`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #6da0cf;
    border-radius: 10px;
`;

export const Icon = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 30px;
    height: 30px;
`;

export const Column = styled.View`
    margin-left: 10px;
`;

export const PharmName = styled.Text.attrs({
    numberOfLines: 1,
})`
    width: 150px;
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: black;
`;

export const Distance = styled.Text`
    font-size: 16px;
    font-family: 'Nunito Regular';
    color: #808080;
`;

export const Units = styled.Text`
    font-size: 18px;
    font-family: 'Nunito Regular';
    color: #808080;
`;

export const AnimationWrapper = styled.View`
    width: 150px;
    height: 150px;
`;
