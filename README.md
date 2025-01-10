<h1 align="center" style="font-weight: bold;">Encurtador de URL 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
    <b>This project is used to study about backend. The idea is to encode urls and set a expiration date</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- MongoDB
- NodeJS
- Fastify
- Typescript

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

- NodeJS
- MongoDB

<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/Campos1911/encurtadorUrl
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` with your mongodb url

```yaml
DATABASE_URL={YOUR_MONGODB_DATABASE_URL}
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm run dev
```

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route | description  
|----------------------|-----------------------------------------------------
| <kbd>POST /encurtar </kbd> | encode the url and save a expiration date. [see response details](#encode-url-details)
| <kbd>GET /{urlEncurtada}</kbd> | get the encoded website [see request details](#get-encoded-url)

<h3 id="encode-url-details">ENCODE URL</h3>

**REQUEST**

```json
{
  "urlAntiga": "https://google.com.br",
  "expiresIn": 1
}
```

**RESPONSE**

```json
{
  "url": "http://localhost:3333/1530015"
}
```

<h3 id="encode-url-details">ACCESS ENCODED</h3>

**RESPONSE**

```json
html website
```

<h2 id="colab">🤝 Developers </h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/119754605?s=96&v=4" width="100px;" alt="Anthoni Campos Profile Picture"/><br>
        <sub>
          <b>Anthoni Campos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
