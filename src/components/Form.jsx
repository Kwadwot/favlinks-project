function Form() {
    return (
        <form>
            <label for="linkName">Link name:</label>
            <input type="text" id="linkName" name="linkName" value="John"/>
            <br/>
            <br/>
            <label for="linkUrl">Link URL:</label>
            <input type="text" id="linkUrl" name="linkUrl" value="Doe"/>
            <br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form