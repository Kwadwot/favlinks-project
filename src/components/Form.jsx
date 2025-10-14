import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState("")
    const [URL, setURL] = useState("")
    
    const handleNameChange = (event) => {
       console.log(event.target.value)
       setName(event.target.value)
    }

    const handleURLChange = (event) => {
        console.log(event.target.value)
        setURL(event.target.value)
    }

    // const onFormSubmit = (event) => {
    //     // to prevent page reload on form submit
    //     event.preventDefault()

    //     /*
    //             TODO - Logic for calling props to handle submission and setting state changes
    //         */
    // }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log(name, URL)
            props.submitNewLink({name, URL})
        }}>
            <label htmlFor="linkName">Link name: </label>
            <input type="text" id="linkName" name="linkName" onChange={handleNameChange} />
            <br />
            <br />
            <label htmlFor="linkUrl">Link URL: </label>
            <input type="text" id="linkUrl" name="linkUrl" onChange={handleURLChange} />
            <br />
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form