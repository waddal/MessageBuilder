import React from 'react'

const GeneratedMessage = ({ formValues }) => {
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
  
  return (
    <pre>
    Hey {recruiterName},
    
    I’m {firstName}, {greeting}! 
    
    I'm fascinated by the problems the {team} team is solving at {company} — as soon as I saw that you are looking for someone that {whatTheyWant1} and {whatTheyWant2}, I had to reach out!
      
    To cut directly to the chase, I really think I am your team’s next {role}. I bring to the table a strong background in {techStack}, as well as experience developing in agile methodology (with fully remote teams, to boot!).
      
    I would love a chance to chat more about this team and what you are looking for in your next hire. Are you free for a quick phone call this week?
      
    {fullName}
    {email}
    {linkedIn}
    {github}
    </pre>
  )
}

export default GeneratedMessage