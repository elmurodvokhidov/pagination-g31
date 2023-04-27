import Table from 'react-bootstrap/Table';

function DarkExample({ info }) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Other</th>
                </tr>
            </thead>
            <tbody>
                {info.map(a => (
                    <tr key={a.id}>
                        <td>{a.id}</td>
                        <td>{a.first_name}</td>
                        <td>{a.last_name}</td>
                        <td>{a.email}</td>
                        <td><button>See more</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default DarkExample;