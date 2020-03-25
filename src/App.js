import React, { useState } from 'react';
import { useDataFetch } from './hooks/displayNameData';
import InputForm from './components/InputForm';
import DiversityDisplay from './components/DiversityDisplay';

import './App.css';

const App = () => {

  const [fullName, setFullName] = useState('')
  const [tempFullName, setTempFullName] = useState('')
  const [nameResult, isLoading] = useDataFetch(`https://api.diversitydata.io/?fullname=${fullName}`, fullName)

  const handleNameChange = event => {
    setTempFullName(event.target.value)
  }

  const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  const onSubmitName = (event) => {
    event.preventDefault()
    if (tempFullName === '') return
    const nameForUrl = tempFullName.split(' ').join('%20')
    setFullName(nameForUrl)
    setTempFullName('')
  }

  return (
    <div className="App">
      <h1>Name Diversity</h1>
      <h2>Can the app correctly calculate your ethnicity?</h2>
      <InputForm  onSubmitName={onSubmitName}
                  handleNameChange={handleNameChange}
                  tempFullName={tempFullName}
      />
      <section className="dataDisplay">
        {
            isLoading ?
            <h3>Loading name diveristy data...</h3>
            :
            (
              !isEmpty(nameResult) &&
              <DiversityDisplay nameResult={nameResult} />
            )
        }
      </section>
    </div>
  );
}

export default App;
