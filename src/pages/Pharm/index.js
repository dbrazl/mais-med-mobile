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
    MedicineQuantity,
} from './styles';
import SearchField from '../../components/SearchField';

import pharmBoard from '../../assets/icons/pharm-board.png';
import vacine from '../../assets/icons/vacine-icon.png';
import pills from '../../assets/icons/pills.png';

function Pharm({ navigation }) {
    const pharm = useSelector(state => state.pharms.pharm);
    const [medicines, setMedicine] = useState(pharm.medicines);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressBack);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    }, []);

    function onPressBack(event) {
        navigation.navigate('SearchPharm');
        return true;
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
    }

    function renderMedicineItem(item) {
        const isVacine = item.name.toLowerCase().includes('vacina');

        return (
            <Medicine key={`${item.index}`}>
                <MedicineColumn>
                    <MedicineIcon source={isVacine ? vacine : pills} />
                    <MedicineName>{item.name}</MedicineName>
                </MedicineColumn>
                <MedicineQuantity>{`${item.quantity} un`}</MedicineQuantity>
            </Medicine>
        );
    }

    return (
        <Container>
            <BackButton onPress={goToSearchPharm} />
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
            <List
                data={medicines}
                renderItem={({ item }) => renderMedicineItem(item)}
                keyExtractor={item => item.id}
            />
        </Container>
    );
}

export default Pharm;

Pharm.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

Pharm.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};
