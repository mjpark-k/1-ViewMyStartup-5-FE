import { useNavigate } from "react-router-dom";
import styles from "./StartupList.module.css";

function StartupList({ startupData }) {
  const navigate = useNavigate();

  const pathDetail = (id) => {
    navigate(`/company/${id}`);
  };
  return (
    <div className={styles.inner}>
      <ul className={styles.th}>
        <li>순위</li>
        <li>기업 명</li>
        <li>기업 소개</li>
        <li>카테고리</li>
        <li>누적 투자 금액</li>
        <li>매출액</li>
        <li>고용 인원</li>
      </ul>
      {startupData.map((startup, index) => (
        <ul key={index} className={styles.list}>
          <li>{startup.rank}</li>
          <li
            onClick={() => {
              pathDetail(startup.id);
            }}
          >
            <img src={startup.image} alt="그룹 이미지" />
            {startup.name}
          </li>
          <li>{startup.description}</li>
          <li>{startup.category}</li>
          <li>{startup.actualInvest}</li>
          <li>{startup.revenue}</li>
          <li>{startup.employees}</li>
        </ul>
      ))}
    </div>
  );
}

export default StartupList;
