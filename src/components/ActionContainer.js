import React from 'react';

const templates = ['outreach1', 'outreach2', 'followUp1', 'followUp2'];

const ActionContainer = ({ handleReset, handleTemplate }) => {
  return (
    <div className="ActionContainer">
      <button onClick={handleReset}>Reset</button>

      <select className='templateSelector'
        type="dropdown"
        name="template"
        onChange={handleTemplate}
        style={{ border: '2px solid grey' }}
      >
        {templates.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ActionContainer;
