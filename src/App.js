import React, { Component, useState } from 'react';
import Productos from './components/Productos';

/*
const movieData = [
  {
      title: 'Avengers: Infinity War',
      year: '2018',
      description: 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
      imageURL: 'https://via.placeholder.com/362x200'
  },
  {
      title: 'Bohemian Rhapsody',
      year: '2018',
      description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet.',
      imageURL: 'https://via.placeholder.com/362x200'
  },
  {
      title: 'The Incredibles 3',
      year: '2018',
      description: 'Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of “normal” life.',
      imageURL: 'https://via.placeholder.com/362x200'
  }
];
*/
export class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appHSg4uspPKR3JSY/favorites?api_key=keyTIAQqr48JFGw2o')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data.records);
      console.log(data.records.length);
      
       this.setState({ movies: data.records });
    }).catch(err => {
      // Error :(
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4">
          
            
              { this.state.movies.map( movie => 
              <Productos {...movie.fields} /> 
              )}
            
          
        </div>
      </div>
    );
  }
}

export default App;