// 이 파일은 설정용 파일입니다.
// http://localhost:9000

<<<<<<< HEAD
const API_HOST = "localhost"; // 호스트 컴퓨터 이름(127.0.0.1)

const API_PORT = "9000"; // 스프링 부트 포트 번호

// export 키워드를 적어 주셔야 외부에서 접근 가능합니다.
=======
const API_HOST = "localhost";  // 호스트 컴퓨터 이름(127.0.0.1)

const API_PORT = "8999"; // 스프링 부트 포트 번호

// export 키워드를 적어 주어야 외부에서 접근 가능합니다.
>>>>>>> ea918b2 (collabo_react)
export const API_BASE_URL = `http://${API_HOST}:${API_PORT}`;