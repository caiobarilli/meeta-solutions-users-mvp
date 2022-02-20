# Users MVP - Meeta Solutions

Processo seletivo Meeta Solutions | Teste Prático Desenvolvedor Pleno

<br />

| Software       | Port |
| -------------- | ---- |
| **laravel**    | 80   |
| **mysql**      | 3306 |
| **reactjs**    | 3000 |

<br />

## Pré-requisitos

Para começar, certifique-se de ter o [Docker](https://docs.docker.com/) e também o [Docker Compose](https://docs.docker.com/compose/install/) no seu sistema.

<br />

## Download

Faça o download do projeto com o comando:

```sh
git clone git@github.com:caiobarilli/meeta-solutions-users-mvp.git
```

<br />

## Instalação

Para iniciar a instalação faça uma copia do arquivo ``.env.example`` para ``.env``

```sh
cp .env.example .env
```

Acesse a pasta e faça download das imagens e construa os containers com o comando:

```sh
docker-compose build
```

Suba a primera vez os containers com o comando:

```sh
docker-compose up -d
```

Agora acesse o container com o comando

```
docker exec -it meeta-solutions-users-mvp-teste.local-1 /bin/bash
```

Instale as dependencias do composer

```sh
composer install
```

Para gerar a chave da aplicação Laravel digite dentro do container

```sh
php artisan key:generate
```

Para criar o link simbólico da pasta storage utilize o comando Artisan:

```sh
php artisan storage:link
```

Certificar-se de que o diretório é gravável permita que www-data grave na pasta.

```sh
chown -R 1000:1000 /var/www/html/
```

Atribua a permissão 755 a pasta storage.

```sh
chmod -R 755 /var/www/html/storage/
```

Faça a migração do banco com o comando:

```sh
php artisan migrate --seed
```

Saia do container.

```
exit
```

Pare os containers.

```sh
docker-compose down
```

Tudo pronto! agora para iniciar digite o comando:

```sh
docker-compose up -d
```

acesse seu [navegador](http://localhost/) para vizualizar o projeto.
