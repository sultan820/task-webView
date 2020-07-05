import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPets } from '../services/petsService';
import PetsTable from '../components/PetsTable';
class Pets extends Component {
  state = { pets: [], loading: true };

  async componentDidMount() {
    const { data } = await getPets();

    this.setState({ pets: data, loading: false });
  }

  render() {
    const { pets, loading } = this.state;

    if (loading === true)
      return (
        <div
          className="spinner-border text-dark"
          role="status"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
          }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      );

    if (pets.length === 0) return <p>There are no Pets in the database.</p>;

    return (
      <div className="row">
        <div className="col">
          <Link
            to="/pets/new"
            className="btn btn-primary"
            style={{ marginBottom: 20, marginTop: 20 }}
          >
            New Pet
          </Link>

          <PetsTable pets={pets} showButtons={true} />
        </div>
      </div>
    );
  }
}

export default Pets;
