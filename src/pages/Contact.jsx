import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { motion } from "framer-motion";

import "../styles/Contact.css";

function Contact() {
  return (
    <motion.div
      id="iletisim"
      className="d-flex flex-column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 }  }}
    >
      <h2 className="text-center" style={{ marginBottom: "5vh" }}>
        Bize Ulaşın
      </h2>
      <div
        className="row justify-content-center h-100"
        style={{ paddingLeft: "20px", width: "97%" }}
      >
        <div className="col-12 col-md-6">
          <iframe
            title="KayıParkYapı"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=40.14239133507806,%2029.97959501847277+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <ul
            className="list-unstyled"
            style={{ color: "white", fontSize: "20px" }}
          >
            <li className="mt-3 mb-3 text-start p-3">
              <LocationOnIcon style={{ marginRight: "15px" }} />
              Gazipaşa Mahallesi, Atatürk Bulvarı, Kayı Plaza No:10/A Kat:8
              D:43-44
            </li>
            <li className="mb-3 p-3">
              <PhoneIcon style={{ marginRight: "15px" }} />
              0535 706 0101
            </li>
            <li className="mb-3 p-3">
              <EmailIcon style={{ marginRight: "15px" }} />
              info@kayipark.com
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
