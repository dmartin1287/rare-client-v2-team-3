import { useEffect, useState } from "react"
import { getAllAuthors } from "../../managers/AuthorManager"
import { AuthorsTable } from "./AuthorsTable"


export const AuthorList = () => {
  const [authors, setAuthors] = useState([])

  const loadAuthors = () => getAllAuthors().then(data => setAuthors(data))

  useEffect(() => {
    loadAuthors()
  }, [])

  return <section className="section">
    <article className="panel is-info">
      <p className="panel-heading">
        Authors
      </p>

      <div className="panel-block">
        <AuthorsTable authors={authors} />
      </div>
    </article>
  </section>
}