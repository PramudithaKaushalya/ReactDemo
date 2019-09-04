const create = (user) => {
  console.log("responses");
  return fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((response) => {
      console.log("response");
      return response.json();
    }).catch((err) => console.log(err))
}

const signin = (user) => {
 
    return fetch('/auth/signin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
  }

  export {
    create,
    signin
  }  