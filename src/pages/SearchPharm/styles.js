import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

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
    padding: 0 20px;
    width: 100%;
`;

export const NamedButtonPosition = styled.View`
    position: absolute;
    top: 40px;
    right: 20px;
`;
