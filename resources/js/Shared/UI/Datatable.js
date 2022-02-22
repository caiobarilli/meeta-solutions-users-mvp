import React from 'react';

import { InertiaLink } from '@inertiajs/inertia-react';
import { MDBDataTableV5 } from 'mdbreact';
import { formatDate } from '@/utils';

export default ({ data }) => {
  let rows = [];
  let cols = [
    {
      label: 'Nome',
      field: 'name',
      width: 150,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Name'
      }
    },
    {
      label: 'Email',
      field: 'email',
      width: 270
    },
    {
      label: 'Cargo',
      field: 'role',
      width: 200
    },
    {
      label: 'Criado em',
      field: 'created_at',
      sort: 'disabled',
      width: 150
    },
    {
      label: 'Ações',
      field: 'edit_link',
      sort: 'disabled',
      width: 100
    }
  ];

  data.map(({ id, name, photo, email, role, created_at, deleted_at }) => {
    rows = [
      ...rows,
      {
        name: name,
        email: email,
        role: role,
        created_at: formatDate(created_at),
        edit_link: (
          <InertiaLink className="btn btn-blue" href={route('users.edit', id)}>
            Editar
          </InertiaLink>
        )
      }
    ];
  });

  const datatable = {
    columns: cols,
    rows: rows
  };

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
    />
  );
};
