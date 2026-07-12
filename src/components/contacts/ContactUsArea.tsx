import thumb1 from "../../../public/assets/img/new/location.png";
import thumb2 from "../../../public/assets/img/new/whatsapp.png";
import thumb3 from "../../../public/assets/img/new/email.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import siteConfig from "@/config/admin";

const ContactUsArea = () => {
  const contactData = [
    {
      title: "Bhuj, Kutch – Gujarat",
      img: thumb1,
      email: siteConfig.contact.email,
      phone: siteConfig.contact.phone,
      link: siteConfig.contact.mapLink,
      btnText: "View Location",
      btnClass: "tp-btn-yellow-green w-100",
      speed: "1.2",
      extraClass: "",
    },
    {
      title: "Chat on WhatsApp",
      img: thumb2,
      email: siteConfig.contact.email,
      phone: siteConfig.contact.phone,
      link: siteConfig.social.whatsapp,
      btnText: "WhatsApp Us",
      btnClass: "tp-btn-yellow-green w-100",
      speed: "1.2",
      extraClass: "",
    },
    {
      title: "Email Address",
      img: thumb3,
      email: siteConfig.contact.email,
      phone: siteConfig.contact.phone,
      link: `mailto:${siteConfig.contact.email}`,
      btnText: "Email Us",
      btnClass: "tp-btn-yellow-green w-100",
      speed: "1.2",
      extraClass: "",
    },
  ];

  return (
    <div className="tp-contact-us-info-area pb-120">
      <div className="container container-1230">
        <div className="row">
          {contactData.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div
                className={`tp-contact-us-content text-center ${item.extraClass || ""
                  }`}
                data-speed={item.speed}
              >
                <div className="tp-contact-us-thumb d-flex justify-content-center">
                  <Image style={{ width: "100%", height: "auto" }} src={item.img} alt={item.title} />
                </div>
                <div className="tp-contact-us-bottom">
                  <div className="tp-contact-us-info-details">
                    <h4 className="tp-contact-us-info-title">{item.title}</h4>
                    <Link href={`mailto:${item.email}`}>{item.email}</Link>
                    <Link href={`tel:${item.phone.replace(/[^+\d]/g, '')}`}>{item.phone}</Link>
                  </div>
                  <div className="tp-contact-us-btn">
                    <Link
                      className={item.btnClass}
                      target={item.link.startsWith('mailto:') ? undefined : '_blank'}
                      href={item.link}
                    >
                      <span>
                        <span className="text-1">{item.btnText}</span>
                        <span className="text-2">{item.btnText}</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsArea;
