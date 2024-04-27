import { Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Start/Footer";
import StartNavbar from "../components/Start/StartNavbar";
import { footer} from "../styles/globalStyle";

const Imprint = () => {
    return (
        <Container>
            <StartNavbar />
                <Typography variant="h2" sx={{ marginTop: "5rem", marginBottom:"2rem",textAlign:"center" }}>
                    IMPRINT
                </Typography>
            <Typography sx={{marginBottom:"4rem"}}>

                <span style={{ fontWeight: "bold" }}> Smart Stock Software GmbH</span>
                 <br />
                Turmstraße 11 <br />
                01234 Berlin <br />
                {/* <hr/> */}
                <br />
                Fax +49 000 111 22  33 <br />
                Phone: +49 000 000 11 22 <br />
                E-mail: contact@contact.com   <br />
                <br />

                <span style={{ fontWeight: "bold" }}>Managing Director</span> <br />
                Benedikt Löwe, Dipl.-Inf.(FH), M.Sc. <br />
                Torrent Siakam <br />
                <br />
               <span style={{fontWeight:"bold"}}>Register court</span>  <br />
                BerlinLocal Court <br />
                <br />
                <span style={{ fontWeight: "bold" }}>  Register number</span> <br />
                HRB 00000 <br/>
                <br />
                <span style={{ fontWeight: "bold" }}>Sales tax identification number according to § 27 a sales tax law </span> <br />
                DE 000000000 <br/>
                <br />
                <span style={{ fontWeight: "bold" }}>Reference to online dispute resolution</span> <br />
                The European Commission provides a platform for online dispute resolution. <br/> 
                <br />
               

                <span style={{ fontWeight: "bold",opacity:".7" }}>Exclusion of liability (Disclaimer)</span> <br/>
                Liability for content <br/>
                As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general legislation remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a specific infringement. As soon as we become aware of such infringements, we will remove this content immediately. <br/>
                <br />

                <span style={{ fontWeight: "bold", opacity: ".7" }}>Liability for links</span> <br/>
                Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. If we become aware of any legal infringements, we will remove such links immediately. <br />
                <br />
                <span style={{ fontWeight: "bold", opacity: ".7" }}> Copyright </span> <br />
                The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
            </Typography>
            <Typography variant="div" sx={footer}>
                <Footer />
            </Typography>
        </Container>
    )
};

export default Imprint;
