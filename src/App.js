//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import picImage from "./picImage.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    picImage,
    clickedpicImage: [],
    score: 0
  };

//when you click on a card ... the card is taken out of the array
  imageClick = event => {
    const currentpicImage = event.target.alt;
    const picImageAlreadyClicked =
      this.state.clickedpicImage.indexOf(currentpicImage) > -1;

//if you click on a card that has already been selected, the game is reset and cards reordered
    if (picImageAlreadyClicked) {
      this.setState({
        picImage: this.state.picImage.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedpicImage: [],
        score: 0
      });
        alert("Game Over.  You clicked the same card. Play again?");

//if you click on an available card score is increased and cards reordered
    } else {
      this.setState(
        {
          picImage: this.state.picImage.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedpicImage: this.state.clickedpicImage.concat(
            currentpicImage
          ),
          score: this.state.score + 1
        },
//if you get all 12 cards correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Congrats! You guessed all 12 correctly!");
            this.setState({
              picImage: this.state.picImage.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedpicImage: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.picImage.map(picImage => (
            <Card
              imageClick={this.imageClick}
              id={picImage.id}
              key={picImage.id}
              image={picImage.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;