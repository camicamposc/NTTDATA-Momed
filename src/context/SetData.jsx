import { useState } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios'

export const SetData = ({ children }) => {
    const [process, setProcess] = useState([]);
    const [professional, setProfessional] = useState([]);


    const getProcess = async () => {

        const response = await axios.get('https://62f128b8e2bca93cd245887b.mockapi.io/api/professional-process/');
        console.log(response.data)
        return setProcess(response.data)

    }

    const getProfessional = async () => {

        const response = await axios.get('https://62f128b8e2bca93cd245887b.mockapi.io/api/professional/');

        return setProfessional(response.data)

    }


    return (
        <DataContext.Provider value={{
            process,
            getProcess, professional, getProfessional
        }}>
            {children}
        </DataContext.Provider>
    )
}
