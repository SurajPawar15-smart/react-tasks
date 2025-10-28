// import ReactDOM from "react-dom/client";
// import Company from "./App";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Company />);

// import ReactDOM from "react-dom/client";
// import PersonalDetails from "./App.jsx";
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<PersonalDetails />);

// import ReactDOM from "react-dom/client";
// import Employee from "./App.jsx";
// export default function App(){
// return (
// <>
//       <Employee name="Suraj Pawar" role="Software Developer" experience="3+ years" />
//       <Employee name="Pranay Pawar" role="UI Designer" experience="2 years" />
// </>
// )}
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);

import ReactDOM from "react-dom/client";
import BlogPost from "./App.jsx";
export default function App() {
  return (
    <>
      <BlogPost
        title="Exploring React with Vite"
        author="Suraj Pawar"
        date="27 Oct 2025"
        content="React with Vite offers fast builds, modern tooling, and smooth developer experience."
      />
    </>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
