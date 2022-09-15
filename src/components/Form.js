import React, { useState } from 'react';

// DATA - abstract this
const greetings = [
  `so nice to virtually "meet" you!`,
  `hope this message reaches you well.`,
  `thanks for your attention!`,
];

const skills = ['Javascript', 'React', 'SQL', 'Postgres', 'Jest'];

const initialSenderValues = {
  firstName: `Alan`,
  fullName: `Alan Waddell`,
  email: `alan.waddell.dev@gmail.com`,
  linkedIn: `https://www.linkedin.com/in/alan-waddell/`,
  github: `https://github.com/waddal`,
};

const initialRecieverValues = {
  recruiterName: '',
  greeting: greetings[1],
  role: '',
  team: '',
  company: '',
  whatTheyWant1: '',
  whatTheyWant2: '',
  techStack: '',
};

// set initial values to data pulled from localstorage

const Form = () => {
  const [senderValues, setSenderValues] = useState(initialSenderValues);
  const [recieverValues, setRecieverValues] = useState(initialRecieverValues);

  const handleSenderValues = (e) => {
    const { name, value } = e.target;

    setSenderValues({
      ...senderValues,
      [name]: value,
    });
  };

  const handleRecieverValues = (e) => {
    const { name, value } = e.target;

    setRecieverValues({
      ...recieverValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit!');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setRecieverValues(initialRecieverValues);
    console.log('reset!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h2>Your Info</h2>
        <label htmlFor="firstName">
          First Name : &nbsp;
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={senderValues.firstName}
            onChange={handleSenderValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="fullName">
          Full Name : &nbsp;
          <input
            type="text"
            placeholder="fullName"
            name="fullName"
            value={senderValues.fullName}
            onChange={handleSenderValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="email">
          Work Email : &nbsp;
          <input
            type="text"
            placeholder="email"
            name="email"
            value={senderValues.email}
            onChange={handleSenderValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="linkedIn">
          LinkedIn : &nbsp;
          <input
            type="text"
            placeholder="linkedIn"
            name="linkedIn"
            value={senderValues.linkedIn}
            onChange={handleSenderValues}
            autoComplete="off"
          />
        </label>
      </section>

      <section>
        <h2>Recruiter Info</h2>
        <label htmlFor="recruiterName">
          Recruiter Name : &nbsp;
          <input
            type="text"
            placeholder="Leeroy"
            name="recruiterName"
            value={recieverValues.recruiterName}
            onChange={handleRecieverValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="greeting">
          Greeting : &nbsp;
          <select>
            {greetings.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="role">
          Role : &nbsp;
          <input
            type="text"
            placeholder="Software Engineer"
            name="role"
            value={recieverValues.role}
            onChange={handleRecieverValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="team">
          Team : &nbsp;
          <input
            type="text"
            placeholder="Tech Support"
            name="team"
            value={recieverValues.team}
            onChange={handleRecieverValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="company">
          Company : &nbsp;
          <input
            type="text"
            placeholder="Apple"
            name="company"
            value={recieverValues.company}
            onChange={handleRecieverValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="whatTheyWant1">
          What are they looking for? : &nbsp;
          <input
            type="text"
            placeholder="developing RESTful APIs..."
            name="whatTheyWant1"
            value={recieverValues.whatTheyWant1}
            onChange={handleRecieverValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="whatTheyWant2">
          What else do they want? : &nbsp;
          <input
            type="text"
            placeholder="...creating modular, client-facing components"
            name="whatTheyWant2"
            value={recieverValues.whatTheyWant2}
            onChange={handleRecieverValues}
            autoComplete="off"
          />
        </label>
        <label htmlFor="techStack">
          Tech Stack : &nbsp;
          <input
            type="text"
            placeholder="Languages, frameworks, tools..."
            name="techStack"
            value={recieverValues.techStack}
            onChange={handleRecieverValues}
            autoComplete="off"
          />
        </label>
      </section>

      <section>
        <button onClick={handleSubmit} id="submit">
          Generate
        </button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </form>
  );
};

export default Form;
