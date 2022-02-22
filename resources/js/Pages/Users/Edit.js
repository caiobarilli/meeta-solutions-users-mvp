import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import LayoutDashboard from '@/Shared/LayoutDashboard';
import DeleteButton from '@/Shared/Form/DeleteButton';
import LoadingButton from '@/Shared/Form/LoadingButton';
import TextInput from '@/Shared/Form/TextInput';
import SelectInput from '@/Shared/Form/SelectInput';
import FileInput from '@/Shared/Form/FileInput';
import TrashedMessage from '@/Shared/Form/TrashedMessage';

const Edit = () => {
  const { user, auth } = usePage().props;
  const { data, setData, errors, post, processing } = useForm({
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    email: user.email || '',
    password: user.password || '',
    owner: user.owner ? '1' : '0' || '0',
    role: user.role,
    photo: '',

    // NOTE: When working with Laravel PUT/PATCH requests and FormData
    // you SHOULD send POST request and fake the PUT request like this.
    _method: 'PUT'
  });

  function handleSubmit(e) {
    e.preventDefault();

    // NOTE: We are using POST method here, not PUT/PACH. See comment above.
    post(route('users.update', user.id));
  }

  function destroy() {
    if (confirm('Tem certeza de que deseja apagar esse usuário?')) {
      Inertia.delete(route('users.destroy', user.id));
    }
  }

  function restore() {
    if (confirm('Tem certeza de que deseja recuperar esse usuário?')) {
      Inertia.put(route('users.restore', user.id));
    }
  }

  const show_component = auth.user.role === 'owner';

  return (
    <div className="p-3">
      <div className="col-lg-12">
        <Helmet title={`${data.first_name} ${data.last_name}`} />

        <div className="my-2">
          <h1>
            {show_component && (
              <>
                <InertiaLink className="table" href={route('users')}>
                  Usuários
                </InertiaLink>
                <span className=" mx-2"> /</span>
              </>
            )}
            {user.photo && (
              <img
                className="rounded-circle me-2"
                height="40"
                width="40"
                src={user.photo}
              />
            )}
            {data.first_name} {data.last_name}
          </h1>
        </div>
        {user.deleted_at && (
          <TrashedMessage onRestore={restore}>
            Esse usuário foi apagado.
          </TrashedMessage>
        )}
      </div>

      <div className="col-lg-5">
        <div className="card shadow-lg border-0 rounded-lg mt-5">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
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

              <div className="row mb-3">
                <div className="col-md-12">
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
              </div>
              <div className="row mb-3">
                <div className="col-md-12">
                  <TextInput
                    className="form-floating"
                    label="Sobrenome"
                    name="last_name"
                    errors={errors.last_name}
                    value={data.last_name}
                    onChange={e => setData('last_name', e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-12">
                  <TextInput
                    className="form-floating"
                    label="E-mail"
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
                    className="form-floating"
                    label="Senha"
                    name="password"
                    type="password"
                    errors={errors.password}
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                  />
                </div>
              </div>

              {show_component && (
                <div className="row mb-3">
                  <div className="col-md-12">
                    <SelectInput
                      className="form-floating"
                      label="Cargo"
                      name="owner"
                      errors={errors.role}
                      value={data.role}
                      onChange={e => setData('role', e.target.value)}
                    >
                      <option value="owner">Adminstrador</option>
                      <option value="user">Usuário</option>
                    </SelectInput>
                  </div>
                </div>
              )}

              <div className="mt-4 mb-0">
                {show_component && (
                  <DeleteButton className="btn btn-danger" onDelete={destroy}>
                    Apagar Usuário
                  </DeleteButton>
                )}
                <LoadingButton
                  loading={processing}
                  type="submit"
                  className="btn btn-blue"
                >
                  Atualizar
                </LoadingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Edit.layout = page => <LayoutDashboard children={page} />;

export default Edit;
