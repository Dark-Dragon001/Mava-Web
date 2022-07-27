import "./Cards.css";


function Cards() {


    return (
        <>
            <div className="cardsContainer">
                            <div class="container">
                                <div class="box">
                                    <div class="imgBox">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0XfMB4Z9BrkcFVL3Pck7cp0idlJm_dXCow&usqp=CAU" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h2>Support<br/>
                                        <span className="linksCont">
                                            <a href="#">Mava Support Team</a>
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div class="box">
                                <div class="imgBox">
                                    <img src="https://s.tmimgcdn.com/scr/1200x627/220200/teknoloji-gradyan-logo-stili_220226-original.jpg" alt=""/>
                                </div>
                                <div class="content">
                                    <h2>Solution<br/>
                                    <span className="linksCont">
                                        <a href="#">Digital Solutions</a>
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div class="box">
                            <div class="imgBox">
                                <img src="data:image/png;base64,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" alt=""/>
                            </div>
                            <div class="content">
                                <h2>Experience<br/>

                                <span className="linksCont">
                                    <a href="#">Let our experience talk</a>
                                </span>
                                </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
