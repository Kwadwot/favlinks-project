import { useState } from 'react'

const Form = (props) => {

    // const [name, setName] = useState("")
    // const [URL, setURL] = useState("")
    const [formData, setFormData] = useState({
        site_name: "",
        site_link: "",
        comic_type: "",
        popular_comic_name: "",
        popular_comic_link: ""
    });
    
    // const handleNameChange = (event) => {
    //    console.log(event.target.value)
    //    setName(event.target.value)
    // }

    // const handleURLChange = (event) => {
    //     console.log(event.target.value)
    //     setURL(event.target.value)
    // }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    };

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.submitNewLink(formData) // Fixed: removed the extra wrapping
        }}>
            <label>Site Name:</label>
            <input name="site_name" value={formData.site_name} onChange={handleChange} />
            <br /><br />
            <label>Site Link:</label>
            <input name="site_link" value={formData.site_link} onChange={handleChange} />
            <br /><br />
            <label>Comic Type:</label>
            <input name="comic_type" value={formData.comic_type} onChange={handleChange} />
            <br /><br />
            <label>Popular Comic Name:</label>
            <input name="popular_comic_name" value={formData.popular_comic_name} onChange={handleChange} />
            <br /><br />
            <label>Popular Comic Link:</label>
            <input name="popular_comic_link" value={formData.popular_comic_link} onChange={handleChange} />
            <br /><br />
            <input type="submit" value="Submit" />
            {/* <label>Site name: </label>
            <input type="text" id="linkName" name="linkName" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="linkUrl">Link URL: </label>
            <input type="text" id="linkUrl" name="linkUrl" onChange={handleChange} />
            <br />
            <br />
            <input type="submit" value="Submit" /> */}
        </form>
    )
}

export default Form