import { useState } from 'react';

function ProfileCard({ name, age, dream, emoji, hobby, mbti }) {
  const [likes, setLikes] = useState(0);
  const [소개보기, set소개보기] = useState(true);
  
  function handleLike() {
    setLikes(likes + 1);
  }

  function handleReset() {
    setLikes(0);
  }

  function 바뀌는거(){
    set소개보기(!소개보기)
  }


  return (
    <div style={{
      border: '4px solid #ed80b787',
      borderRadius: '16px',
      padding: '24px',
      width: '280px',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontSize: '48px' }}>{emoji}</div>
      <h2>{name}</h2>
      <p>나이: {age}세</p>
      <p>꿈: {dream}</p>
      <p>취미: {hobby} </p>
      <p>mbti: {mbti}</p>
      <div style={{ marginTop: '16px' }}>
        <p style={{ fontSize: '20px' }}>💕 {likes}</p>
        <button onClick={handleLike} style={{ marginRight: '8px' }}>+ 좋아요</button>
        <button onClick={handleReset}>초기화</button> <br/> <br/>
        <button onClick={바뀌는거}>소개보기</button>
        {바뀌는거 ? '' : '소개 보기'}
      </div> 
      {소개보기 && (
      <div style={{marginTop : '16px'}} >
       <p>안녕하세용 반가워요💓</p>
      </div>)}
       
    </div>
  );
}

export default ProfileCard;