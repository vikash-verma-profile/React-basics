import React from 'react';
var createReactClass = require('create-react-class');

var MyMixin = {
    getDefaultProps: function()
    {
        return {name:"skillbakery"};
    },
  doSomething() {

  }
};
const MyComponent =createReactClass({
  mixins: [MyMixin],
  handleClick() {
    this.doSomething(); // invoke mixin's method
  },
  render() {
    return (
        <div>
      <button onClick={this.handleClick}>Do Something</button>
      <label>{this.props.name}</label>
      </div>
    );
  }
});

export default MyComponent;