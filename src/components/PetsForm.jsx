import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getPet, savePet } from '../services/petsService';

class PetsForm extends Form {
  state = {
    data: {
      name: '',
      colour: '',
      age: '',
      breed: '',
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label('Name'),
    colour: Joi.string().required().label('Colour'),
    age: Joi.number().required().min(0).max(100).label('Age'),
    breed: Joi.string().required().min(0).max(10).label('Breed'),
  };

  async populatePet() {
    try {
      const petId = this.props.match.params.id;
      if (petId === 'new') return;
      const { data } = await getPet(petId);
      this.setState({ data: this.mapToViewModel(data) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace('/not-found');
    }
  }
  async componentDidMount() {
    await this.populatePet();
  }

  mapToViewModel(pet) {
    return {
      _id: pet._id,
      name: pet.name,
      colour: pet.colour,
      age: pet.age,
      breed: pet.breed,
    };
  }

  doSubmit = async () => {
    await savePet(this.state.data);
    this.props.history.push('/pets');
  };

  render() {
    return (
      <div>
        <h1>Pets Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('name', 'Name')}
          {this.renderInput('colour', 'Colour')}
          {this.renderInput('age', 'Age')}
          {this.renderInput('breed', 'Breed')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default PetsForm;
