import { getProfile } from "../controllers/profileController";
import checkImg from "../reources/images/checkImg.jpg";

function About() {
const data = getProfile();

return(
    <section className="about">
        <div className="top">
            <img src={checkImg} alt="checkbox Background" />
        </div>
    </section>
);
}

export default About;