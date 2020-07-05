import React, { Component } from 'react';
import { getMyPets } from '../services/ownersService';
import PetsTable from '../components/PetsTable';

class Owned extends Component {
  state = { pets: [], loading: true };

  async componentDidMount() {
    try {
      let ownerId = this.props.match.params.id;
      const { data } = await getMyPets(ownerId);
      this.setPetsInState(data);
    } catch (ex) {
      this.setState({ loading: false });
      if (ex.response && ex.response.status === 404)
        this.props.history.replace('/not-found');
    }
  }
  setPetsInState = (data) => {
    let pets = [];
    data.forEach((obj) => {
      pets.push(obj.pet);
    });
    this.setState({ pets, loading: false });
  };

  render() {
    const { pets, loading } = this.state;

    if (loading === true)
      return (
        <div
          class="spinner-border text-dark"
          role="status"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
          }}
        >
          <span class="sr-only">Loading...</span>
        </div>
      );

    if (pets.length === 0) return <p>No Pets Yet.</p>;

    return <PetsTable pets={pets} showButtons={false} />;
  }
}

export default Owned;
