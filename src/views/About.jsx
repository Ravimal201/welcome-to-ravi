import { getProfile } from "../controllers/profileController";
import checkImg from "../reources/images/checkBg.png";
import aboutImg from "../reources/images/aboutimage.png";

function About() {
    const data = getProfile();

    return (
        <section className="about">
            <img src={checkImg} class="about-bg" alt="checkbox Background" />
            
            <div class="about-top">
                
                <h2>About me</h2>
                <div>
                    <p>
                    I am a motivated Computer Science undergraduate at Uva Wellassa University of Sri Lanka, expected to graduate in 2027. I have a strong interest in software development, web development, and UI/UX design, with hands-on experience in Java, React.js, and modern web technologies. I enjoy building user-focused applications, working collaboratively in teams, and continuously improving my technical and problem-solving skills.
                    </p>
                </div>
            </div>
            <div class="about-bottom">
                <h3>Education</h3>
                <p>BSc (Hons) in Computer Science and Technology</p>
            </div>
            <div>
                <img src={aboutImg} class="about-img" alt="About Image"></img>
            </div>

        </section >
    );
}

export default About;