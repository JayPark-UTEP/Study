import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<DayList/>}/> 
        <Route exact path="/day/:day" element={<Day/>}/> 
        <Route path="*" element={<EmptyPage/>} />

      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
