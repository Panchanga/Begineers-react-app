// import logo from './logo.svg';
import './App.css';
import First from './components/firstcomponent';

function App(props) {
  console.log(props, "App  props");
  return (
    <div className="App">
      <First
      title ={'this is first component'}
      name= {'panchey'}
      age ={22}
      subjects = {['physics ','math','science']}
      location = {{
        latitude : 55.2,
        longitude: 33.33,
       
      }}
       gender ={'M'}
      isStudent={true} />
    </div>
  );
}

export default App;
