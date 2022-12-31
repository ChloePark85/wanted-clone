import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home"
import JobsFeed from "./Routes/JobsFeed"
import Community from "./Routes/Community"

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
  a {
    text-decoration: none;
    color: black;
}
button {
    border: none;
    background-color: white;
    color: black;
    text-decoration: none;
}
html, body {
  box-sizing: border-box;
  font-family: 'Noto Sans'
}
 `

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/jobsfeed" exact element={<JobsFeed />}/>
        <Route path="/community" exact element={<Community />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
