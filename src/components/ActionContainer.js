import React from 'react';

const templates = [
  'outreach1',
  'outreach2',
  'note1',
  'note2',
  'note3',
  'note4',
  'note5',
  'note6',
  'note7',
  'note8',
  'note9',
  'followUp1',
  'followUp2',
];

const ActionContainer = ({ handleReset, handleSubject, handleTemplate }) => {
  return (
    <div className="ActionContainer">
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubject}>Subject</button>

      <select
        className="templateSelector"
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
