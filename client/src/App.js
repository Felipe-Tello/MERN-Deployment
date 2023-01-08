import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllPets from "./components/AllPets";
import Error from "./components/Error";
import NewPet from "./components/NewPet";
import UpdatePet from "./components/UpdatePet";
import ViewPet from "./components/ViewPet";

  const App = () =>{
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPets />} />
          <Route path="/new" element= {<NewPet />} />
          <Route path="/pets/edit/:id" element={<UpdatePet />}/>
          <Route path="/error" element={<Error />}/>
          <Route path="/pets/view/:id" element={<ViewPet />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
