import React, { useEffect, useState } from 'react';

const GeneratedMessage = ({ handleCopy, highlight, formValues, template }) => {
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
    switch (type) {
// The format of the code/return messages below is deliberate and works with the tag - DO NOT REFORMAT 

// OUTREACH
case 'outreach1':
return `Hey ${recruiterName ? recruiterName : `[recruiter]`},

I’m ${firstName ? firstName : `[First Name]`}, ${greeting ? greeting : `[greeting]`}! 

I'm fascinated by the problems the ${team ? team : `[team]`} team is solving at ${company ? company : `[company]`} — as soon as I saw that you are looking for someone that ${whatTheyWant1 ? whatTheyWant1 : `[what they want]`} and ${whatTheyWant2 ? whatTheyWant2 : `[what they want]`}, I had to reach out!
  
To cut directly to the chase, I really think I am your team’s next ${role ? role : `[role]`}. I bring to the table a strong background in ${techStack ? techStack : `[tech stack]`}, as well as experience developing in agile methodology (with fully remote teams, to boot!).
  
I would love a chance to chat more about this team and what you are looking for in your next hire. Are you free for a quick phone call this week?
  
${fullName}
${email}
${linkedIn}
${github}`;

case 'outreach2':
return `Hi ${recruiterName ? recruiterName : `[recruiter]`}, 

I'm fascinated by ${company ? company : `[company]`} and your work [what they do]. I came across your profile on LinkedIn when I was "stalking" folks who work at ${company ? company : `[company]`} and wanted to reach out here to introduce myself more formally! 

I recently applied to the open ${role ? role : `[role]`} role and I have so many questions about the ${team ? team : `[team]`} team and what they are looking for in their next hire! Are you involved with interviewing for this role at this time? If not, do you know who might be better to connect with to ask a few questions? 

All the best,

${fullName}`;

// NOTES & CONNECTION REQUESTS

case 'note1':
return `Hey ${recruiterName ? recruiterName : `[recruiter]`}, I'm drawn to ${company ? company : `[company]`}'s mission and think my background in education could provide value for your ${team ? team : `[team]`} team. I would love to learn more about your path to work there. Can we connect?`;

case 'note2':
return `Hello ${recruiterName ? recruiterName : `[recruiter]`}, I'm interested in ${company ? company : `[company]`} and trying to get a more realistic feel of the day to day responsibilities of a ${role ? role : `[role]`}. What is one of the toughest parts about being a new engineer there?`;

case 'note3':
return `Hi ${recruiterName ? recruiterName : `[recruiter]`} I also [relatable experience]! I recently applied to the ${role ? role : `[role]`} position at ${company ? company : `[company]`} and am really interested in learning more about the company culture and role. Can we connect?`;

case 'note4':
return `Hi ${recruiterName ? recruiterName : `[recruiter]`}! I'm interested in your ${role ? role : `[role]`} position and I think my background in ${whatTheyWant1 ? whatTheyWant1 : `[whatTheyWant1]`} could make me a great fit for these roles! When are you looking to start the interviewing process?`;

case 'note5':
return `Hello ${recruiterName ? recruiterName : `[recruiter]`}, I'm really excited about the work you are doing at ${company ? company : `[company]`} to [what they do], and when I saw you also had a background in [background], I had to reach out! Can we connect? `;

case 'note6':
return `${recruiterName ? recruiterName : `[recruiter]`} —  My passions include
1) Designing beautiful applications
2) Building things that matter
3) Making financial education accessible to all. I've been following ${company ? company : `[company]`} for the past few years and love the mission. Before transitioning to tech, I worked in [your previous field]- I want to find a way to get involved with you. Even if not immediately.`;

case 'note7':
return `Good Afternoon ${recruiterName ? recruiterName : `[recruiter]`}! I recently applied to the ${role ? role : `[role]`} position at ${company ? company : `[company]`} and wondered if you had a few minutes to talk about the position. Are you free for 15 minutes this Friday?`;

case 'note8':
return `Hi ${recruiterName ? recruiterName : `[recruiter]`}! I’m really excited about the ${role ? role : `[role]`} role & the opportunity to work with ${company ? company : `[company]`}. When do you plan on starting to interview for this role?`;

case 'note9':
return `Hey ${recruiterName ? recruiterName : `[recruiter]`}, 
I am thinking about applying for a ${role ? role : `[role]`} role at ${company ? company : `[company]`} and I was wondering if I could talk to you about your experience working there. 
I really think that you guys are changing lives for the better and I want to get on board! Would you have time to do a quick call to just talk about how you've liked it, and specifically, what it's been like to be remote? 
Thank you!`;

// FOLLOW-UPS
case 'followUp1':
return `Hi ${recruiterName ? recruiterName : `[recruiter]`},

Hope your week is going well! I am excited about what you are building on the ${team ? team : `[team]`} team, so quickly wanted to follow up on this. I would love to know more about what you are looking for in your next ${role ? role : `[role]`} hire. 

Let me know if you are free for a quick chat in the coming days!

All the best,
  
${fullName}
`;
case 'followUp2':
return `Hi ${recruiterName ? recruiterName : `[recruiter]`},

I remain excited and confident in my fit for the ${role ? role : `[role]`} position. If I can send any additional information at this time, please let me know! 

Looking forward to chatting more,

${fullName}
`;
      default:
        break;
    }
  };

  useEffect(() => {
    setMessage(generateMessage(template));
  }, [formValues, template]);

  return (
    <div className={highlight ? "GeneratedMessage active" : "GeneratedMessage"}>
      <pre id="message" onClick={handleCopy}>{message}</pre>
    </div>
  );
};

export default GeneratedMessage;
