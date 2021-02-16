import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

function DirectoryForm({ addEmployee }) {
    const [direct, setDirectory] = useState({
        id: '',
        employee: '',
    });

    function handleInputChange(e) {
        setDirectory({ ...direct, employee: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (direct.employee.trim()) {
            addEmployee({ ...direct, id: uuid.v4() });
            setDirectory({ ...direct, employee: ''});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            label='employee'
            name='employee'
            type='text'
            value={direct.employee}
            onChange={handleInputChange}>

            </input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default DirectoryForm;