import React, { Component } from 'react';
import { Query } from 'react-apollo';
import query from '../queries/CarOfTheWeek';
import Card from './Card';
import '../style/style.css'
import Typography from '@material-ui/core/Typography';

class Home extends Component {
  render() {
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Something went wrong. Please try again.(</p>;
          return (
            <div>
              <HomeComponent />
              <Card carModel={data.CarOfTheWeek.model} />
              <p className="flow-text">{data.CarOfTheWeek.review}</p>
            </div>
          );
        }}
      </Query>
    );
  }
}

export const HomeComponent = () => {
  return (
    <Typography variant='display1' align='center' gutterBottom>
      Car Of The Week
    </Typography>
  );
};

export default Home;
