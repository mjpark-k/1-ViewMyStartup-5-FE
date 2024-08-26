import groupImage from "../../../images/logo-img.svg";
import styles from "./InvestList.module.css";

function InvestList({ startupData }) {
  return (
    <div className={styles.inner}>
      <ul className={styles.th}>
        <li>순위</li>
        <li>기업 명</li>
        <li>기업 소개</li>
        <li>카테고리</li>
        <li>투자 금액</li>
        <li>매출액</li>
        <li>고용 인원</li>
      </ul>
      {startupData.map((startup, index) => (
        <ul key={index} className={styles.list}>
          <li>{startup.rank}</li>
          <li>
            <img src={groupImage} alt="그룹 이미지" />
            {startup.name}
          </li>
          <li>{startup.description}</li>
          <li>{startup.category}</li>
          <li>{startup.simInvest}억</li>
          <li>{startup.revenue}억</li>
          <li>{startup.employees}</li>
        </ul>
      ))}
    </div>
  );
}

export default InvestList;
