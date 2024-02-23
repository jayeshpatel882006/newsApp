import React, { Component } from 'react'
import Nevbar from './component/Nevbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  
  apikey = "1cfbe18de4d94760b8a2ddd33b2d89f6"

  render() {
    return (
      <div>

        <Router>
        <Nevbar/>

        <Switch>
          <Route exact path="/technology">   <News key={"technology"}    apikey = {this.apikey}   contry = "in"  category = "technology"     pagesize = "5"/>   </Route>
          <Route exact path="/sports">       <News key={"sports"}        apikey = {this.apikey}   contry = "in"  category = "sports"         pagesize = "5"/>   </Route>
          <Route exact path="/science">      <News key={"science"}       apikey = {this.apikey}   contry = "in"  category = "science"        pagesize = "5"/>   </Route>
          <Route exact path="/business">     <News key={"business"}      apikey = {this.apikey}   contry = "in"  category = "business"       pagesize = "5"/>   </Route>
          <Route exact path="/entertainment"><News key={"entertainment"} apikey = {this.apikey}   contry = "in"  category = "entertainment"  pagesize = "5"/>   </Route>
          <Route exact path="/general">      <News key={"general"}       apikey = {this.apikey}   contry = "in"  category = "general"        pagesize = "5"/>   </Route>
          <Route exact path="/health">       <News key={"health"}        apikey = {this.apikey}   contry = "in"  category = "health"         pagesize = "5"/>    </Route>
          <Route exact path="/">             <News key={"general"}       apikey = {this.apikey}   contry = "in"  category = "general"        pagesize = "5"/>    </Route>
        </Switch>

        </Router>
      </div>
    )
  }
}
