import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from './common/table';

class PetsTable extends Component {
  columns = [
    { path: 'name', label: 'Name' },
    { path: 'colour', label: 'Colour' },
    { path: 'age', label: 'Age' },
    { path: 'breed', label: 'Breed' },
  ];
  buttons = [
    {
      key: 'Edit',
      content: (pet) => (
        <Link to={`/pets/${pet._id}`} className="btn btn-info">
          Edit
        </Link>
      ),
    },
  ];

  render() {
    const { pets, showButtons } = this.props;
    if (showButtons === true) {
      this.columns = [...this.columns, ...this.buttons];
    }

    return <Table columns={this.columns} data={pets} />;
  }
}

export default PetsTable;
