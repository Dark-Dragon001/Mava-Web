import "./Main.css";
import SlideShow from "./SlideShow";
import Cards from "./Cards";


const Main = () => {



    return(
        <>
            <div className="mainPageContainer">
                <SlideShow />
                <div className="servicesContainer">
                    <h1 className="serviceSection">Our services</h1>
                    <p className="servicePhrase">We bring the best solution to your problems.</p>
                </div>
                <div className="servicesComponents">
                    <Cards />

                </div>


            </div>
        </>
    );
};

export default Main;