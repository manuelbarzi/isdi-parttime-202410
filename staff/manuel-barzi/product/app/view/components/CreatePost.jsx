import logic from '../../logic'

function CreatePost({ onPostCreated, onCancel }) {
    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => onPostCreated())
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleCancelButtonClick = () => onCancel()

    console.log('CreatePost -> render')

    return <main>
        <h3>Create Post</h3>

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="image">Image</label>
            <input type="url" id="image" />

            <label htmlFor="text">Text</label>
            <input type="text" id="text" />

            <button type="submit">Create</button>
        </form>

        <button className="invert w-full mt-5" onClick={handleCancelButtonClick}>Cancel</button>
    </main>
}

export default CreatePost