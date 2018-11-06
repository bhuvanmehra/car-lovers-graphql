import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Card from './Card';
import query from '../queries/fetchCarByID';

class CarShow extends Component {
  render() {
    return (
      <Query query={query} variables={{ id: parseInt(this.props.match.params.id) }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Something went wrong. Please try again.</p>;
          return (
            <div>
              <CarShowComponent />
              <Card carModel={data.Car} />
            </div>
          );
        }}
      </Query>    
    );
  }
}

export const CarShowComponent = () => {
  return <h5 className="header-message" style={{ textAlign: 'center' }}>Selected Car</h5>;
};

export default CarShow;