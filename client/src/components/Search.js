import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Select from './Select';
import query from '../queries/fetchCarMakes';
import '../style/style.css'

class Search extends Component {
  state = {
    selectedMake : '',
    selectedModel : '',
  };

  onSubmit(AllMakes) {
    const { selectedModel, selectedMake } = this.state;
    if ( selectedModel === '') return null;
    let carModels = AllMakes.find(make => make.name === selectedMake);
    let carModel = carModels.models.find(model => model.name === selectedModel);

    this.props.history.push({
      pathname: `/${selectedMake}/${selectedModel.replace(/ /g, '')}/${carModel.id}`,
    });
  }
  onChange(prop) {
    return e => {
      this.setState({
        [prop]: e.target.value
      });

      if (prop === "selectedMake") {
        this.setState({
          selectedModel: ''
        });
      }
    };
  } 
  modelOptionItems(AllMakes){
    const { selectedMake } = this.state;
    
    if( selectedMake === '') return '';

    let carModelOptions = AllMakes.find(make => make.name === selectedMake);
    return(carModelOptions.models.map((carModel) => <option key={carModel.name} value={carModel.name}>{carModel.name}</option>));
  } 
  render() {
    const { selectedModel } = this.state;
    // if(typeof(carMakes) === 'undefined' || !carMakes || !carModels) return null;
    let makeOptionItems = (carMakes) => carMakes.map((carMake) => <option key={carMake} value={carMake}>{carMake}</option>);
    
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Something went wrong. Please try again.</p>;

          return (
            <form onSubmit={() => {
              this.onSubmit(data.AllMakes)
            }}>
            <SearchComponent />
            <Select
              label="Manufacturer"
              onChange={this.onChange("selectedMake")}
              optionItems={makeOptionItems(data.AllMakes.map((obj) => obj.name))}
            />
            <Select
              label="Model"
              onChange={this.onChange("selectedModel")}
              optionItems={this.modelOptionItems(data.AllMakes)}
            />
            <button 
              className="btnSearch"
              disabled={selectedModel === ''}
            >
              Search
            </button>
          </form>    
          );
        }}
      </Query>
    );
  }
}

export const SearchComponent = () => {
  return <h5 className="header-message" style={{ textAlign: 'center' }}>Please select a car model</h5>;
};

export default Search;
