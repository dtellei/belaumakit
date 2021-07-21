import React from 'react';

import { AuthProvider } from './AuthProvider';
import { ProductProvider } from '../components/ProductFunctions';
import Routes from './Routes';

const Providers = () => {
    return (
        <AuthProvider>
                <ProductProvider>
                    <Routes />
                </ProductProvider>
        </AuthProvider>
    );
}

export default Providers;