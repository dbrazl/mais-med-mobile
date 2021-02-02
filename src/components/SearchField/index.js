import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Container, SearchIcon, Input } from './styles';
import styles from '../../globals/styles';

function SearchField({ onSearch, placeholder }) {
    return (
        <Container style={styles.shadow}>
            <SearchIcon color="black" size={24} />
            <Input
                placeholder={placeholder}
                onChangeText={_.debounce(onSearch, 500)}
            />
        </Container>
    );
}

export default SearchField;

SearchField.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
};

SearchField.defaultProps = {
    onSearch: () => {},
    placeholder: 'Buscar',
};
