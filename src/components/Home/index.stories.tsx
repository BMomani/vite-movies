import React from 'react';
import Home, { HomeProps } from './index';

export default {
    title: "Home",
    component: Home
};

export const Default = (props: HomeProps) => <Home {...props} />;
