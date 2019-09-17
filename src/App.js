import React from 'react';
import './App.css';
import Landing from './components/Landing'
import Header from './components/Header'
import AboutUs from './components/AboutUs';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      imageActive:false,
      pageName:"Landing"
    }
    this.goToPage = this.goToPage.bind(this);
  }

  componentDidUpdate(prevstate){
    console.log("bb")
    console.log(prevstate)
  }



  goToPage = (page) => {
    this.setState(state => ({
      //chosenProject:this.props.goTo("test")
      pageName:page
    }))
  }


  render() {
    if (this.state.pageName === "Landing"){
      return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Landing goTo={this.goToPage}/>
        </header>
      </div>
    );
  }
  else if (this.state.pageName === "About"){
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
            <AboutUs/>
          </header>
      </div>
    );

  }
  }
}

export default App;