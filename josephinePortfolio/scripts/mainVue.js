import './navBarComponents.js';

new Vue(
    {
    el: '#anavbar',
    data: {
      links: [
        {
            id:1,
            icon: "home icon",
            text: "Home"
        },
        {
           id:2,
           icon:"bio icon",
           text: "Bio"
        }
      ]
    }
  });

