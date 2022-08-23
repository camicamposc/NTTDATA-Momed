import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import Visor from '../components/Visor/Visor'


const Profesionales = () => {

  const { getProfessionals, getProcess } = useContext(DataContext);


  useEffect(() => {
    getProcess();
    getProfessionals();
  }, []);


  return (
    <>
      <Visor />
    </>
  );
};

export default Profesionales;
