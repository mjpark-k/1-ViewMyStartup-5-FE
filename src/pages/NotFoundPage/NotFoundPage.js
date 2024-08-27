import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';
import notFoundImg from '../../images/not-found.png';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const goBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-container">
      <img className="not-found-img" src={notFoundImg} />
      <div className="not-found-text">페이지를 찾을 수 없습니다.</div>
      <button className="go-back-button" onClick={goBackClick}>
        이전 페이지로
      </button>
    </div>
  );
}