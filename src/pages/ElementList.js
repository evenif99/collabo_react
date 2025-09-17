import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/config";
import { Table } from "react-bootstrap";

function App() {
    const [elementList, setElementList] = useState([]); // 넘어온 과일 목록

    useEffect(() => {
        const url = `${API_BASE_URL}/element/list`;

        axios
            .get(url, {})
            .then((response) => {
                // console.log(response.data);

                setElementList(response.data);
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
                        <th>카테고리</th>
                        <th>수량</th>
                        <th>이미지</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    {elementList.map((fruit) =>
                        <tr key={fruit.id}>
                            <td>{fruit.id}</td>
                            <td>{fruit.name}</td>
                            <td>{Number(fruit.price).toLocaleString()}원</td>
                            <td>{fruit.category}</td>
                            <td>{Number(fruit.stock).toLocaleString()}</td>
                            <td>{fruit.image}</td>
                            <td>{fruit.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default App;