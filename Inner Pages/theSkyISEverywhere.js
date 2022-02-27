
//***********************************Related*********************************/

var muldata = [
    {
      image:" https://is4-ssl.mzstatic.com/image/thumb/I6UAhe-RRHaTB3hCQdQXCQ/738x416.webp",
  },
  {
      image:"https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp ",
  },
  {
      image:"https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp ",
  },
  {
      image:"https://is3-ssl.mzstatic.com/image/thumb/_VWBeTzPLn6LeyUjlTaSiQ/738x416.webp ",
  },
  {
      image:"https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/738x416.webp ",
  },
  {
      image:"https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp ",
  },
  {
      image:" https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
  },
  {
      image:"https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp ",
  },
  {
      image:"https://is3-ssl.mzstatic.com/image/thumb/D8bOyY8jg5hymGMxt1LSZg/738x416.webp ",
  },
  {
      image:"https://is3-ssl.mzstatic.com/image/thumb/eGnsZyr_h0ivXT0r4jbaew/738x416.webp ",
  },
  {
      image:" https://is4-ssl.mzstatic.com/image/thumb/jdSxJnPbX9kKPTfMKUHvww/738x416.webp",
  },
  ];  

  muldata.map(function (element) {
    var div = document.createElement("div");
    div.setAttribute("class", "card");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img");
    img.setAttribute("src", element.image);
    div.append(img);
    document.querySelector("#container2 .glider").append(div);
  });
  
  new Glider(document.querySelector("#container2 .glider"), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    arrows: {
      prev: "#container2 .glider-prev",
      next: "#container2 .glider-next",
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 380,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
  });

//****************************************CAST AND CREW******************************************************** */

var sgData = [
    {
      image:"https://is4-ssl.mzstatic.com/image/thumb/aywE1jyArtMTqMet2S7Otg/492x492ve.webp",
      name:"Grace Kaufman ",
      role:"Lennie"
  },
  {
      image:"https://is3-ssl.mzstatic.com/image/thumb/QGo8lU-RCcHPM5pmo3_mbA/492x492ve.webp",
      name:"Jacques Colimon",
      role:"Joe Fontaine"
  },
  {
      image:"https://is4-ssl.mzstatic.com/image/thumb/kTEKRpv_3ghSGA7ajSciiQ/492x492bb.webp",
      name:"Jason Segel",
      role:"Big"
  },
  {
      image:"https://is5-ssl.mzstatic.com/image/thumb/l16Oy6VjXzAx8dGSOBQ_bA/492x492bb.webp",
      name:"Pico Alexander",
      role:"Toby Shaw"
  },
  {
      image:"https://is1-ssl.mzstatic.com/image/thumb/0YS5ZNsPXKF5gq3WVvUpBg/492x492bb.webp",
      name:"Sidney Blumenthal",
      role:"Voice"
  },
  {
      image:"https://is1-ssl.mzstatic.com/image/thumb/FPNJQQaEdT8-PrrUPglr7g/492x492ve.webp",
      name:"Havana Rose Liu",
      role:"Bailey"
  },
  {
      image:"https://is4-ssl.mzstatic.com/image/thumb/vzz8NxN-sV5KUAxlFa-B7A/492x492bb.webp",
      name:"Julia Schlaepfer",
      role:"Rachel Brazile"
  },
  {
      image:"https://is2-ssl.mzstatic.com/image/thumb/DEXcAOQHwDN9L03YtsFULw/492x492ve.webp",
      name:"Michael Burlingame",
      role:"Voice"
  },
  {
      image:"https://is4-ssl.mzstatic.com/image/thumb/_zrdwisk-olKW6dKtqv5hQ/492x492bb.webp",
      name:"Josephine Decker",
      role:"Director"
  },
  {
      image:"https://is2-ssl.mzstatic.com/image/thumb/pB_kmXsgU7CFdBtDzs5I4g/492x492bb.webp",
      name:"Denise Di Novi",
      role:"Producer"
  },
  {
      image:"https://is3-ssl.mzstatic.com/image/thumb/mG6Pkk0A6v9kJB21jukqGw/492x492ve.webp",
      name:"Margaret French Isaac",
      role:"Producer"
  },
  {
      image:"https://is2-ssl.mzstatic.com/image/thumb/b7QVL2C5CdQ2NTDBSk2PcQ/492x492bb.webp",
      name:"Mary Frances Berry",
      role:"Voice"
  }
  ];

sgData.map(function (element) {
    var div = document.createElement("div")
    var div1 = document.createElement("div");
    div.setAttribute("class", "card");
    var img = document.createElement("img");
    img.setAttribute("class", "card-img1");
    img.setAttribute("src", element.image);
    var h3 = document.createElement("p")
    h3.setAttribute("class", "name")
    h3.innerText = element.name;
    var p = document.createElement("p")
    p.innerText = element.role
    p.setAttribute("class", "role")
  
    div1.append(img)
    div.append(div1,h3,p);
    document.querySelector("#container3 .glider").append(div);
  });
  
  new Glider(document.querySelector("#container3 .glider"), {
    slidesToShow: 6,
    slidesToScroll: 6,
    draggable: true,
    arrows: {
      prev: "#container3 .glider-prev",
      next: "#container3 .glider-next",
      },
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 380,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 5,
            slidesToScroll: 5,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1280,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
  });
  