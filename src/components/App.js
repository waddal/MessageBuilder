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
  const [highlight, setHighlight] = useState(false);
  let [count, setCount] = useState(0);

  const handleTemplate = (e) => {
    const { value } = e.target;
    if(highlight) setHighlight(false);
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
    setHighlight(true);
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
    `Super excited about ${formValues.company ? formValues.company : '[company]'}!`,
    `I think I’m your next ${formValues.role ? formValues.role : '[role]'}!`,
    `Raising my hand for ${formValues.role ? formValues.role : '[role]'}! `,
    `Re: ${formValues.role ? formValues.role : '[role]'}/${
      formValues.company ? formValues.company : '[company]'
    }`,
  ];

  const handleSubject = () => {
    setCount(count + 1);
    if (count >= subjects.length) {
      setCount(0);
      setSubject(subjects[0]);
    }
    setSubject(subjects[count]);
  };

  useEffect(() => {
    setSubject(subjects[Math.floor(Math.random() * subjects.length)]);
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
          {subject ? subject : 'Connect?'}
        </h4>
      </div>

      <h3>Template({template ? template : 'Template'})</h3>
      <GeneratedMessage
        formValues={formValues}
        handleCopy={handleCopy}
        highlight={highlight}
        template={template}
      />
    </div>
  );
};

export default App;
