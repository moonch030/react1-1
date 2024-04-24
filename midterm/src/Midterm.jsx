import React, { useState } from 'react';

export default class Midterm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "",
        };
      }
    render() {
      return (
      <div>
        <h1>당신은 어떤 과일을 좋아하나요?  {this.state.text} </h1>
        <button onClick={this.Apple}>사과</button>
        <button onClick={this.Orange}>오렌지</button>
        <button onClick={this.Banana}>바나나</button>
      </div>
      );
    }
    Apple = () => {
        this.setState({
          text: "사과",
        });
      };

    Orange = () => {
        this.setState({
          text: "오렌지",
        });
      };

    Banana = () => {
        this.setState({
          text: "바나나",
        });
      };
  }
