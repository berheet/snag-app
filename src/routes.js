import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ShortlistedApplicants from './components/ShortlistedApplicants/ShortlistedApplicants'
import Favorited from "./components/Favorited/Favorited";

export default (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
<Route path='/shortlistedApplicants' component={Favorited} />
     
    </Switch>
  );