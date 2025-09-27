import axios from "axios";

import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Image, Table, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { API_BASE_URL } from "../config/config";

function App({ user }) {
    const thStyle = { fontSize: '1.2rem' }; // 테이블 헤더 스타일 변수

    return (
        <>
            <Container className="mt-4">
                <h2 className="mb-4">
                    {/* xxrem은 주위 글꼴의 xx배를 의미합니다. */}
                    <span style={{ color: 'blue', fontSize: '2rem', fontWeight: 'bold' }}>{user?.name}</span>
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>님의 장바구니</span>
                </h2>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th style={thStyle}>
                                <Form.Check
                                    type="checkbox"
                                    label="전체 선택"
                                    onChange={``}
                                />
                            </th>
                            <th style={thStyle}>상품 정보</th>
                            <th style={thStyle}>수량</th>
                            <th style={thStyle}>금액</th>
                            <th style={thStyle}>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Form.Check
                                type="checkbox"
                                onChange={``}
                            /></td>
                            <td>xx</td>
                            <td>xx</td>
                            <td>xx</td>
                            <td>xx</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td><Form.Check
                                type="checkbox"
                                onChange={``}
                            /></td>
                            <td>xx</td>
                            <td>xx</td>
                            <td>xx</td>
                            <td>xx</td>
                        </tr>
                    </tbody>
                </Table>
                {/* 우측 정렬(text-end), 좌측 정렬(text-start), 가운데 정렬(text-center) */}
                <h3 className="text-end mt-3" style={{ fontWeight: 'bold' }}>총 주문 금액 : 0원</h3>
                <div className="text-end">
                    <Button variant="primary" size="lg" onClick={``}>
                        결재하기
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default App;