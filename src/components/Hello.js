import React from 'react'

const Hello =() => {
//    return (<div><h1>Vikash Verma</h1></div>)
// return React.createElement('div',null,'Hello Vikash')
// return React.createElement('div',null,'<h1>Hello Vikash</h1>')

// return React.createElement('div',null,React.createElement('h1',null,'Hello Vikash 1'))

return React.createElement('div',{id:"hello",className:"sample"},React.createElement('h1',null,'Hello Vikash 1'))

}

export default Hello