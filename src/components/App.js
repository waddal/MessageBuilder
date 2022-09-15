import React, { useState } from 'react';
import Form from './Form';
import GeneratedMessage from './GeneratedMessage';

const greetings = [
  `so nice to virtually "meet" you`,
  `hope this message reaches you well`,
  `thanks for your attention`,
];

const initialFormValues = {
  //SENDER
  firstName: `Alan`,
  fullName: `Alan Waddell`,
  email: `alan.waddell.dev@gmail.com`,
  linkedIn: `https://www.linkedin.com/in/alan-waddell/`,
  github: `https://github.com/waddal`,
  //RECRUITER
  recruiterName: '',
  greeting: greetings[0],
  role: '',
  team: '',
  company: '',
  whatTheyWant1: '',
  whatTheyWant2: '',
  techStack: '',
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  const handleCopy = (e) => {
    const copyText = document.getElementById('message').textContent;
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    alert('copied');
    return new Promise((res, rej) => {
      document.execCommand('copy') ? res() : rej();
      textArea.remove();
    });
  };

  return (
    <div className="App">
      <h1>Message Builder</h1>
      <Form
        formValues={formValues}
        greetings={greetings}
        handleChange={handleChange}
        handleReset={handleReset}
        handleCopy={handleCopy}
      />
      <GeneratedMessage formValues={formValues} handleCopy={handleCopy} />
    </div>
  );
};

export default App;
