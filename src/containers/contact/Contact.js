import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  // tel: needs no spaces
  const telLink = contactInfo.number
    ? "tel:" + contactInfo.number.replace(/\s+/g, "")
    : null;

  return (
    <div className="main contact-margin-top" id="contact">
      <div style={{ textAlign: "center" }}>
        <h1 className="heading">{contactInfo.title || "Contact Me"}</h1>

        {/* PHONE */}
        {contactInfo.number && (
          <div style={{ marginTop: "10px" }}>
            <a
              className={isDark ? "dark-mode contact-detail" : "contact-detail"}
              href={telLink}
              style={{ fontSize: "20px" }}
            >
              {contactInfo.number}
            </a>
          </div>
        )}

        {/* EMAIL */}
        <div style={{ marginTop: "10px" }}>
          <a
            className={
              isDark ? "dark-mode contact-detail-email" : "contact-detail-email"
            }
            href={"mailto:" + contactInfo.email_address}
            style={{ fontSize: "20px" }}
          >
            {contactInfo.email_address}
          </a>
        </div>

        {/* ICONS */}
        <div style={{ marginTop: "20px" }}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
