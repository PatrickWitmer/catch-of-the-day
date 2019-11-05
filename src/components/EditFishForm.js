import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {

  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    deleteFish: PropTypes.func,
    updatedFish: PropTypes.func,
    index: PropTypes.string
  }

  handleChange = (event) => {
    console.log(event.currentTarget.value);
    //Update that Fish
    //1. Take a copy of that current fish
    const updatedFish = { 
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value 
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return <div className="fish-edit">
      <input 
        type="text" 
        name="name" 
        onChange={this.handleChange} 
        value={this.props.fish.name} />
      <input 
        type="text" 
        name="price" 
        onChange={this.handleChange} 
        value={this.props.fish.price} />
      <select 
        type="text" 
        name="status" 
        onChange={this.handleChange} 
        value={this.props.fish.status} >
        <option onChange={this.handleChange} value="available">Fresh!</option>
        <option onChange={this.handleChange} value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
      <input 
        type="text" 
        name="image" 
        onChange={this.handleChange} 
        value={this.props.fish.image}
      />

        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
    </div>
  }
}

export default EditFishForm;