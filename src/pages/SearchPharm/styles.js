import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';

export const Map = styled(MapView)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const MarkerMap = styled(Marker)``;

export const MarkerIcon = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 50px;
    height: 50px;
`;

export const AddressContainer = styled.View`
    position: absolute;
    bottom: 20;
    z-index: 100;
    margin: 0 20px;
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

export const AddressInput = styled.TextInput`
    flex: 1;
    margin-left: 5px;
    color: black;
    font-size: 18px;
    font-family: 'Nunito Regular';
`;

export const NamedButtonPosition = styled.View`
    position: absolute;
    top: 40px;
    right: 20px;
`;
