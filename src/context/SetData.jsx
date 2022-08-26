import { useState } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios'

export const SetData = ({ children }) => {
    const [process, setProcess] = useState([]);
    const [professionals, setProfessionals] = useState([]);

    const getProcess = async () => {
        const response = await axios.get('https://62f128b8e2bca93cd245887b.mockapi.io/api/professional-process/');
        return setProcess(response.data)
    }

    const getProfessionals = async () => {
        const response = await axios.get('https://62f128b8e2bca93cd245887b.mockapi.io/api/professional/');
        return setProfessionals(response.data)
    }

    return (
        <DataContext.Provider value={{
            process,
            getProcess, professionals, getProfessionals
        }}>
            {children}
        </DataContext.Provider>
    )
}
