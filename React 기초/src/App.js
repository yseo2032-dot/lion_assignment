// src/App.js

// ProfileCard.jsx 파일에서 불러오기
import ProfileCard from './ProfileCard';

// 부모 컴포넌트 — ProfileCard를 import해서 사용만 해요
function App() {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '60px',
      flexWrap: 'wrap'
    }}>
      <ProfileCard name="정윤서" age={21} dream="부자" emoji="🐹" hobby="자기" mbti="ENFP" />
    </div>
  );
}

export default App;