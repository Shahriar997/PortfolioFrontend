import emoji from "react-easy-emoji";

export const greetings = {
  name: "Shahriar Hossain",
  title: "Welcome.",
  description:
    "I am Software Engineer 1, Working in Full Stack Web Development. I have experience with PHP, Yii1.1, PHP Custom Framework, Javascript, ExpressJS, ReactJS, Mysql, MongoDB, JAVA, A little bit of AWS, Docker and some other cool libraries and frameworks.",
  resumeLink: "https://brendanglancy.github.io/Resume/",
};

export const openSource = {
  githubUserName: "brendanglancy",
};

export const contact = {};

export const socialLinks = {
  url: 'https://www.ovsknife.com/home',
  instagram: "https://www.instagram.com/brendanglance/",
  github: "https://github.com/brendanglancy",
  linkedin: "https://www.linkedin.com/in/brendan-glancy/",
  discord: "https://www.hackerrank.com/Bglance68",
  blog: "https://brendanglancy.github.io/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "A SOFTWARE ENGINEER WHO WANTS TO EXPLORE DIFFERENT TECH STACK AND WEB TECHNOLOGIES",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
        ),
        emoji(
          "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks."
        ),
        emoji(
          "⚡ Cyber Security, HackTheBox Globally Ranked 534, Top 2% in PicoCTF 2022"
        ),
      ],
      softwareSkills: [
        {
          skillName: "python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "vuejs",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "astro",
          fontAwesomeClassname: "vscode-icons:file-type-astro",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "cpp",
          fontAwesomeClassname: "logos:c-plusplus",
        },
        {
          skillName: "php",
          fontAwesomeClassname: "logos:php",
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MySQL-icon",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
        },
        {
          skillName: "spring-boot",
          fontAwesomeClassname: "logos:spring-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Security",
  },
];

export const educationInfo = [
  {
    schoolName: "BRAC University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "January 2018 - 2022",
    grade: "3.72 CGPA",
    desc: "Computer Science Undergrad Degree",
    descBullets: [
      "The Bachelor of Science in Computer Science (CS) - A undergrad program under the Computer Science and Engineering Department",
      "Thesis Topic - Diabetic Retinopathy Detection Using Deep Learning.",
      "Extra-Curricular Activities - Former President of BRAC University Adventure Club.",
    ],
    github: "https://github.com/BrendanGlancy/akron/",
  },
  {
    schoolName: "Dhaka Ciety College",
    subHeader: "Higher Secondary Certificate - HSC",
    duration: "January 2015 - March 2017",
    grade: "5.00 GPA",
    descBullets: [
      "Subject: Science",
      "Extra-Curricular Activities: Former General Member of Debate Club",
    ],
    github: "https://github.com/BrendanGlancy/BreweryLocater",
  },
];

export const experience = [
  {
    role: "Junior Software Engineer",
    company: "Orbit Informatics",
    companylogo: "/img/icons/common/chamber.jpeg",
    date: "January 2022 – Present",
    descBullets: [
      "  Working with the development team in multiple projects.",
      "  Used Project Management tools such as, Jira & Version Control tools such as, GIT & Github.",
      "  Project Analysis to estimate the development time.",
      "  Worked with third party services & api such as, Mangopay payment gateway, Sendgrid, Mailgun, Docraptor, CloudConvert",
    ],
  },
];

export const projects = [
  {
    name: "Ronis Hair Forum",
    desc: "Custom website for a local hair salon, Responsive Ready, Powered by Bootstrap 4, Dedicated portfolio and blog page, Easy Customization",
    link: "https://ronishair.com/",
    tags: ["Java", "VueJS", "PostgreSQL"],
  },
  {
    name: "Empyrial",
    desc: "Contributor on Empyrial, Empyrial is a Python-based open-source quantitative investment library dedicated to financial institutions and retail investors, officially released in March 2021. Already used by thousands of people working in the finance industry, Empyrial aims to become an all-in-one platform for portfolio management, analysis, and optimization.",
    github: "https://github.com/ssantoshp/Empyrial",
    link: "https://ssantoshp.github.io/Empyrial/",
    tags: ["python", "finace", "machine learning"],
  },
  {
    name: "Knifely",
    desc: "Professional Knife Sharpening site for our company. Made with Tailwind CSS, Gatsby v3, and NextJS. Looking for a reliable and professional residential knife sharpening service in Akron? Look no further than Knifely!",
    github: "https://github.com/OVS-Knife",
    link: "https://www.knifely.com/",
    tags: ["NextJS", "Gatsby", "JavaScript"],
  },
  {
    name: "OVS Knife Co.",
    desc: "As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js, I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    link: "https://ovsknife.com/home",
    tags: ["Intern", "Full Stack", "E-Commerce"],
  },
];

export const feedbacks = [
  {
    name: "Austin Coontz",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
  {
    name: "Andrew Rose",
    feedback:
      "Brendan Glancy, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.",
  },
];

export const seoData = {
  title: "Shahriar's Portfolio",
  description: "Full Stack Developer showcasing my work and experience.",
  image: "https://avatars.githubusercontent.com/u/61941978?v=4",
  url: "https://brendanglancy.software/",
  keywords: [
    "Brendan Glancy",
    "Portfolio",
    "Full Stack Developer",
    "Open to work",
    "Ronis Hair Forum",
    "Developer",
    "web developer",
    "Empyrial",
    "OVS Grinding",
    "OVS Knife Co.",
    "Knifely",
    "Canton Regional Chamber of Commerce",
    "Akron",
    "Ohio",
  ],
};
