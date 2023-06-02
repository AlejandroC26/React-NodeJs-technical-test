import '../../assets/css/FormSelect.scss';

import axiosServices from '../../assets/js/axiosServices';
import React, {useEffect, useState} from 'react'
import Select from 'react-select'

const FormSelect = ({name, label, onChange, endpoint}) => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosServices.onAxiosGet(`${endpoint}`)
            setOptions(response.data)
          } catch (error) {
            console.log(error)
          }
        };
    
        fetchData();
    }, [endpoint]);

    const [options, setOptions] = useState([]);
    const [value, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onChange({ name, value: selectedOption ? selectedOption.value : '' });
    };
    return (
        <div className='form-select'>
            <Select 
                value={value}
                options={options} 
                isClearable={true}
                isSearchable={true}
                onChange={handleChange}
                placeholder={label}
            />
        </div>
    )
}


export default FormSelect;