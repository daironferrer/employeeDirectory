import React, {useEffect, useState} from 'react';
import './App.css';
import DirectoryForm from './components/directoryForm'
import DirectoryMain from './components/directoryMain'

const LOCAL_STORAGE_KEY = 'react-employee-directory';

function App() {

  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    const storageEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageEmployees) {
      setDirectory(storageEmployees);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(directory));
  }, [directory]);

  function addEmployee(direct) {
    setDirectory([direct, ...directory]);
  }

  function deleteEmployee(id) {
    setDirectory(directory.filter(direct => direct.id !== id));
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <DirectoryForm addEmployee={addEmployee} />
      <DirectoryMain 
      directory={directory} 
      deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;
