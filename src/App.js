import React,{Component} from 'react';
import Weather from './weather'
import Form from './Form'
import './App.css'
const API_KEY="e36ed364400282e43250b6c4c0274d44";
class App extends Component{
  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
    
  }
  getWeather= async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
   
   const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
   const data= await api.json();
   if(city && country){
    this.setState({
      tempreature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
     })
    }
    else{
      this.setState({
      tempreature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'enter the city and the country'
    })
    }

  }
  
  render(){
  return (
    <div className="wrapper">
    <div className="form_container">
  <Form getWeather={this.getWeather}/>
  <Weather
        tempreature={this.state.tempreature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
  />
    </div>
    </div>

  );
}
}

export default App;
   
