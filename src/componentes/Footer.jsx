import "./Footer.css"


const Footer = () => {

        //Date for copyright
    const date = new Date()
    const currentYear = date.getFullYear();



    return(
        <>
            <div className="footerContainer">
                <div className="addressContainer">
                    <p className="copyrithContainer">Copyright &copy; {currentYear} Tüm hakkı saklıdır <h2>mava</h2></p>
                    <p><b>ADRESLERİMİZ:</b></p>
                    <span className="firstAddressContainer">
                        <p>
                            <b>Muğla Teknokent: </b>
                                Kötekli Mah. Denizli Yolu Bulvarı NO:29
                            <br/>
                                Menteşe, MUĞLA
                            <br/>
                            <b>Tel : </b>
                            <a href="tel:0850 888 0048">0850 888 0048</a>
                            <br/>
                            <b>E-mail: </b>
                            <a href="mailto:info@mava.com.tr">info@mava.com.tr</a>
                        </p>
                    </span>
                    <span className="secondAddressContainer">
                        <p>
                            <b>Marmaris: </b>
                                RG.MUSTAFA MUĞLALI CAD KEMERALTI MAH 76 SOK,
                            <br/>
                                NO:1, 48700 MARMARİS
                            <br/>
                            <b>Tel : </b>
                            <a href="tel:0252 413 2030">0252 413 2030</a>
                            <br/>
                            <b>GSM : </b>
                            <a href="tel:0544 5632020">0544 5632020</a>
                        </p>
                    </span>
                </div>
            </div>
        </>
    );

};


export default Footer;