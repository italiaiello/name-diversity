import React, { useState } from 'react';
import { useDataFetch } from './hooks/displayNameData';
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
  }

  return (
    <div className="App">
      <section>
        <article>
          <form onSubmit={onSubmitName}>
            <input type="text" onChange={handleNameChange} placeholder="Enter your full name..." />
            <button type="submit">Submit</button>
          </form>
        </article>
        {
            isLoading ?
            <h2>Loading name diveristy data...</h2>
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
