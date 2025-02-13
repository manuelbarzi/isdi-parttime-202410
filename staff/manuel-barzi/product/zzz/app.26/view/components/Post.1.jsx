import './Post.css'

import logic from '../../logic'

import formatDate from '../helper/formatDate'

function Post(props) {
    const { post, onPostDeleted, onPostLikeToggled } = props

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

    console.log('Post -> render')

    return <article className="Post">
        <h3 className="Post-author">{post.author.username}</h3>
        <img className="Post-image" src={post.image} />
        <p className="Post-text">{post.text}</p>

        <div className="Post-bottom">
            <time className="Post-date">{formatDate(post.date)}</time>

            <button type="button" onClick={handleToggleLikeClick}>{`${post.liked ? '❤️' : '🩶'} (${post.likes})`}</button>

            {post.own && <button type="button" onClick={handleDeleteButtonClick}>🗑️</button>}
        </div>
    </article>
}

export default Post