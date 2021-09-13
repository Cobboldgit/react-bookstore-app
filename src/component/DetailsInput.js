import React, { Component } from "react";
import '../App.css'

class DetailsInput extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", description: "", text: "" };
  }

  handleSubmit(e) {
    e.preventDefault();

    let Author = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.decription,
    };

    this.props.addUser(Author);

    this.setState({ title: "", author: "", description: "" });
  }


  handleTypeWriter() {
    
    let i = 0;
    let txt = "You are welcome, your details are safe with us.";
    let speed = 100;
  
    let typeWriter = (props) => {
      if (i < txt.length) {
      //   document.getElementById("test").innerHTML += txt.charAt(i);
      //   i++;
      //   setTimeout(typeWriter, speed);
  
        // this.setState([this.state.text= (txt.substring(0, i++))]);
        this.setState({text: (txt.substring(0, i++)) })
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter()
  }

  render() {
    return (
      <div className="formBox">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            placeholder="Title of this book"
          />
          <input
            name="author"
            type="text"
            value={this.state.author}
            onChange={(e) => this.setState({ author: e.target.value })}
            placeholder="Author of this book"
          />
          <textarea
            name="description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
            placeholder='Write book description here'
          />

          <button onClick={()=>this.handleTypeWriter()}>Submit</button>

          <div id="test">{this.state.text}</div>
        </form>
      </div>
    );
  }
}

export default DetailsInput;
