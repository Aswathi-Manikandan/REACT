

import './App.css'
import Header from './components/Header'
function App() {
  const data ='easy ro learn'
  return (
    <div>
    <h1 style={{backgroundColor:"grey"}}>hello world</h1>
    <p className='hello'>Sample react {data}</p>
    <Diff/>
    <Diff/>
    <Diff/>
    <Header/>
    </div>
   
  );
}

export default App;


function Diff(){
  return(
    <h1 style={{color :"green"}}> New sample content </h1>
  )
}