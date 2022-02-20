import React from 'react';
import LayoutSite from '@/Shared/LayoutSite';
import { InertiaLink } from '@inertiajs/inertia-react';

const Index = () => {
  return (
    <>
      <section id="about">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>MVP Cadastro de usuários</h2>
              <p className="lead">
                O projeto segue as seguintes orientações exigidas para
                realização do teste prático:
              </p>
              <ul>
                <li>
                  Criar um projeto chamado "teste" em Laravel 8 rodando com PHP
                  7.4
                </li>
                <li>
                  Subir esse projeto no repositório de fontes
                  (https://github.com/) na branch master
                </li>
                <li>
                  Criar a tabela de usuários via migrate do Laravel 8 no MySql
                  (com timestamps)
                </li>
                <li>Criar um CRUD de usuário usando bootstrap e datatables</li>
                <li>
                  Criar uma rota de acesso a lista de usuários, exemplo:
                  http://teste.local/usuarios/lista
                </li>
                <li>
                  Criar uma branch chamada "teste", fazer o commmit e push do
                  CRUD de usuário nesta branch e depois criar um pull request
                  com a branch master
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light" id="services">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Como acessar</h2>
              <p className="lead">
                Para acessar o teste prático, realize o login
                <InertiaLink className="inline mx-1" href={route('login')}>
                  clicando aqui
                </InertiaLink>
                e depois acesse no menu lateral o link de acesso a listagem de
                usuários, ou
                <InertiaLink className="inline mx-1" href={route('dashboard')}>
                  clique aqui
                </InertiaLink>
                e seja redirecionado após o login. Caso queira entrar em contato
                ou retirar alguma dúvida, estou disponível.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <LayoutSite title="Acessar MVP" children={page} />;

export default Index;
