import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom app !</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click  me to visit google",
// };
const anotherElement = (
  <a href="/http://google.com" target="_bkank">
    Vist google
  </a>
);

const ReactElement =  React.createElement(
  'a',{href:'https://google.com',target:'_blank'},
  'Click me to Visit google '
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // <MyApp />
  // ReactElement
  // MyApp()
);
