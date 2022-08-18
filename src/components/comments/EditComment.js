import { saveNewComment, updateComment, getSingleComment } from "../../managers/CommentManager"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const EditComment = () => {
    const { commentId, postId } = useParams()
    const navigate = useNavigate()

    const [comment, setComment] = useState({
        post_id: postId,
        content: ""
    })

    const handleSave = (event) => {
        event.preventDefault()
        updateComment(comment)
        .then(() => navigate(`/posts/${postId}/comments`))
    }

    const handleCancel = (event) => {
        event.preventDefault()
        navigate(`/posts/${postId}/comments`)
    }

    const handleUpdate = (evt) => {
        const copy = { ...comment }
        copy[evt.target.name] = evt.target.value
        setComment(copy)
    }

    useEffect(() => {
        getSingleComment(commentId).then(data => {
        setComment(data)
        })
    }, [commentId])

    return (

    <section className="section">
        <div className="card">
        <div className="card-content">
            <div className="field">
            <label className="label">Subject</label>
            <div className="control">
                <input className="input" required autoFocus
                name="subject"
                type="text"
                value={comment.subject}
                onChange={handleUpdate } />
            </div>
            <label className="label">Comment</label>
            <input className="input" required 
                name="content"
                type="text"
                value={comment.content}
                onChange={handleUpdate } />
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button
                onClick={handleSave}
                className="button is-success">
                Save
                </button>
                </div>
                <button
                onClick={handleCancel}
                className="button is-success">
                Cancel
                </button>
            </div>
        </div>
        </div>
    </section>
    )
}