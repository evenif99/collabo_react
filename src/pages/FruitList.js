import axios from "axios";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import { API_BASE_URL } from "../config/config";
import { Table } from "react-bootstrap";
=======
import { Table } from "react-bootstrap";
import { API_BASE_URL } from "../config/config";
>>>>>>> ea918b2 (collabo_react)

function App() {
    const [fruitList, setFruitList] = useState([]); // 넘어온 과일 목록

    useEffect(() => {
        const url = `${API_BASE_URL}/fruit/list`;

        axios
            .get(url, {})
            .then((response) => {
<<<<<<< HEAD
                // console.log(response.data);

=======
                //console.log(response.data);
>>>>>>> ea918b2 (collabo_react)
                setFruitList(response.data);
            });

    }, []);

    return (
        <>
            <Table hover style={{ margin: '5px' }}>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>상품명</th>
                        <th>단가</th>
                    </tr>
                </thead>
                <tbody>
                    {fruitList.map((fruit) =>
                        <tr key={fruit.id}>
                            <td>{fruit.id}</td>
                            <td>{fruit.name}</td>
<<<<<<< HEAD
                            <td>{Number(fruit.price).toLocaleString()}원</td>
                        </tr>
                    )}
                </tbody>
            </Table>
=======
                            <td>{Number(fruit.price).toLocaleString()} 원</td>
                        </tr>
                    )}
                </tbody>
            </Table >
>>>>>>> ea918b2 (collabo_react)
        </>
    );
}

export default App;