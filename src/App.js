import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Hi from './components/Hi'
import PostList from './components/PostList'
import Navigation from './components/Navigation'
import PostForm from './components/PostForm'
import MyComponent from './components/MyComponent'

class App extends React.Component {
  render() {
    return (
      // <div>
      //    <MyComponent />
      // </div>
     
      <BrowserRouter>
        <div>
          {/* <PostForm/> */}
          <Navigation />
          <Switch>
            <Route path="/" component={Hi} exact></Route>
            <Route path="/PostList" component={PostList}></Route>
            <Route path="/PostForm" component={PostForm}></Route>
            
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
