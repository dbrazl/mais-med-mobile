import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    padding: 5px 10px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
    background: white;
`;

export const SearchIcon = styled(Icon).attrs({
    name: 'search',
})``;

export const Input = styled.TextInput`
    flex: 1;
    margin-left: 5px;
    color: black;
    font-size: 18px;
    font-family: 'Nunito Regular';
`;
