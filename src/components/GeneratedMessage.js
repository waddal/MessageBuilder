import React, { useEffect, useState } from 'react';

const GeneratedMessage = ({ handleCopy, formValues, template }) => {
  const [message, setMessage] = useState();

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

  const generateMessage = (type) => {
    if(type === 'outreach1')
    return `Hey ${recruiterName ? recruiterName : `[Recruiter]`},

I’m ${firstName ? firstName : `[First Name]`}, ${greeting ? greeting : `[greeting]`}! 

I'm fascinated by the problems the ${team ? team : `[team]`} team is solving at ${company ? company : `[company]`} — as soon as I saw that you are looking for someone that ${whatTheyWant1 ? whatTheyWant1 : `[what they want]`} and ${whatTheyWant2 ? whatTheyWant2 : `[what they want]`}, I had to reach out!
  
To cut directly to the chase, I really think I am your team’s next ${role ? role : `[role]`}. I bring to the table a strong background in ${techStack ? techStack : `[tech stack]`}, as well as experience developing in agile methodology (with fully remote teams, to boot!).
  
I would love a chance to chat more about this team and what you are looking for in your next hire. Are you free for a quick phone call this week?
  
${fullName}
${email}
${linkedIn}
${github}`;

    if(type === 'followUp1') 
        return `Hi ${recruiterName ? recruiterName : `[Recruiter]`},

Hope your week is going well! I am excited about what you are building on the ${team ? team : `[team]`} team, so quickly wanted to follow up on this. I would love to know more about what you are looking for in your next ${role ? role : `[role]`} hire. 

Let me know if you are free for a quick chat in the coming days!

All the best,
  
${fullName}
`;
  }

  useEffect(() => {
    setMessage(generateMessage(template));
  }, [formValues, template]);

  return (
    <div className="GeneratedMessage">
      <pre id="message" onClick={handleCopy}>{message}</pre>
    </div>
  );
};

export default GeneratedMessage;
