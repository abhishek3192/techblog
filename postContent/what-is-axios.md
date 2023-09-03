---
title: "What is Axios ?"
date: "2023-09-02"
image: "what-is-axios.png"
excerpt: "Axios is a promised-based HTTP client for JavaScript."
isFeatured: true
---

Axios is an HTTP library that makes it easy to send HTTP requests and handle responses in web applications. It provides a simple and intuitive API to perform common HTTP operations like **GET**, **POST**, **PUT** and **DELETE**.

Axios can be easily configured to work with a wide range of REST/GraphQL APIs.

## Get Started with Axios

You can install Axios in your project using npm and yarn.

```js
# using npm
npm install axios

# using yarn
yarn add axios
```

## Make HTTP Request (GET)

We can use Axios to request API endpoints with different HTTP methods like GET, POST, PUT etc.

```js
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

axios
  .get(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Make HTTP Request (GET) with params and headers

```js
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

axios
  .get(url, {
    params: {
      id: 1,
    },
    headers: {
      "x-access-token": "token-value",
    },
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

And this is also equivalent:

```js
axios.get("https://jsonplaceholder.typicode.com/posts/?id=1");
```

## Make HTTP Request (POST)

Axios can take an object as its second parameter. This object is the request body that we send along the API call.

```js
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
axios
  .post(url, {
    title: "New Post",
    body: "This is a New post",
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Make HTTP Request (POST) with headers

```js
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
axios
  .post(
    url,
    {
      title: "New Post",
      body: "This is a New post",
    },
    {
      headers: {
        "x-access-token": "token-value",
      },
    }
  )
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## Make HTTP Requet (PUT)

Axios PUT requests are HTTP requests that Updates a specific attributes in our case post with the post ID of 1.

```js
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
axios
    .put(url, {
        title: 'New Post',
        body: 'This is a New post',
    })
    .then((res) => res.json())
    .then((data) => console.log('Post Updated Successfully')
    .catch((err) => console.log(err))
```

## Make HTTP Requet (PUT) with headers

```js
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
axios
    .put(url,
    {
        title: 'New Post',
        body: 'This is a New post',
    },
    {
      headers: {
        "x-access-token": "token-value",
      },
    }
    )
    .then((res) => res.json())
    .then((data) => console.log('Post Updated Successfully')
    .catch((err) => console.log(err))
```

## Make HTTP Requet (DELETE)

Axios DELETE requests are HTTP requests that delete a specific Post identified by a URL.

```js
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
axios
    .delete(url)
    .then((res) => res.json())
    .then((data) => console.log('Post Deleted Successfully')
    .catch((err) => console.log(err))
```

## Make HTTP Requet (DELETE) with headers

```js
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';
axios
    .delete(url, {
      headers: {
        "x-access-token": "token-value",
      },
    })
    .then((res) => res.json())
    .then((data) => console.log('Post Deleted Successfully')
    .catch((err) => console.log(err))
```

Learn more about it [here](https://axios-http.com/docs/intro).
