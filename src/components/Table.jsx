import React from 'react'

function TableHeader() {
    return (
        // responsible for rendering the table header with appropriate columns
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    /* boilerplate table body functional component 
    responsible for rendering the data for the table */
    // using Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>
                    <a href={row.URL}>{row.URL}</a>
                </td>
                <td>
                    <button onClick={() => props.removeLink(index)}>Delete</button>
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
            <TableBody linkData={props.linkData} />
        </table>
    )
}

export default Table