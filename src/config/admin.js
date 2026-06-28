/**
 * ============================================================
 *  SADGURU SALES AGENCY — Central Site Configuration
 * ============================================================
 *  All business details are maintained here.
 *  Import and use this file anywhere in the project instead
 *  of hard-coding contact info, names, or logo paths.
 *
 *  Usage:
 *    import siteConfig from '@/config/admin';
 *    console.log(siteConfig.business.name);
 * ============================================================
 */

const siteConfig = {

  // ──────────────────────────────────────────────
  //  Business Identity
  // ──────────────────────────────────────────────
  business: {
    name:        "Sadguru Sales Agency",
    shortName:   "SSA",
    tagline:     "Your Trusted Chemical & Lubricant Supplier in Bhuj, Kutch",
    established: 2001,
    description:
      "Sadguru Sales Agency is one of the trusted names in the field of industrial chemicals, lubricants, and related products in Bhuj, Kutch. Established in 2001, we have been serving businesses, industries, workshops, automobile service centers, and commercial customers for more than two decades.",
  },

  // ──────────────────────────────────────────────
  //  Contact Details
  // ──────────────────────────────────────────────
  contact: {
    phone:       "(+91) 99250 25662",
    email:       "info@sadgurusales.com",
    mapLink:     "https://maps.app.goo.gl/JutkUuVCrcCut66g6",
  },

  // ──────────────────────────────────────────────
  //  Address
  // ──────────────────────────────────────────────
  address: {
    line1:   "Hem Complex",
    line2:   "Behind Mangatram Showroom",
    street:  "Madhapar Highway",
    area:    "Madhapar",
    city:    "Bhuj",
    district:"Kutch",
    state:   "Gujarat",
    pincode: "370020",
    country: "India",
    // Full formatted string
    full:    "Hem Complex, Behind Mangatram Showroom, Madhapar Highway, Madhapar, Bhuj, Kutch, Gujarat – 370020",
  },

  // ──────────────────────────────────────────────
  //  Logos  (paths relative to /public)
  // ──────────────────────────────────────────────
  logo: {
    full:   "/assets/img/new/logo/SSA full logo.png",   // header / footer full logo
    short:  "/assets/img/new/logo/SSA short logo.png",  // favicon / icon use
    square: "/assets/img/new/logo/SSA logo.png",        // square / app icon
    jpg:    "/assets/img/new/logo.jpg",                 // fallback jpg
  },

  // ──────────────────────────────────────────────
  //  SEO / Meta
  // ──────────────────────────────────────────────
  seo: {
    metaTitle:
      "Sadguru Sales Agency | Chemical & Lubricant Supplier in Bhuj, Kutch",
    metaDescription:
      "Sadguru Sales Agency is a trusted chemical and lubricant supplier in Bhuj, Kutch with over 25 years of experience. Quality products, reliable service, and competitive pricing for industrial and commercial requirements.",
    keywords:
      "Sadguru Sales Agency Bhuj, Chemical Dealer Bhuj, Lubricant Dealer Bhuj, Industrial Chemicals Kutch, Lubricants Supplier Bhuj, Chemical Supplier Madhapar, Industrial Products Bhuj, Lubricant Distributor Kutch",
  },

  // ──────────────────────────────────────────────
  //  Social / External Links
  // ──────────────────────────────────────────────
  social: {
    facebook:  "",
    instagram: "",
    whatsapp:  "https://wa.me/919925025662",   // update number as needed
    linkedin:  "",
  },

  // ──────────────────────────────────────────────
  //  Business Hours
  // ──────────────────────────────────────────────
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday:   "Sunday: Closed",
  },

};

export default siteConfig;
