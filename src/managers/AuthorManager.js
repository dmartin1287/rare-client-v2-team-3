export const getAllAuthors = () => {
    return fetch("http://localhost:8000/authors", {
      headers: {
        'Authorization': `Token ${localStorage.getItem('auth_token')}`
      }
    }).then(res => res.json())
  }