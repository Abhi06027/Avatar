import "./App.css";

import Main from "./Components/Main";

import { Helmet } from "react-helmet";

function App() {
  return (
    <div className=" ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Netflix </title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="
          Netflix - Watch TV Shows Online, Watch Movies Online"
        />
      </Helmet>

      <div>
        <Main />
      </div>
      <head>
        <title> Netflix clone</title>

        <link rel="icon" href="/images/favicon.png" />
      </head>
    </div>
  );
}

export default App;
