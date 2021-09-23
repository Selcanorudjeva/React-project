import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component{
constructor(props){
  super(props);
  this.newBook = this.newBook.bind(this);
  this.state={
        name: "1984",
        author: "George Orwell",
        pagelenght: 201
  }
}


newBook(){
  this.setState({
    name:"Heyvan Çiftliği",
    author: "George Orwell",
    pagelenght: 500
  })
}

render(){
  return(
    <div style={{"margin-left":"100px"}}>
      <h1>Book Info</h1>
      <p>Book Name:{this.state.name}</p>
      <p>Book Author:{this.state.author}</p>
      <p>Book Page:{this.state.pagelenght}</p>
      <button onClick={this.newBook}>New Book</button>
    </div>
  );
}
}





ReactDOM.render(<Book />,document.getElementById("root"));




