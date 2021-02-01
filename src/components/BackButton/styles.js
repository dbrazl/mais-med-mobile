import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BackIcon = styled(Icon).attrs({
    size: 24,
    color: '#000',
    name: 'chevron-left',
})``;

export const BackText = styled.Text`
    font-family: 'Nunito Regular';
    color: black;
    font-size: 18px;
    margin-bottom: 3px;
`;
