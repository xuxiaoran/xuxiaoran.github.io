import React from "react";

const sections = ["education", "experience", "skills"];

const schools = [
  {
    degree: "M.S. Computer Science",
    school: "Boston University",
    link: "https://www.bu.edu",
    year: "2020",
  },
  {
    degree: "B.S. Computer Science, Economics",
    school: "University of Michigan - Ann Arbor",
    link: "https://umich.edu",
    year: "2018",
  },
];

const experiences = [
  {
    position: "Software Engineer",
    employer: "Goldman Sachs",
    year: "July 2021 - Present",
    jobs: [
      "Working as a full stack developer under the global markets division.",
    ],
  },
  {
    position: "Software Engineer",
    employer: "University of Michigan, Michigan Medicine, Anesthesiology Dept.",
    year: "March 2020 - July 2021",
    jobs: [
      "Developed the next generation MQUARK application in ReactJS (UI) and Python (API). Highly customizable for the internal medical personnel to build complex surveys for higher healthcare quality and can be configured to use data from not only SQL server, but a various database management types and external APIs.",
      "Developed the MPOG member portal application in ReactJS and Python that keeps track of the status of partners. Provides inline datasheet editing, file management. Worked with the users directly during the development process.",
      "Developed a Computer Vision Machine Learning project in Python to process handwritten surgical forms and automatically save the result to RedCap database. Took only 1~2 seconds to process a text dense form. ",
      "Developed the Waveform Viewer project in C#, JS, C++, and SQL that tracks hospital-wide patient vitals. Besides displaying data in real-time and allowing users to make notes on the chart for research purposes, it also provides administrative statistics and allows qualified users to download data from distributed data warehouses in parallel. ",
      "Developed the MPOG Identity Server using OpenID and OAuth 2.0 protocols in ASP.NET Core to manage both authentication and authorization throughout the health system applications regardless of programming languages.",
      "Developed an NLP project in Python and with Django as the front-end, supervised by the department software lead.",
      "Led the Proview project written in AngularJS and Python. Visualize and analyze patient data collaborated with multiple medical centers. Using machine learning to provide procedural suggestions based on similar patient data.",
    ],
  },
  {
    position: "Research Assistant",
    employer: "University of Michigan, College of Engineering",
    year: "May 2017 - August 2017",
    jobs: [
      "Contributed to an open-source approximate query processor, VerdictDB. Contributed to the backend algorithm design and implemented most of the APIs to deliver compatibility on existing database management systems.",
      "Developed scripts to generate big datasets (up to 500GB) and tested the AQP in HDFS in remote server.",
      "Collaborated with the core develop team of an experimental travel website that customized travel plans for users. Responsible for front-end development and interacted with Google Flight API and Google Map API.",
    ],
  },
  {
    position: "Research Assistant",
    employer: "Institute of Computing Technology Chinese Academy of Sciences",
    year: "July 2016 - August 2016",
    jobs: [
      "Constructed a mathematical model to find the Nash Equilibrium and social welfare maximization with respect to promotion cost and social impact. Developed python script to mine data throughout the social media for analysis. ",
    ],
  },
];

const skills = [
  {
    category: "Programing Languages",
    items: ["C++", "Python", "JavaScript", "Java", "SQL", "C#", "C", "Go"],
  },
  {
    category: "Frameworks",
    items: ["ReactJS", ".NET", "Django", "Bootstrap", "jQuery"],
  },
  {
    category: "Other",
    items: ["HTML", "CSS"],
  },
  {
    category: "Human Languages",
    items: [
      "Chinese",
      "English",
      "Japanese (In Progress)",
      "Korean (In Progress)",
    ],
  },
];

const Resume = () => {
  return (
    <div className="section mb-2">
      <div className="m-3">
        <div className="text-center section-title">Resume</div>
        <div className="d-flex align-items-center mt-4">
          {sections.map((section) => (
            <a className="header-link" href={"#" + section}>
              {section}
            </a>
          ))}
        </div>
        <hr />

        <div className="mb-5" id="education">
          <div className="section-header">Education</div>
          {schools.map((school) => (
            <div className="section-container">
              <h4 className="container-title">{school.degree}</h4>
              <p className="school">
                <a href={school.link}>{school.school}</a>, {school.year}
              </p>
            </div>
          ))}
        </div>

        <div id="experience">
          <div className="section-header">Experience</div>
          {experiences.map((experience) => (
            <div className="section-container">
              <h4 className="container-title d-flex justify-content-between align-items-center">
                {experience.position}
                <div className="year mr-3">{experience.year}</div>
              </h4>
              <p>
                <div className="employer">{experience.employer}</div>
                <ul>
                  {experience.jobs.map((job) => (
                    <li>{job}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        </div>

        <div id="skills">
          <div className="section-header">Skills</div>
          {skills.map((skill) => (
            <div className="section-container">
              <h4 className="container-title">{skill.category}</h4>
              <p>{skill.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
