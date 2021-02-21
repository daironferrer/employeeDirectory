import React from 'react';

function DirectoryMain({ direct, deleteEmployee }) {

    function handleRemove() {
        deleteEmployee(direct.id);
    }

    return(

        <div style= {{flex: 'center'}}>

        <li>
        {direct.employee}
        </li>

        <button onClick={handleRemove}>X</button>

        </div>
    );
}

export default DirectoryMain;