import { Link, useNavigate } from "react-router-dom"

export const AuthorsTable = ({ authors, deleteClickEvent }) => {
  let navigate = useNavigate()

  return <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>User Name</th>
        <th>Admin</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        authors.map(author => {
          return <tr key={author.id}>
            <td><Link to={`/authors/${author.author.id}`}>{author.author.first_name}{author.author.last_name}</Link></td>
            <td>{author.author.username}</td>
            <td>{author?.author.is_staff?"true":"false"}</td>
            {/* <td>
              {
                deleteClickEvent ?
                  <div className="buttons">
                    <button className="button is-warning" onClick={() => navigate(`/posts/${author.id}/edit`)}>edit</button>
                    <button className="button is-danger" onClick={() => { deleteClickEvent(author.id) }}>delete</button>
                  </div> : <></>
              }
            </td> */}
          </tr>
        })
      }
    </tbody>
  </table>
}
