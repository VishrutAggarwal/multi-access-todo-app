<a name="readme-top"></a>

<br />
<h1 align="center">Multi Access Todo App</h1>

<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>




<!-- ABOUT THE PROJECT -->
## About The Project

<br>

This project was made for an assignment by **TechDome Solutions**. The project is a todo backend API that has **multi-user access**. The users are divided into `user` and `admin`.

`user` can create, update, delete and get the todos created by them only. `admin` can perform all of the previously mentioned actions for all todos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILT WITH -->
### Built With

* [![Node][Node.js]][Node-url]

* [![Express][Express.js]][Express-url]

* [![Postman][Postman.com]][Postman-url]

* [![NeDB][Ne.db]][NeDB-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

<br>

### Prerequisites

These are some dependencies you will need
* npm
    ```sh
        npm install npm@latest -g
    ```
* Postman
    - Go to [this link](https://www.postman.com/downloads/).
    - Download and set up Postman.
    - Follow this [tutorial](https://www.youtube.com/watch?v=VywxIQ2ZXw4&t=1075s&pp=ygUQcG9zdG1hbiB0dXRvcmlhbA%3D%3D) to learn how to use Postman.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:VishrutAggarwal/multi-access-todo-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the Server
   ```sh
   node index.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- USAGE EXAMPLES -->
## Usage

This API can be tested conviniently using [Postman](https://www.postman.com/downloads/).

_For more examples, please refer to the [Documentation]()_

<br>




<!-- CONTACT -->
## Contact

Vishrut Aggarwal - [@AggarwalVishrut](https://twitter.com/AggarwalVishrut) - [Vishrut Aggarwal](https://linkedin.com/in/vishrut-aggarwal)

Profile Link: [https://github.com/VishrutAggarwal](https://github.com/VishrutAggarwal)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew

[Node.js]: https://img.shields.io/badge/Node-27B800?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org

[Ne.db]: Unavailable
[NeDB-url]: https://github.com/louischatriot/nedb

[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/

[Postman.com]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]: https://www.postman.com/product/what-is-postman/