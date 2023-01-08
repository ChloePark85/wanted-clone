import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home"
import JobsFeed from "./Routes/JobsFeed"
import Community from "./Routes/Community"
import Login from './Routes/Login';
import Signup from './Routes/Signup';
import Password from './Routes/Password';
import JobList from './Routes/JobList';
import Position from './Routes/Position';
import InterestTag from './Routes/InterestTag';
import MyPage from './Routes/MyPage';
import JobDetail from './Routes/JobDetail';

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
        
        <Route path="/joblist" exact element={<JobList />}/>
        <Route path="/joblist/:id" exact element={<JobDetail />}/>
        <Route path="/community" exact element={<Community />}/>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/login/:id" exact element={<Password />}/>
        <Route path="/signup" exact element={<Signup />}/>
        <Route path="/signup/position" exact element={<Position />}/>
        <Route path="/signup/interest" exact element={<InterestTag />}/>
        <Route path="/mypage" exact element={<MyPage />}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
