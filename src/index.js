import React from 'react';
import ReactDOM from'react-dom';

class Userform extends React.Component
{

  render(){
    return(
       <form>
        <label>Enter a username:</label>
        <input />
       </form>
    );

  }
}

ReactDOM.render(<Userform/>,document.querySelector('#root'));
