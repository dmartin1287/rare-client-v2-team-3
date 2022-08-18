import { useCallback, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { deleteComment, getCommentsByPostId, updateComment } from '../../managers/CommentManager' 
import { FaTrashAlt, FaUserCircle, FaEdit } from 'react-icons/fa';


export const CommentsList = ({ userId }) => {
  const [comments, setComments] = useState([])
  const { postId } = useParams()

  const loadComments = useCallback(() => {
    getCommentsByPostId(postId).then((commentsData) => {
      setComments(commentsData)
    })
  }, [postId])

  const navigate = useNavigate()
  
  useEffect(() => {
    loadComments()
  }, [loadComments])

  const handleDelete = (id) => {
    deleteComment(id).then(() => {
      loadComments()
    })
  }

  const handleGoBack = (event) => {
    event.preventDefault()
    navigate(`/posts/${postId}`)
  }

  return <section className="section">
    <article className="panel is-info">
      <p className="panel-heading">
        Comments
      </p>
      <button
                onClick={handleGoBack}
                className="button is-success">
                Back to Post
                </button>
      {
        comments?.map(comment => {
          return <div className="panel-block" key={comment.id}>
            <article className="media is-flex-grow-1">
              <figure className="media-left">
                <span className="icon is-large">
                  <FaUserCircle size={'3rem'} />
                </span>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{comment.author?.author.first_name} {comment.author?.author.last_name}</strong>
                    <br />
                    {comment.subject}
                    <br />
                    {comment.content}
                    <br />
                    {comment.datetime}
                  </p>
                </div>

              </div>
              {
                parseInt(userId) === comment.author.id ?
                  <div className="media-right">
                    <span  className="icon">
                      <FaEdit 
                            onClick={() => {
                                navigate( `/posts/${postId}/comments/${comment.id}/update`)
                        }}/>
                            </span>
                    
                    <span className="icon">
                      <FaTrashAlt onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(comment.id)}} />
                      
                    </span>
                  </div>
                  :
                  <></>
              }
            </article>
          </div>
        })
      }
    </article>
  </section>
}
