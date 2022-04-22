import React from 'react';
import Hero from './HeroComponent';
import OurMission from './OurMissionComponent';
import HomeReleases from './HomeReleasesComponent';
import DemosEmail from './HomeDemosEmailComponent';
import Header from './HeaderComponent'

// import Releases from './ReleasesComponent';
// import Tour from './TourComponent';
// import Demos from './DemosComponent';
// import Shop from './ShopComponent';

// import { Switch, Route, Redirect } from 'react-router-dom';
// import { RELEASES } from '../shared/releases';
// import { TOUR } from '../shared/tour';

// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/images/logo.svg';

function Main() {

  const links = [
    {
      link: "/#releases",
      name: "Releases"
    },
    {
      link: "/tour",
      name: "Tour"
    },
    {
      link: "/shop",
      name: "Shop"
    },
    {
      link: "/#demos",
      name: "Demo"
    },

  ]
  return (
    <React.Fragment>
      <Header links={links} />
      <Hero />
      <OurMission />
      <HomeReleases />
      <DemosEmail />
    </React.Fragment>
  );
};

export default Main;


            // <Switch>
            //     <Route path='/releases' component={Releases} />
            //     <Route path='/tour' component={Tour} />
            //     <Route path='/demos' component={Demos} />
            //     <Route path='/shop' component={Shop} />



            //     <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
            //     <Route path='/directory/:campsiteId' component={CampsiteWithId} />
            //     <Route path='/aboutus' render={() => <About partners={this.state.partners} />} />
            //     <Route exact path='/contactus' component={Contact} />
            //     <Redirect to='/home' />
            // </Switch>
            // <Footer />

