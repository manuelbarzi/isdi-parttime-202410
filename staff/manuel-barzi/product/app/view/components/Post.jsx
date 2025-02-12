import { useState } from 'react'

import './Post.css'

import logic from '../../logic'

import formatDate from '../helper/formatDate'

function Post({ post, onPostDeleted, onPostLikeToggled, onPostTextEdited }) {
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(post.text)

    const handleDeleteButtonClick = () => {
        if (confirm('Delete post?'))
            try {
                logic.deletePost(post.id)
                    .then(() => onPostDeleted())
                    .catch(error => {
                        alert(error.message)

                        console.error(error)
                    })
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
    }

    const handleToggleLikeClick = () => {
        try {
            logic.toggleLikePost(post.id)
                .then(() => onPostLikeToggled())
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleEditButtonClick = () => setEdit(true)

    const handleCancelEditButtonClick = () => {
        setEdit(false)
        setText(post.text)
    }

    const handlePostTextChange = event => setText(event.target.value)

    const handleSaveEditButtonClick = () => {
        setEdit(false)

        try {
            logic.updatePostText(post.id, text)
                .then(() => onPostTextEdited())
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    console.log('Post -> render')

    return <article className="Post">
        <h3 className="Post-author">{post.author.username}</h3>

        <img className="Post-image" src={post.image} />

        {edit ?
            <input className="Post-text" onChange={handlePostTextChange} defaultValue={text} />
            :
            <p className="Post-text">{text}</p>
        }

        <div className="Post-bottom">
            <time className="Post-date">{formatDate(post.date)}</time>

            <button type="button" onClick={handleToggleLikeClick}>{`${post.liked ? '❤️' : '🩶'} (${post.likes})`}</button>

            {post.own && <>
                {edit ?
                    <div>< button type="button" onClick={handleSaveEditButtonClick}>💾</button><button type="button" onClick={handleCancelEditButtonClick}>❌</button></div>
                    :
                    <button type="button" onClick={handleEditButtonClick}>📝</button>
                }
            </>}

            {post.own && <button type="button" onClick={handleDeleteButtonClick}>🗑️</button>}
        </div>
    </article>
}

export default Post