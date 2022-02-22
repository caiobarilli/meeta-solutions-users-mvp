import React from 'react';
import Helmet from 'react-helmet';
import { useForm } from '@inertiajs/inertia-react';
import LoadingButton from '@/Shared/Form/LoadingButton';
import Header from '@/Shared/UI/Header';

export default () => {
  const { data, setData, errors, post, processing } = useForm({
    email: 'contato@meetasolutions.com',
    password: 'secret',
    remember: true
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  return (
    <>
      <Helmet title="Login" />
      <Header />
      <section>
        <div className="container">
          <div className="row justify-content-center  align-items-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header">
                  <h3 className=" my-4">
                    <strong>ACESSAR MVP</strong>
                  </h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        label="E-mail"
                        name="email"
                        type="email"
                        errors={errors.email}
                        value={data.email}
                        onChange={e => setData('email', e.target.value)}
                        className="form-control"
                      />
                      <label htmlFor="inputEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        label="Senha"
                        name="password"
                        type="password"
                        errors={errors.password}
                        value={data.password}
                        onChange={e => setData('password', e.target.value)}
                      />
                      <label htmlFor="inputPassword">Senha</label>
                    </div>

                    <div className="form-check mb-3">
                      <input
                        name="remember"
                        id="inputRememberPassword"
                        className="form-check-input"
                        type="checkbox"
                        checked={data.remember}
                        onChange={e => setData('remember', e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inputRememberPassword"
                      >
                        Lembrar senha?
                      </label>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <LoadingButton
                        type="submit"
                        loading={processing}
                        className="btn btn-purple position-relative"
                      >
                        Entrar
                      </LoadingButton>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center py-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
