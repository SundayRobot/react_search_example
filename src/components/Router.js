import React from "react";
import App from "../App";
import ItemDetail from "./ItemDetail";
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Router = () =>{
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/react_search_example" component={App} exact/>
          <Route  path="/react_search_example/item/:id" component={ItemDetail}/>
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  
  );
}

export default Router;