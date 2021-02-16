import React from 'react';
import DirectoryMain from './directoryMain';

function SetDirectory({ directory, deleteEmployee }) {
    
    
    return (
        <ul>
            {directory.map(direct => (
                <DirectoryMain 
                key={direct.id} 
                direct={direct}
                deleteEmployee={deleteEmployee}
                />
            ))}
        </ul>
    );
}

export default SetDirectory;