import React, { Component } from 'react';
import { getOwners } from '../services/ownersService';
import OwnersTable from '../components/OwnersTable';
class Owners extends Component {
  state = { owners: [], loading: true };
  async componentDidMount() {
    const { data } = await getOwners();
    this.setState({ owners: data, loading: false });
  }

  render() {
    const { owners, loading } = this.state;
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

    if (owners.length === 0) return <p>There are no owners in the database.</p>;

    return <OwnersTable owners={owners} />;
  }
}

export default Owners;
