import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import About from '../../pages/About/index.js';
import Home from '../../pages/Home/index';
import ShopPage from '../../pages/Shop/index';
import ContactPage from '../../pages/Contact/index';
import { NavMenu, LinkButton } from "./NavbarElements";
import Sticky from '../sticky';


// function Navbar() {
//     return (
//         <>
//             <Router>

//                 <Sticky>
//                     <NavMenu>
//                         <Link to="/">
//                             <LinkButton>Home</LinkButton>
//                         </Link>
//                         <Link to="/about">
//                             <LinkButton>About</LinkButton>
//                         </Link>
//                     </NavMenu>
//                 </Sticky>

//                 <Switch>
//                     <Route exact path="/">
//                         <Home />
//                     </Route>
//                     <Route path="/about">
//                         <About />
//                     </Route>
//                     <Route path="/shop">
//                         <ShopPage />
//                     </Route>
//                 </Switch>

//             </Router>
//         </>
//     )
// }

// export default Navbar;

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <Router>

          <NavMenu className={this.state.show ? "active" : "hidden"}>
            <Link to="/">
              <LinkButton>Home</LinkButton>
            </Link>
            <Link to="/about">
              <LinkButton>About</LinkButton>
            </Link>
            <Link to="/contact">
              <LinkButton>Contact</LinkButton>
            </Link>
          </NavMenu>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>

        </Router>
      </>
    );
  }
}