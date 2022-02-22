import React from 'react';
import { usePage, InertiaLink } from '@inertiajs/inertia-react';
import LayoutDashboard from '@/Shared/LayoutDashboard';
import Datatable from '@/Shared/UI/Datatable';

const Index = () => {
  const { users } = usePage().props;

  return (
    <div className="p-3">
      <h1 className="my-2">
        Usuários /
        <InertiaLink className="mx-2 table" href={route('users.create')}>
          Criar Novo
        </InertiaLink>
      </h1>
      <Datatable data={users} />
    </div>
  );
};

Index.layout = page => <LayoutDashboard title="Usuários" children={page} />;

export default Index;
