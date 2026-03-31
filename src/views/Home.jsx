import { getProfile } from "../controllers/profileController";
import seOne from "../reources/images/seOne.png";
import seTwo from "../reources/images/seTwo.png";
import myImg from "../reources/images/homeimage.png";
import imRavi from "../reources/images/imRavimal.png";
import videoBg from "../reources/images/videoBg.mp4";

function Home() {
    const data = getProfile();  

    return (
        <section className="home">
            <video className="bg-video" src={videoBg} autoPlay loop muted />

            <div className="homebox">
                <img className="homeboximgRavi" src={imRavi} alt="Ravimal" />

                <div className="imageBox">
                    <img className="homeboximg one" src={seOne} alt="SE One" />
                    <img  className="homemyimg" src={myImg} alt="My Image" />
                    
                    <img className="homeboximg two" src={seTwo} alt="SE Two" />
                </div>
            </div>
        </section>
    );
}

export default Home;