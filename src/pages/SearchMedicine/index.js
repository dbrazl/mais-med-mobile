import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    indexPharmByMedicineRequest,
    selectPharm,
} from '../../store/modules/pharms/actions';

import {
    Container,
    SearchContainer,
    List,
    MessageContainer,
    Message,
    ItemContainer,
    Wrapper,
    IconContainer,
    Icon,
    Column,
    PharmName,
    Distance,
    Units,
    AnimationWrapper,
} from './styles';
import BackButton from '../../components/BackButton';
import SearchField from '../../components/SearchField';

import pharmIcon from '../../assets/icons/pharm-icon.png';
import searchAnimation from '../../assets/animations/search-animation.json';

function SearchMedicine({ navigation }) {
    const [searching, setSearching] = useState(false);
    const pharms = useSelector(state => state.pharms.data);

    const dispatch = useDispatch();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressBack);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    }, []);

    function onPressBack() {
        goToPage('SearchPharm');
        return true;
    }

    function searchMedicine(medicine) {
        dispatch(indexPharmByMedicineRequest(medicine));
        setSearching(!!medicine);
    }

    function goToPharm(pharm) {
        dispatch(selectPharm(pharm.name));
        goToPage('Pharm', { backTo: 'SearchMedicine' });
    }

    function goToPage(page, params = {}) {
        navigation.navigate(page, params);
    }

    function renderPharm(item) {
        return (
            <ItemContainer onPress={event => goToPharm(item)}>
                <Wrapper>
                    <IconContainer>
                        <Icon source={pharmIcon} />
                    </IconContainer>
                    <Column>
                        <PharmName>{item.name}</PharmName>
                        <Distance>{`${item.distance} m`}</Distance>
                    </Column>
                </Wrapper>
                <Units>{`${item.quantity} un`}</Units>
            </ItemContainer>
        );
    }

    return (
        <Container>
            <BackButton onPress={event => goToPage('SearchPharm')} />
            <SearchContainer>
                <SearchField onSearch={searchMedicine} />
            </SearchContainer>
            {searching && pharms.length > 0 && (
                <List
                    data={pharms}
                    renderItem={({ item }) => renderPharm(item)}
                    keyExtractor={item => `${item.name}`}
                />
            )}
            {!searching && (
                <MessageContainer animation="slideInLeft" duration={300}>
                    <AnimationWrapper>
                        <LottieView
                            source={searchAnimation}
                            loop={true}
                            autoPlay={true}
                            resizeMode="cover"
                        />
                    </AnimationWrapper>
                    <Message>Procure pelo nome do medicamento</Message>
                </MessageContainer>
            )}
            {searching && pharms.length === 0 && (
                <MessageContainer animation="slideInLeft" duration={300}>
                    <Message>
                        Não foi encontrado nenhum posto de atendimento próximo
                        que tenha esse medicamento
                    </Message>
                </MessageContainer>
            )}
        </Container>
    );
}

export default SearchMedicine;

SearchMedicine.propTypess = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

SearchMedicine.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};
