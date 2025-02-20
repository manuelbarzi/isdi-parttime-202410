import { useState } from 'react'

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

    return <article className="border border-greenyellow p-1">
        <h3>{post.author.username}</h3>

        <img src={post.image} />

        {edit ?
            <input className="input w-full" onChange={handlePostTextChange} defaultValue={text} />
            :
            <p>{text}</p>
        }

        <div className="flex items-center justify-between">
            <time className="text-[10px] text-yellowgreen">{formatDate(post.date)}</time>

            <button className="button" type="button" onClick={handleToggleLikeClick}>{`${post.liked ? '❤️' : '🩶'} (${post.likes})`}</button>

            {post.own && <>
                {edit ?
                    <div>
                        <button className="button" type="button" onClick={handleSaveEditButtonClick}>💾</button><button className="button" type="button" onClick={handleCancelEditButtonClick}>❌</button></div>
                    :
                    <button className="button" type="button" onClick={handleEditButtonClick}>📝</button>
                }
            </>}

            {post.own && <button className="button" type="button" onClick={handleDeleteButtonClick}>🗑️</button>}
        </div>
    </article>
}

export default Post