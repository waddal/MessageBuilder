import React from 'react';

const Form = ({ formValues, greetings, handleChange, handleReset }) => {
  return (
    <form>
      <section>
        <h2>Your Info</h2>
        <label htmlFor="firstName">
          First Name : &nbsp;
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="fullName">
          Full Name : &nbsp;
          <input
            type="text"
            placeholder="fullName"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="email">
          Email : &nbsp;
          <input
            type="text"
            placeholder="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="linkedIn">
          LinkedIn : &nbsp;
          <input
            type="text"
            placeholder="linkedIn"
            name="linkedIn"
            value={formValues.linkedIn}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="github">
          Github : &nbsp;
          <input
            type="text"
            placeholder="github"
            name="github"
            value={formValues.github}
            onChange={handleChange}
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
            value={formValues.recruiterName}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="greeting">
          Greeting : &nbsp;
          <select
            type="dropdown"
            name="greeting"
            value={formValues.greetings}
            onChange={handleChange}
            style={{ border: '2px solid black' }}
          >
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
            value={formValues.role}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="team">
          Team : &nbsp;
          <input
            type="text"
            placeholder="Tech Support"
            name="team"
            value={formValues.team}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="company">
          Company : &nbsp;
          <input
            type="text"
            placeholder="Apple"
            name="company"
            value={formValues.company}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="whatTheyWant1">
          What are they looking for? : &nbsp;
          <input
            type="text"
            placeholder="developing RESTful APIs..."
            name="whatTheyWant1"
            value={formValues.whatTheyWant1}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="whatTheyWant2">
          What else do they want? : &nbsp;
          <input
            type="text"
            placeholder="...creating modular, client-facing components"
            name="whatTheyWant2"
            value={formValues.whatTheyWant2}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label htmlFor="techStack">
          Tech Stack : &nbsp;
          <input
            type="text"
            placeholder="Languages, frameworks, tools..."
            name="techStack"
            value={formValues.techStack}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
      </section>

      <section>
        <button onClick={handleReset}>Reset</button>
      </section>
    </form>
  );
};

export default Form;
