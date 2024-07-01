// App.js
"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Accordions from '../../components/Physics/Accordion';

const Physics = () => {
    return (
        <DefaultLayout>
            <Accordions />
        </DefaultLayout>
    );
};

export default Physics;

