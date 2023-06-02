import FormSelect from '../Form/FormSelect';
import FormText from '../Form/FormText';
import axiosServices from '../../assets/js/axiosServices';
import Swal from 'sweetalert2';
import React, {useEffect, useState} from 'react';
import '../../assets/css/Grid.scss';

const FormGrid = ({title}) => {
    const [form, setForm] = useState({});
    const [users, setUsers] = useState([]);
    const [action, setAction] = useState('reg');

    const getUsers = async () => {
        try {
            const response = await axiosServices.onAxiosGet(`user`)
            setUsers(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        const fetchData = async () => {
            getUsers();
        };
        fetchData();
    }, [title]);

    const onMakeForm = (data) => {
        var newForm = {...form};
        newForm[data.name] = data.value;
        setForm(newForm);
    }

    const onFormSubmit = async() => {
        const response = await axiosServices.onAxiosPost('/user', form);
        if(response.status !== 200) {
            Swal.fire({
                text: 'Please, complete all fields',
                icon: 'error',
                toast: true,
                timer: 2000,
                showConfirmButton: false,
                position: 'top-right'
            })
        } else {
            Swal.fire({
                text: 'User successfully registered!',
                icon: 'success',
                toast: true,
                timer: 2000,
                showConfirmButton: false,
                position: 'top-right'
            });
            getUsers();
            setForm({});
            setAction('show');
        }
    }
    return (
        <div className='container'>
            <div className="methods">
                <div className={`card ${action === 'reg' ? 'active' : ''}`}  onClick={()=>{setAction('reg')}}>
                    <p>Register</p>
                    <div className='inner-lower'></div>
                </div>
                <div className={`card ${action === 'show' ? 'active' : ''}`} onClick={()=>{setAction('show')}}>
                    <p>Latest records</p>
                    <div className='inner-lower'></div>
                </div>
            </div>
            {
                action === 'reg' ? (
                <div className='form'>
                    <div className='title'>{title} - Register</div>
                    <div className="body">
                        <div className="row">
                            <div className="col">
                                <FormText
                                    name={'fullname'}
                                    label={'Full name'}
                                    onChange={onMakeForm}
                                />
                            </div>
                            <div className="col">
                                <FormSelect
                                    name={'id_country'}
                                    label={'Country'}
                                    endpoint={'countries'}
                                    onChange={onMakeForm}
                                />
                            </div>
                        </div>
                        <div className="actions">
                            <button className='btn-submit' onClick={onFormSubmit}>Guardar</button>
                        </div>
                    </div>
                </div>
                ) : (
                <div className='form'>
                    <div className='title'>{title} - Last Records</div>
                    <div className="body">
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Full name</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (users.length > 0) ? (
                                            users.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.fullname}</td>
                                                <td>{user.Country.name}</td>
                                            </tr>
                                            ))
                                        ) : (
                                        <tr>
                                            <td colSpan={2}>There are no records</td>
                                        </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )
            }
        </div>

    )
}


export default FormGrid;