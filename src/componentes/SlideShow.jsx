import "./SlideShow.css"

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const fadeImages = [
    "https://manhart-performance.de/wp-content/uploads/2021/07/McLaren-720S-Website-1.jpg",
    "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/review/hero_image/2022-Maserati-MC20-Coupe-Blue-Yellow-Press-1200x800-53.jpg",
    "https://i.ytimg.com/vi/Zoee_xCpa5c/maxresdefault.jpg"
];

const SlideShow = () => {
    return(
        <>
            <div className="slideShowContainer">
                <Fade>
                    <div className="each-fade">
                        <img src={fadeImages[0]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[1]} />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[2]} />
                    </div>
                </Fade>
            </div>
        </>
    );
};


export default SlideShow;