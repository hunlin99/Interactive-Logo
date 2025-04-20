import { useState } from "react";
import "./ProfileComponent.css";

export default function ProfileComponent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="profile-container">
            <div
                className={`background ${isOpen ? "background-expand" : ""}`}
            ></div>

            <button
                className={`button ${isOpen ? "button-fade" : ""}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open Profile"
            />

            <section className={`zoom ${isOpen ? "zoom-open" : ""}`}>
                <div className="intro">
                    <div className="about-content">
                        <h3>About Me</h3>
                        <p>
                            Front-End Developer and UI/UX Designer with a background in industrial design and web content management.
                            Skilled in HTML, CSS, JavaScript, React, and UI design, with experience in website management and product development.
                            Passionate about creating user-friendly digital experiences.
                        </p>
                        <div className="external-links">
                            <a href="https://github.com/hunlin99" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/ling-chang-a287621a7/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://hunlin99.github.io/Development-Progress-15086/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-briefcase"></i>
                                <span>Portfolio</span>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <img src="../public/profile-pic-01.jpg" alt="Profile" />
                    </div>
                </div>

            </section>
        </div>
    );
}
