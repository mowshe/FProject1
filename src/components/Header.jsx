import React from 'react';
import { Spring, config } from 'react-spring/renderprops';
import altLogo from '../Images/Alt_Logo.png'
// import logo from '../Images/Main_Logo.png'

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        destination:""
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleClickAbout = this.handleClickAbout.bind(this)
    }

    handleClickAbout = (e) =>{
      this.props.goTo(about);
    }

    handleClick = (e) =>{
      this.props.goTo(landing);
    }
    
    render() {
      return (
        <div class="headbanner">

            <Spring
            from={{opacity:0, marginTop:-300}}
            to={{opacity:1, marginTop:0}}
            config={{tension:150,friction:10, precision:1}}
            >
            { props => (
              <div style={props}>
                {/*Put anything you want to animate here */}
                <Spring
                        from={{marginTop:-500}}
                        to={{marginTop:0}}
                        config={{delay:100, duration:100}}>
                        {props=>(
                            <div  style={props}>
                              <img onClick={this.handleClick} id="logo" src={'https://res.cloudinary.com/coool/image/upload/v1569962845/Lava%20Shape%20GIF_Square.gif'}/>
                              
                              {/* <p id="backText">  Back</p> */}
                            </div>
                        )}
                    </Spring>

                <Spring
                        from={{opacity:0}}
                        to={{opacity:1}}
                        config={{delay:100, duration:1500}}
                    >
                        {props=>(
                            <div style={props}>
                                <a onClick={this.handleClickAbout} id="attic">About Us</a>

                                <a id="about">About Us</a>
                            </div>
                        )}
                    </Spring>
                <Spring
            from={{opacity:0, marginTop:-300}}
            to={{opacity:1, marginTop:0}}
            config={{tension:150,friction:10, precision:1}}>
                        {props=>(
                            <div id="mobileStyle" style={props}>
                                {/* notice the id of about us */}
                                <img onClick={this.handleClick} id="homeImageMobile" src={'https://res.cloudinary.com/coool/image/upload/v1569962845/Lava%20Shape%20GIF_Square.gif'}/>
                            </div>
                        )}
                    </Spring>

                
              </div>
            )
            }
            </Spring>

        </div>
      );
    }
  }

  const landing = {
    title:"Landing"
  }  

  const about = {
    title:"About"
  }

  export default Header;
  

