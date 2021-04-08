import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Vacine = ({ name, quantity }) => {
    return <Container />;
};

Vacine.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
};

Vacine.defaultProps = {
    name: 'Vacina',
    quantity: 0,
};

export default Vacine;
