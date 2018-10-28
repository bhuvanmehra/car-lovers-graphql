import React, { Component } from 'react';
//import _ from 'lodash';
import { Query } from 'react-apollo';
//import gql from 'graphql-tag';
import query from '../queries/CarOfTheWeek';
//import { fetchCarOfWeek } from '../actions';
//import Card from './Card';

class Home extends Component {
  componentWillMount() {
    //this.props.fetchCarOfWeek();
  }

  render() {
    console.log(this.props.data);
    //const cars = this.props.cars.model; 
    //const { carOfTheWeek } = this.props.cars;
    return (
      <Query query={query}
      >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return <div>Hello</div>;
      }}
      </Query>
    );
  }
}
/* <Card carModel={_.find(cars, {"id": carOfTheWeek.modelId})} />
<p className="flow-text">{this.props.cars.carOfTheWeek.review}</p> */
// function mapStateToProps({ cars }) {
//   return { cars };
// }

export const HomeComponent = () => {
  return <h5 className="home-title" style={{ textAlign: 'center' }}>Car Of The Week</h5>;
};

export default Home;
