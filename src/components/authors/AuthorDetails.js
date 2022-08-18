import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getSingleAuthor } from "../../managers/AuthorManager"
import { FaUserCircle } from 'react-icons/fa'

export const AuthorDetails = () => {
  const [author, setAuthor] = useState({})
  const { authorId } = useParams ()
  

  useEffect(() => {
    getSingleAuthor(authorId).then(authorData => setAuthor(authorData))
  }, [authorId])

  return <section className="section">
    <div className="card">
      <header className="card-header is-justify-content-center">
        <h2 className="title is-size-3 p-3 ">
          {author.author?.first_name} {author.author?.last_name}
        </h2>
      </header>
      <div className="card-image">
        <figure className="image">
          <img src={author.profile_image_url} alt={author.author?.first_name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <span className="icon is-large">
              <FaUserCircle size={'3rem'} />
            </span>
          </div>
          <div className="media-content">
            <p className="title is-4">{author.author?.first_name}</p>
            <p className="subtitle is-6">@{author.author?.username}</p>
          </div>
          <div className="media-content">
            <p className="title is-4">{author.author?.email}</p>
            <p className="title is-size-5">is staff: {author.author?.is_staff? 'true': 'false'}</p>
          </div>
        </div>

        <div className="content">
          {author.bio}
          <hr />
          <time >{author.author?.date_joined}</time>
        </div>
      </div>
      {/* <footer className="card-footer">
        <Link to={`/authors/${authorId}/comments`} className="card-footer-item">View Comments</Link>
        <Link to={`/authors/${authorId}/add-comment`} className="card-footer-item">Add Comments</Link>
        {
          parseInt(authorId) === author.user?.id ? <Link to={`/authors/${authorId}/edit`} className="card-footer-item">Edit</Link> : <></>
        }
      </footer> */}
    </div>
  </section>
}

