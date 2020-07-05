import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';

class OwnersTable extends Component {
  columns = [
    { path: 'name', label: 'Name' },
    { path: 'address', label: 'Address' },
    { path: 'phone', label: 'Phone' },
    { path: 'email', label: 'E-mail' },
    {
      key: 'Show',
      content: (owner) => (
        <Link to={`/owners/${owner._id}`} className="btn btn-info">
          Show Pets
        </Link>
      ),
    },
  ];

  render() {
    const { owners } = this.props;

    return <Table columns={this.columns} data={owners} />;
  }
}

export default OwnersTable;
