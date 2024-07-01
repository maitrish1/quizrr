// App.js
"use client"
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Accordions from '../../components/Physics/Accordion';
import Breadcrumb from '@/components/BreadCrumbs/BreadCrumb';

const Physics = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Physics'/>
            <Accordions />
        </DefaultLayout>
    );
};

export default Physics;

