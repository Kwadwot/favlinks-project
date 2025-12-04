import React from 'react'

function TableHeader() {
    return (
        // responsible for rendering the table header with appropriate columns
        <thead>
            <tr>
                <th>Site Name</th>
                <th>Site Link</th>
                <th>Comic Type</th>
                <th>Popular Comic</th>
                <th>Popular Comic Link</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    /* boilerplate table body functional component 
    responsible for rendering the data for the table */
    // using Array.map to create table rows from LinkData passed via props
    // Using row.id as the key
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={row.id || index}>
                <td>{row.site_name}</td>
                <td>
                    <a href={row.site_link}>{row.site_link}</a>
                </td>
                <td>{row.comic_type}</td>
                <td>{row.popular_comic_name}</td>
                <td>
                {row.popular_comic_link ? (
                    <a href={row.popular_comic_link}>{row.popular_comic_link}</a>
                ) : ""}
                </td>
                <td>
                    <button onClick={() => props.removeLink(row.id)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

const Table = (props) => {
    return (
        <table>
            <TableHeader />
            <TableBody linkData={props.linkData} removeLink={props.removeLink} />
        </table>
    )
}

export default Table