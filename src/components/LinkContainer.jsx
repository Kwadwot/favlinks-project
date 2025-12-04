import { useState, useEffect } from 'react'
import Table from './Table'
import Form from './Form'

const LinkContainer = (props) => {

    const [sites, setSites] = useState([])

    // GET /sites on load
    const getSites = async () => {
      try {
          const response = await fetch('/sites');
          const data = await response.json();
          setSites(data);
      } catch (error) {
          console.error(error);
      }
    };

    // POST /sites
    const postSite = async (newSite) => {
      try {
        let response = await fetch('/sites', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newSite)
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(response);
        let saved = await response.json();
        console.log('Site created:', saved);

         // update table with new record
        setSites(prev => [...prev, saved]);
      } catch (error) {
        console.error('Error creating site:', error);
      }
    }

    useEffect(() => {
      getSites();
    }, []);

    // const handleRemove = (index) => {
    //   console.log('Removing index:', index);
    //   setFavLinks(prevLinks => prevLinks.filter((_, i) => i !== index));
    // }

    const handleRemove = async (id) => {
      try {
        const response = await fetch(`/sites/${id}`, { method: 'DELETE' })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        setSites(prev => prev.filter(site => site.id !== id)) // Now correctly compares IDs
      } catch (err) {
        console.error(err)
      }
    }

    const handleSubmit = (newSite) => {
        postSite(newSite);
    }

    return (
      <div>
        <h1>Favorite Webcomic Sites</h1>
        <p>Add webcomic readers plus their most popular comic.</p>
        <Table linkData={sites} removeLink={handleRemove} />

        <h3>Add New Site</h3>
        <Form submitNewLink={handleSubmit}/>
      </div>
    )
  }
  
  export default LinkContainer