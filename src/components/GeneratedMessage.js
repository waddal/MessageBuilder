import React from 'react';

const GeneratedMessage = ({ handleCopy, formValues }) => {
  const {
    firstName,
    fullName,
    email,
    linkedIn,
    github,
    recruiterName,
    greeting,
    role,
    team,
    company,
    whatTheyWant1,
    whatTheyWant2,
    techStack,
  } = formValues;

  const generateMessage = () => {
    return `
Hey ${recruiterName ? recruiterName : `[Recruiter]`},

I’m ${firstName ? firstName : `[First Name]`}, ${greeting ? greeting : `[greeting]`}! 

I'm fascinated by the problems the ${team ? team : `[team]`} team is solving at ${company ? company : `[company]`} — as soon as I saw that you are looking for someone that ${whatTheyWant1 ? whatTheyWant1 : `[what they want]`} and ${whatTheyWant2 ? whatTheyWant2 : `[what they want]`}, I had to reach out!
  
To cut directly to the chase, I really think I am your team’s next ${role ? role : `[role]`}. I bring to the table a strong background in ${techStack ? techStack : `[tech stack]`}, as well as experience developing in agile methodology (with fully remote teams, to boot!).
  
I would love a chance to chat more about this team and what you are looking for in your next hire. Are you free for a quick phone call this week?
  
${fullName}
${email}
${linkedIn}
${github}
    `;
  };

  let message = generateMessage();

  return (
    <div className="GeneratedMessage">
      <pre id="message" onClick={handleCopy}>{message}</pre>
    </div>
  );
};

export default GeneratedMessage;
