import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import verifyCPF from '../../services/cpf';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { saveCPF } from '../../store/modules/vacine/actions';

import {
    Container,
    Content,
    Figure,
    Keyboard,
    Name,
    Quantity,
    Message,
    Input,
    Alert,
} from './styles';
import BackButton from '../../components/BackButton';

import vacineBoard from '../../assets/icons/vacine-board.png';

const Vacine = ({ navigation }) => {
    const name = navigation.getParam('name') || 'Vacina';
    const quantity = navigation.getParam('quantity') || 0;
    const backTo = navigation.getParam('backTo') || 'SearchPharm';
    const previousStack = navigation.getParam('previousStack');

    const [validCPF, setValidCPF] = useState(false);
    const [cpf, setCpf] = useState('');

    const CPF_FULL = cpf.length === 14;

    const dispatch = useDispatch();

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressBack);

        return () =>
            BackHandler.removeEventListener('hardwareBackPress', onPressBack);
    }, []);

    useEffect(() => {
        if (CPF_FULL) {
            const extracted = cpf.replace(/\D/g, '');
            setValidCPF(verifyCPF(extracted));
        }
    }, [cpf]);

    useEffect(() => {
        if (validCPF) {
            dispatch(saveCPF(cpf));
            goToPage('VacineDate', {
                backTo: 'VacineCPF',
                previousStack: backTo,
            });
        }
    }, [validCPF]);

    function onPressBack(event) {
        goToPage(backTo, { backTo: previousStack });
        return true;
    }

    function goToPage(page, data) {
        navigation.navigate(page, data);
    }

    function onChangeCPF(text) {
        if (text > cpf) {
            const extracted = text.replace(/\D/g, '');
            const masked = mask(extracted, '999.999.999-99');
            setCpf(masked);
        } else setCpf(text);
    }

    function mask(value, pattern) {
        let index = 0;
        const string = value.toString();
        return pattern.replace(/9/g, () => string[index++] || '');
    }

    return (
        <Container>
            <BackButton
                onPress={() => goToPage(backTo, { backTo: previousStack })}
            />
            <Keyboard>
                <Content>
                    <Figure source={vacineBoard} />
                    <Name>{name}</Name>
                    <Quantity>{`${quantity} un`}</Quantity>
                    <Message>Informe o seu CPF</Message>
                    <Input
                        onChangeText={onChangeCPF}
                        value={cpf}
                        placeholder="Seu CPF"
                        maxLength={14}
                    />
                    {!validCPF && CPF_FULL && (
                        <Alert>Informe um CPF válido</Alert>
                    )}
                </Content>
            </Keyboard>
        </Container>
    );
};

Vacine.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

Vacine.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

export default Vacine;
