
import './Resume.css'


const skillsData = [
    { category: 'Front-End', skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'JavaScript'] },
    { category: 'Back-End', skills: ['Node.js', 'Express'] },
    { category: 'Database', skills: ['MySQL', 'Sequelize', 'MongoDB', 'Mongoose', 'GraphQL'] },
];



export default function Resume() {
    return (
        <>
        <h1 id="resumeTitle">Resume</h1>
        <div>
        <a href="/myResume.pdf" download="myResume.pdf" id='downloadResumeButton'>Download Resume</a>
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
                                <td>{category.skills.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}