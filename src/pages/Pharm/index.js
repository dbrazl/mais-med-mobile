import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';

import { useSelector } from 'react-redux';

import BackButton from '../../components/BackButton';
import {
    Container,
    Keyboard,
    Content,
    Figure,
    Name,
    Neighborhood,
    SearchMedicineContainer,
    List,
    Medicine,
    MedicineColumn,
    MedicineIcon,
    MedicineName,
    Alert,
    MedicineQuantity,
    MessageContainer,
    Message,
    Button,
} from './styles';
import SearchField from '../../components/SearchField';

import pharmBoard from '../../assets/icons/pharm-board.png';
import vacine from '../../assets/icons/vacine-icon.png';
import pills from '../../assets/icons/pills.png';
import medicineTrash from '../../assets/icons/medicine-trash.png';

function Pharm({ navigation }) {
    const pharm = useSelector(state => state.pharms.pharm);
    const [medicines, setMedicine] = useState(pharm.medicines);
    const [searching, setSearching] = useState(false);
    const backTo = navigation.getParam('backTo');

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressBack);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    }, []);

    function onPressBack(event) {
        !!backTo ? goToPage(backTo) : goToPage('SearchPharm');
        return true;
    }

    function goToPage(page) {
        navigation.navigate(page);
    }

    function goToSearchPharm() {
        navigation.navigate('SearchPharm');
    }

    function findMedicine(search) {
        if (search !== '') {
            const filtered = medicines.filter(medicine =>
                medicine.name.toLowerCase().includes(`${search.toLowerCase()}`)
            );
            setMedicine(filtered);
        } else setMedicine(pharm.medicines);

        setSearching(!!search);
    }

    function renderMedicineItem(item) {
        const isVacine = item.name.toLowerCase().includes('vacina');
        const needToSchedule = item?.needToSchedule;

        return (
            <Medicine
                activeOpacity={needToSchedule ? 0.2 : 1}
                onPress={needToSchedule ? () => goToVacine(item) : () => {}}
            >
                <MedicineIcon source={isVacine ? vacine : pills} />
                <MedicineColumn>
                    <MedicineName>{item.name}</MedicineName>
                    {needToSchedule && <Alert>Clique para agendar</Alert>}
                </MedicineColumn>
                <MedicineQuantity>{`${item.quantity} un`}</MedicineQuantity>
            </Medicine>
        );
    }

    function goToVacine(item) {
        navigation.navigate('VacineCPF', {
            name: item.name,
            quantity: item.quantity,
            backTo: 'Pharm',
            previousStack: backTo,
        });
    }

    return (
        <Container>
            <BackButton
                onPress={!!backTo ? () => goToPage(backTo) : goToSearchPharm}
            />
            <Keyboard>
                <Content>
                    <Figure source={pharmBoard} />
                    <Name>{pharm.name}</Name>
                    <Neighborhood>{pharm.neighborhood}</Neighborhood>
                    <SearchMedicineContainer>
                        <SearchField
                            placeholder="Buscar medicamento"
                            onSearch={findMedicine}
                        />
                    </SearchMedicineContainer>
                </Content>
            </Keyboard>
            {medicines.length > 0 && (
                <List
                    data={medicines}
                    renderItem={({ item }) => renderMedicineItem(item)}
                    keyExtractor={item => `${item.name}`}
                />
            )}
            {!searching && medicines.length === 0 && (
                <MessageContainer>
                    <Message>Não há medicamentos no posto</Message>
                </MessageContainer>
            )}
            {searching && medicines.length === 0 && (
                <MessageContainer>
                    <Figure source={medicineTrash} />
                    <Message>O medicamento não foi encontrado</Message>
                </MessageContainer>
            )}
        </Container>
    );
}

export default Pharm;

Pharm.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
    }),
};

Pharm.defaultProps = {
    navigation: {
        navigate: () => {},
        getParam: () => {},
    },
};
