/*
const reciever = ``;
const greeting = greetings[1];
const role = ``;
const team = ``;
const company = ``;
const whatTheyWant1 = ``;
const whatTheyWant2 = ``;
const techStack = ``;
*/

const greetings = [
  `so nice to virtually "meet" you`,
  `hope this message reaches you well`,
  `thanks for your attention`,
];


const reciever = `Prem`;
const greeting = greetings[1];
const role = `BI Developer`;
const team = ``;
const company = `Eagleview`;
const whatTheyWant1 = `willingness to learn`;
const whatTheyWant2 = ``;
const techStack = `SQL`;

const firstName = `Alan`;
const fullName = `Alan Waddell`;
const email = `alan.waddell.dev@gmail.com`;
const linkedIn = `https://www.linkedin.com/in/alan-waddell/`;
const github = `https://github.com/waddal`;

function managementMsg1() {
  return `
Hey ${reciever},

I’m ${firstName}, ${greeting}! 

I'm fascinated by the problems the ${team} team is solving at ${company} — as soon as I saw that you are looking for someone that ${whatTheyWant1} and ${whatTheyWant2}, I had to reach out!
  
To cut directly to the chase, I really think I am your team’s next ${role}. I bring to the table a strong background in ${techStack}, as well as experience developing in agile methodology (with fully remote teams, to boot!).
  
I would love a chance to chat more about this team and what you are looking for in your next hire. Are you free for a quick phone call this week?
  
${fullName}
${email}
${linkedIn}
${github}
`;
}

function managementMsg2() {
  return `
Hey ${reciever},

I’m ${firstName}, ${greeting}!

To cut directly to the chase, I think I can add value to your ${team} team at ${company}. I bring to the table a strong background in ${techStack}, as well as experience ${whatTheyWant1} and ${whatTheyWant2}(with distributed, cross-functional teams).

I would love a chance to chat more about ${company} and what you are looking for in your next ${role}. Are you free for a quick phone call this week/next week? 
  
${fullName}
${email}
${linkedIn}
${github}
`;
}

console.log(managementMsg2());
