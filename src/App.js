import React from 'react';

import { useSelector } from 'react-redux';

import createRouter from './Routes/routes';

export default function App() {
    const signed = useSelector(state => state.auth.signed);
    const profile = useSelector(state => state.user.profile);
    const personality = profile ? profile.personality : null;

    const Routes = createRouter(signed, personality);

    return <Routes />;
}
