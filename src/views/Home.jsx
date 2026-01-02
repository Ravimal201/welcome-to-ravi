import { getProfile } from "../controllers/profileController";
import myImg from "../reources/images/fullimage.png";
import videoBg from "../reources/images/videoBg.mp4";

function Home() {
    const data = getProfile();

    return (
        <section className="home">
            <div className="homebox">
                <video src={videoBg} autoPlay loop muted />
                <img src={myImg} alt="Ravimal" />
            </div>
        </section>
    );
}

export default Home;
