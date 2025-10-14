function TableHeader() {
    return (
        // responsible for render the table header with appropriate columns
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}

function TableBody() {
    // responsible for render the data for the table
    return (
        <tbody></tbody>
    )
}

function Table() {
    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    )
}

export default Table