export const items = [
  { name: "home", label: "Home", link: "/" },
  {
    name: "blog",
    label: "Blog",
    items: [
      {
        name: "graduateAdmissions",
        label: "Graduate Admissions",
        link: "/blog/graduate_admissions",
      },
      {
        name: "lifeInBerlin",
        label: "Life in Berlin",
        link: "/blog/life_in_berlin",
      },
    ],
    link: "/blog",
  },
  { name: "cv", label: "CV", link: "/CV" },
  { name: "about", label: "About", link: "/about" },
  { name: "contact", label: "Contact", link: "/contact" },
];

export default items;
