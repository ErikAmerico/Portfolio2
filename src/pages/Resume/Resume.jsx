import "./Resume.css";
import { Link } from "react-router-dom";

const skillsData = [
  {
    category: "Front-End",
    skills: ["HTML", "CSS", "Bootstrap", "React", "JavaScript"],
  },
  { category: "Back-End", skills: ["Node.js", "Express"] },
  {
    category: "Database",
    skills: ["MySQL", "Sequelize", "MongoDB", "Mongoose", "GraphQL"],
  },
];

export default function Resume() {
  return (
    <>
      <h1 id="resumeTitle">Resume</h1>
      <div>
        {/* <a
          href="/myResume.pdf"
          //   target="_blank"
          //   rel="noreferrer"
          //   to="https://drive.google.com/file/d/1W9Sc7UhQglCVCld5wwjnGA5m6VzSJ6p3/view?usp=drive_link"
          download="myResume.pdf"
          id="downloadResumeButton"
        >
          Open Resume
        </a> */}
        <Link
          to="https://drive.google.com/file/d/1W9Sc7UhQglCVCld5wwjnGA5m6VzSJ6p3/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <button id="downloadResumeButton">Open Resume</button>
        </Link>
        <div className="skills-table">
          <h2>Proficiencies</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map((category, index) => (
                <tr key={index}>
                  <td>{category.category}</td>
                  <td>{category.skills.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
