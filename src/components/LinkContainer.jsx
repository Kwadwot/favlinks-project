import { useState } from 'react'
import Table from './Table'
import Form from './Form'

const LinkContainer = (props) => {

    const [favLinks, setFavLinks] = useState([])
    const handleRemove = (index) => {

    }

    const handleSubmit = (favlink) => {
        setFavLinks([...favLinks, favlink])
    }

    return (
      <div>
        <h1>Favorite Links</h1>
        <p>Add a new link with a name and URL to the table.</p>
        <Table linkData={favLinks} />

        <h3>Add New</h3>
        <Form submitNewLink={handleSubmit}/>
      </div>
    )
  }
  
  export default LinkContainer