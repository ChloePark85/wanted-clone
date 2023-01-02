import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home"
import JobsFeed from "./Routes/JobsFeed"
import Community from "./Routes/Community"
import Login from './Routes/Login';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
  a {
    text-decoration: none;
    color: black;
}
button {
    border: none;
    background: none;
    text-decoration: none;
}
html, body {
  box-sizing: border-box;
  font-family: Pretendard,Pretendard JP,Pretendard Std,-apple-system,system-ui,BlinkMacSystemFont,Roboto,Segoe UI,Helvetica,Arial,Apple SD Gothic Neo,Nanum Gothic,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
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
        <Route path="/login" exact element={<Login />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
