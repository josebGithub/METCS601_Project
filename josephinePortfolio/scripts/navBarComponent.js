Vue.component(
    'c-navbar',
    {
        props: ['nav_links_prop'],
        template:
            `<nav class="top-nav-bar">\
                <ul>\
                    <li v-for="navlink in nav_links_prop" :key="navlink.id">\
                    <a :href="navlink.link">\
                    <span>{{navlink.text}}</span>\
                    </a>\
                    </li>\
                </ul>\
            </nav>`

    }
);

new Vue(
    {
    el: '#navbar',
    data: {
      links: [
        {
            id:1,
            icon: "home icon",
            text: "Home",
            link: "index.html"
        },
        {
           id:2,
           icon:"bio icon",
           text: "Bio",
           link: "bio.html"
        },
        {
            id:3,
            icon:"education icon",
            text: "Education",
            link: "education.html"
         },
         {
            id:4,
            icon:"experience icon",
            text: "Experience",
            link: "experience.html"
         },
         {
            id:5,
            icon:"skills icon",
            text: "Skills",
            link: "skills.html"
         },
         {
            id:6,
            icon:"presentation icon",
            text: "Presentation",
            link: "presentation.html"
         }
      ]
    }
  });




