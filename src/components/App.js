import React, { useEffect, useState } from 'react';
import ActionContainer from './ActionContainer';
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

const initialTemplate = 'outreach1';
const initialSubject = `Your engineer has arrived!`;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [subject, setSubject] = useState(initialSubject);
  const [template, setTemplate] = useState(initialTemplate);

  const handleTemplate = (e) => {
    const { value } = e.target;
    setTemplate(value);
  };

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
    return new Promise((res, rej) => {
      document.execCommand('copy') ? res() : rej();
      textArea.remove();
    });
  };

  const subjects = [
    `Interested in learning more about ${formValues.role ? formValues.role : '[role]'} role at ${
      formValues.company ? formValues.company : '[company]'
    }!`,
    `howdy`,
    `anotha one`,
  ];

  const handleSubject = () => {
    let random = subjects[Math.floor(Math.random() * subjects.length)];
    setSubject(random);
  };

  useEffect(() => {
    handleSubject();
  }, []);

  return (
    <div className="App">
      <h1>Message Builder</h1>
      <div className="top">
        <Form
          formValues={formValues}
          greetings={greetings}
          handleChange={handleChange}
          handleCopy={handleCopy}
        />
        <ActionContainer
          handleReset={handleReset}
          handleTemplate={handleTemplate}
          template={template}
        />
      </div>
      <div>
        <h4>
          <button onClick={handleSubject}>Subject</button>
          {subject}
        </h4>
      </div>

      <h3>Template({template ? template : 'Template'})</h3>
      <GeneratedMessage formValues={formValues} handleCopy={handleCopy} template={template} />
    </div>
  );
};

export default App;
