import '../../assets/css/FormText.scss';
import React, {useState} from 'react'

const FormText = ({name, label, onChange}) => {
    const [value, setValue] = useState('');

    const handleChange = (data) => {
        setValue(data.target.value);
        onChange({ name, value: data.target.value });
    };
    return (
        <div className="did-floating-label-content">
            <input className="did-floating-input" type="text" placeholder=" " value={value} onChange={handleChange}/>
            <label className="did-floating-label">{ label }</label>
        </div>
    )
}


export default FormText;