import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import _ from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { indexPharmsRequest } from '../../store/modules/pharms/actions';
import {
    initGeocoding,
    searchAddressRequest,
    setRegion,
} from '../../store/modules/map/actions';

import {
    Map,
    MarkerMap,
    MarkerIcon,
    SearchIcon,
    AddressInput,
    AddressContainer,
    NamedButtonPosition,
} from './styles';
import NamedButton from '../../components/NamedButton';

import pills from '../../assets/icons/pills.png';
import markerImage from '../../assets/icons/marker.png';
import styles from '../../globals/styles';

export default function SearchPharm() {
    const region = useSelector(state => state.map.region);
    const pharms = useSelector(state => state.pharms.data);

    const dispatch = useDispatch();

    useEffect(async () => {
        const granted = await grantGeolocationPermission();
        if (granted === PermissionsAndroid.RESULTS.GRANTED)
            setCurrentPosition();

        dispatch(initGeocoding());
        dispatch(indexPharmsRequest());
    }, []);

    function setCurrentPosition() {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude } = position.coords;
                const { longitude } = position.coords;
                dispatch(setRegion(latitude, longitude));
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    async function grantGeolocationPermission() {
        return await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Sua localização',
                message: `Poderia nós conceder acesso a sua localização para acharmos os postos de saúde mais próximos?`,
                buttonNegative: 'Não',
                buttonPositive: 'Sim',
            }
        );
    }

    function createMarker(pharm, index) {
        return (
            <MarkerMap
                key={`${index}`}
                coordinate={pharm.location}
                title={pharm.name}
                description={pharm.neighborhood}
            >
                <MarkerIcon source={markerImage} />
            </MarkerMap>
        );
    }

    function searchAddress(address) {
        dispatch(searchAddressRequest(address));
    }

    return (
        <>
            <Map
                region={region}
                initialRegion={region}
                showsUserLocation={true}
                mapPadding={{ top: 100, right: 18 }}
            >
                {pharms.map(createMarker)}
            </Map>
            <NamedButtonPosition>
                <NamedButton iconSource={pills} text="Medicamentos" />
            </NamedButtonPosition>
            <AddressContainer style={styles.shadow}>
                <SearchIcon color="black" size={24} />
                <AddressInput
                    placeholder="Buscar endereço"
                    onChangeText={_.debounce(searchAddress, 500)}
                />
            </AddressContainer>
        </>
    );
}
