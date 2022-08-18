export const getAllAuthors = () => {
    return fetch("http://localhost:8000/authors", {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    }).then(res => res.json())
  }

  export const getSingleAuthor = id => {
    return fetch(`http://localhost:8000/authors/${id}`, {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    })
      .then(res => res.json())
  }