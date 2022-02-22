import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import LayoutDashboard from '@/Shared/LayoutDashboard';
import LoadingButton from '@/Shared/Form/LoadingButton';
import TextInput from '@/Shared/Form/TextInput';
import FileInput from '@/Shared/Form/FileInput';

const Create = () => {
  const { data, setData, errors, post, processing } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'user',
    remember_token: 'example',
    photo: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('users.store'));
  }

  return (
    <div className="p-3">
      <div className="col-lg-12">
        <h1 className="my-2">
          <InertiaLink href={route('users')} className="table">
            Usuários
          </InertiaLink>
          <span className="font-medium text-blue-100"> /</span> Criar Novo
        </h1>
      </div>

      <div className="col-lg-5">
        <div className="card shadow-lg border-0 rounded-lg mt-5">
          <div className="card-body">
            <form name="createForm" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <TextInput
                    className="form-floating mb-3 mb-md-0"
                    label="Nome"
                    name="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    errors={errors.first_name}
                    value={data.first_name}
                    onChange={e => setData('first_name', e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    className="form-floating"
                    placeholder="Enter your last name"
                    label="Sobrenome"
                    name="last_name"
                    type="text"
                    errors={errors.last_name}
                    value={data.last_name}
                    onChange={e => setData('last_name', e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <TextInput
                    className="form-floating mb-3"
                    placeholder="name@example.com"
                    label="Email"
                    name="email"
                    type="email"
                    errors={errors.email}
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12">
                  <TextInput
                    className="form-floating mb-3 mb-md-0"
                    label="Senha"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    errors={errors.password}
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <FileInput
                  className="col-md-3"
                  label="Imagem do perfil"
                  name="photo"
                  accept="image/*"
                  errors={errors.photo}
                  value={data.photo}
                  onChange={photo => setData('photo', photo)}
                />
              </div>
              <div className="mt-4 mb-0">
                <LoadingButton
                  loading={processing}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Criar Usuário
                </LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Create.layout = page => (
  <LayoutDashboard title="Criar novo Usuário" children={page} />
);

export default Create;
