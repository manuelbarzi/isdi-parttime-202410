const { useState, useEffect } = React

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log('Posts -> "componentDidMount" (useEffect)')

        try {
            logic.getPosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }, [])

    console.log('Posts -> render')

    return <section>
        {posts.map(post =>
            <Post key={post.id} post={post} onPostDeleted={() => {
                try {
                    logic.getPosts()
                        .then(posts => setPosts(posts))
                        .catch(error => {
                            alert(error.message)

                            console.error(error)
                        })
                } catch (error) {
                    alert(error.message)

                    console.error(error)
                }
            }} />
        )}
    </section>
}