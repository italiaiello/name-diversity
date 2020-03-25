import React from 'react';
import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";

const InputForm = ({ onSubmitName, handleNameChange, tempFullName }) => {
    return (
        <article className="inputForm">
          <form onSubmit={onSubmitName}>
            <input  className="nameField" 
                    type="text" 
                    onChange={handleNameChange} 
                    placeholder="Enter your full name..." 
                    value={tempFullName} 
            />
            <button className="submitButton" type="submit">
                <IconContext.Provider value={{ color: "white", size: "2em" }}>
                    <div>
                        <MdSearch />
                    </div>
                </IconContext.Provider>
            </button>
          </form>
        </article>
    )
}

export default InputForm;