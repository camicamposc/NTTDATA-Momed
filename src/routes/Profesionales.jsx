import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import Visor from '../components/Visor/Visor'
import PageTemplate from './Template';


const Profesionales = () => {

  const { getProfessionals, getProcess } = useContext(DataContext);


  useEffect(() => {
    getProcess();
    getProfessionals();
  }, []);


  return (
    <>
    <PageTemplate>
      <Visor />
    </PageTemplate>
    </>
  );
};

export default Profesionales;
