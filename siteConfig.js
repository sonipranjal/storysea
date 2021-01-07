module.exports = {
  siteUrl: "https://storysea.in",
  postsPerPage: 12,
  siteTitleMeta: "WELCOME TO THE SEA OF STORIES!!",
  siteDescriptionMeta: "A common man thoughts, stories and ideas!.",
  shareImageWidth: 1000,
  shareImageHeight: 523,
  shortTitle: "storysea!",
  siteIcon: "favicon.png",
  backgroundColor: "#e9e9e9",
  themeColor: "#15171A",
  apiUrl: "https://ghost.theasdfghjkl.com",
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://storysea.in/",
      },
      {
        label: "Contact",
        url: "https://storysea.in/contact",
      },
    ],
  },
  footer: {
    copyright: "storysea",
    navigation: [
      {
        label: "Home",
        url: "https://storysea.in/",
      },
      {
        label: "Sitemap",
        url: "https://storysea.in/sitemap.xml",
      },
      // {
      //   label: "RSS",
      //   url: "https://storysea.in/rss.xml",
      // },
      // {
      //   label: "Contact",
      //   url: "https://storysea.in/contact",
      // },
      // {
      //   label: "External Link",
      //   url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      // },
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to storysea",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to storysea.",
  },
  socialLinks: {
    twitter: "https://twitter.com/storysea11",
    facebook: "https://www.facebook.com/storysea11/",
    instagram: "https://www.instagram.com/storysea.in/",
    linkedin: "https://www.linkedin.com/company/storysea",
    github: "",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact us",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "storysea",
    description: "A common man thoughts, stories and ideas!.",
  },
  twitterCard: {
    title: "storysea",
    description: "A common man thoughts, stories and ideas!.",
    imageUrl: "twitterImage.png",
    username: "@storysea11",
  },
  facebookCard: {
    title: "storysea",
    description: "A common man thoughts, stories and ideas!.",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "storysea",
  siteDescription: "Welcome to the sea of stories!",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      { varName: "--accent-color", value: "#6166DC" },
      { varName: "--accent-color-dark", value: "#E9DAAC" },
      { varName: "--success-color", value: "#46B17B" },
      { varName: "--success-color-dark", value: "#46B17B" },
      {
        varName: "--merriweather-font",
        value: `Merriweather`,
      },
      {
        varName: "--merriweather-font-bold",
        value: `700`,
      },
      {
        varName: "--system-font",
        value: `system-ui`,
      },
      {
        varName: "--system-font-normal",
        value: `400`,
      },
      {
        varName: "--system-font-semibold",
        value: `600`,
      },
      {
        varName: "--system-font-bold",
        value: `700`,
      },
      {
        varName: "--monospace-font",
        value: `Source Code Pro`,
      },
      {
        varName: "--monospace-font-normal",
        value: `400`,
      },
    ],
    fonts: [
      {
        family: "Merriweather",
        variants: ["700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Source Code Pro",
        variants: ["400"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
