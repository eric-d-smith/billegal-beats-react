import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import Releases from './ReleasesComponent';
// import Tour from './TourComponent';
// import Demos from './DemosComponent';
// import Shop from './ShopComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { RELEASES } from '../shared/releases';
// import { TOUR } from '../shared/tour';

function Main() {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <Footer />
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



