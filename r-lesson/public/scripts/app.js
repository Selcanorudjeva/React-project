"use strict";

var root = document.getElementById("root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", {
  style: {
    "width": "100%",
    "height": "60px",
    "background-color": "#20232a",
    "display": "flex",
    "justify-content": "space-evenly"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "logo",
  style: {
    "display": "flex",
    "flex-direction": "row",
    "color": "#61dafb",
    "font-weight": "700",
    "font-size": "20px",
    "font-family": "'Georama'"
  }
}, /*#__PURE__*/React.createElement("svg", {
  style: {
    "width": "30px",
    "margin-left": "20px"
  },
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-11.5 -10.23174 23 20.46348"
}, /*#__PURE__*/React.createElement("title", null, "React Logo"), /*#__PURE__*/React.createElement("circle", {
  cx: "0",
  cy: "0",
  r: "2.05",
  fill: "#61dafb"
}), /*#__PURE__*/React.createElement("g", {
  stroke: "#61dafb",
  "stroke-width": "1",
  fill: "none"
}, /*#__PURE__*/React.createElement("ellipse", {
  rx: "11",
  ry: "4.2"
}), /*#__PURE__*/React.createElement("ellipse", {
  rx: "11",
  ry: "4.2",
  transform: "rotate(60)"
}), /*#__PURE__*/React.createElement("ellipse", {
  rx: "11",
  ry: "4.2",
  transform: "rotate(120)"
}))), /*#__PURE__*/React.createElement("p", {
  style: {
    "margin-left": "10px"
  }
}, "React")), /*#__PURE__*/React.createElement("div", {
  className: "list"
}, /*#__PURE__*/React.createElement("ul", {
  style: {
    "display": "flex",
    "flex-direction": "row",
    "color": "white"
  }
}, /*#__PURE__*/React.createElement("li", {
  style: {
    "list-style": "none",
    "margin-right": "22px",
    "font-size": "18px",
    "font-family": "Cagliostro",
    "cursor": "pointer"
  }
}, "Docs"), /*#__PURE__*/React.createElement("li", {
  style: {
    "list-style": "none",
    "margin-right": "20px",
    "font-size": "18px",
    "font-family": "Cagliostro",
    "cursor": "pointer"
  }
}, "Tutorial"), /*#__PURE__*/React.createElement("li", {
  style: {
    "list-style": "none",
    "margin-right": "22px",
    "font-size": "18px",
    "font-family": "Cagliostro",
    "cursor": "pointer"
  }
}, "Blog"), /*#__PURE__*/React.createElement("li", {
  style: {
    "list-style": "none",
    "font-size": "18px",
    "font-family": "Cagliostro",
    "cursor": "pointer"
  }
}, "Community"))), /*#__PURE__*/React.createElement("div", {
  className: "search",
  style: {
    "padding-top": "20px"
  }
}, /*#__PURE__*/React.createElement("i", {
  "class": "fas fa-search",
  style: {
    "color": "white",
    "font-size": "20px"
  }
}), /*#__PURE__*/React.createElement("input", {
  style: {
    "background-color": "#20232a",
    "border": "none",
    "width": "70%",
    "height": "20px"
  },
  type: "text",
  placeholder: "Search"
})), /*#__PURE__*/React.createElement("div", {
  className: "lastside"
}, /*#__PURE__*/React.createElement("ul", {
  style: {
    "display": "flex",
    "flex-direction": "row",
    "color": "white"
  }
}, /*#__PURE__*/React.createElement("li", {
  style: {
    "list-style": "none",
    "margin-right": "15px",
    "font-size": "18px",
    "font-family": "Cagliostro",
    "cursor": "pointer"
  }
}, "v17.0.2"), /*#__PURE__*/React.createElement("li", {
  style: {
    "display": "flex",
    "list-style": "none",
    "margin-right": "15px",
    "font-size": "18px",
    "font-family": "Cagliostro",
    "cursor": "pointer"
  }
}, " ", /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px",
  fill: "#FFFFFF"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
})), " ", /*#__PURE__*/React.createElement("p", {
  style: {
    "color": "white",
    "transform": "translate(0px,-18px)"
  }
}, "Languages")), /*#__PURE__*/React.createElement("li", {
  style: {
    "list-style": "none",
    "margin-right": "15px",
    "font-size": "18px",
    "font-family": "Cagliostro",
    "cursor": "pointer"
  }
}, "GitHub")))), /*#__PURE__*/React.createElement("div", {
  className: "container",
  style: {
    "position": "relative",
    "width": "100%",
    "height": "500px",
    "background-color": "#282c34"
  }
}, /*#__PURE__*/React.createElement("svg", {
  style: {
    "opacity": "0.1",
    "width": "50%",
    "position": "absolute",
    "left": "950px",
    "top": "100px"
  },
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-11.5 -10.23174 23 20.46348"
}, /*#__PURE__*/React.createElement("title", null, "React Logo"), /*#__PURE__*/React.createElement("circle", {
  cx: "0",
  cy: "0",
  r: "2.05",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("g", {
  stroke: "#fff",
  "stroke-width": "1",
  fill: "none"
}, /*#__PURE__*/React.createElement("ellipse", {
  rx: "11",
  ry: "4.2"
}), /*#__PURE__*/React.createElement("ellipse", {
  rx: "11",
  ry: "4.2",
  transform: "rotate(60)"
}), /*#__PURE__*/React.createElement("ellipse", {
  rx: "11",
  ry: "4.2",
  transform: "rotate(120)"
}))), /*#__PURE__*/React.createElement("h1", {
  style: {
    "position": "absolute",
    "color": "#61dafb",
    "font-size": "60px",
    "font-family": "'Georama'",
    "letter-spacing": "2px",
    "left": "870px",
    "top": "55px"
  }
}, "React"), /*#__PURE__*/React.createElement("h3", {
  style: {
    "position": "absolute",
    "font-size": "30px",
    "font-family": "'Georama'",
    "letter-spacing": "4px",
    "left": "550px",
    "top": "165px",
    "color": "white",
    "font-weight": "100"
  }
}, "A JavaScript library for building user interfaces"), /*#__PURE__*/React.createElement("div", {
  style: {
    "display": "flex",
    "flex-direction": "row",
    "position": "absolute",
    "left": "750px",
    "top": "280px"
  },
  className: "but-txt"
}, /*#__PURE__*/React.createElement("button", {
  style: {
    "cursor": "pointer",
    "background-color": "#61dafb",
    "border": "none",
    "width": "160px",
    "height": "60px",
    "font-size": "20px",
    "letter-spacing": "1px"
  }
}, "Get started"), /*#__PURE__*/React.createElement("h3", {
  style: {
    "cursor": "pointer",
    "color": "#61dafb",
    "font-weight": "520",
    "font-family": "'Georama'",
    "letter-spacing": "2px",
    "margin-left": "25px",
    "font-size": "22px",
    "margin-top": "17px"
  },
  className: "txt"
}, "Take the tutorial ", /*#__PURE__*/React.createElement("svg", {
  style: {
    "width": "9px",
    "transform": "translate(0px,5px)"
  },
  width: "14",
  height: "24",
  viewBox: "0 0 14 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z",
  fill: "#61DAFB"
}))))));
ReactDOM.render(template, root);
