

import './Nav.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Navigation({ currentPage, setCurrentPage }) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#about" onClick={() => setCurrentPage("About")}>
                        About me
                    </a>
                </li>
                <li>
                    <a href="#Portfolio" onClick={() => setCurrentPage("Portfolio")}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#Contact" onClick={() => setCurrentPage("Contact")}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#Resume" onClick={() => setCurrentPage("Resume")}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}
