// import Home from "./components/home";
// import SignUp from "./components/login_signup/signup";
// import Main from "./components/Main";
import Answer from "./components/answer/Answer";
import Header from "./components/menu/header";
import LeftNav from "./components/menu/leftnav";
// import Motto from "./components/motto"
import RouteHome from "./components/route";
import NoteState from "./context/Notes/NoteState";



 function App() {
  return (
    <>  
<NoteState>
  {/* <Answer/> */}
<RouteHome/>
{/* <Footer/> */}
{/* <Login/> */}
</NoteState>
    </>

  );
}

export default App;