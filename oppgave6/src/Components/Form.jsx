const Form = () => {

    return (
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"/>
            <label htmlFor="content">Content</label>
            <input type="textArea" id="content" name="content" />
        </form>
    )
}

export default Form; 