import { useEffect, useState } from 'react';
import { getListTopic } from '../../services/topicService';
import { Link } from 'react-router-dom';

function Topic() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getListTopic();
            setData(res);
        }
        fetchApi();
    }, [])

    return (

        <>
            <h3>Danh sach cac chu de</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Topic</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><Link to={'/quiz/'+item.id}>Lam bai</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Topic;