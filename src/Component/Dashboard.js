import React from "react";
import { BrowserRouter as Router, Switch, Route ,useHistory,Redirect } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ListView from "./page/Listview";
import Mapview from "./page/Mapview";
import Sidebar from "./page/Sidebar";
import AddItem from "./page/AddItem";
const Dashbord = () => {
  const shouldRedirectToAddItem = true; // Set this value based on your condition

  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="row">
            <div class="col-lg-12">
              <div class="card ">

                <div class="card-body" >
                  <Switch>
                    <Route exact path="/Listview" component={ListView} />
                    <Route  path="/Mapview"  component={Mapview} />
                    <Route  path="/AddItem"  component={AddItem} />
                    {shouldRedirectToAddItem? <Redirect to="/AddItem" />:null}
                   
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashbord;
