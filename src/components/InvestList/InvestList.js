import groupImage from "../../images/Mask group.svg";
import styles from "./InvestList.module.css";

function InvestList({ startupData }) {
  return (
    <div className={styles.inner}>
      <ul className={styles.th}>
        <li>순위</li>
        <li>기업 명</li>
        <li>기업 소개</li>
        <li>카테고리</li>
        <li>View My Startup 투자 금액</li>
        <li>실제 누적 투자 금액</li>
      </ul>
      {startupData.length === 0 ? (
        <div id="no-data">아직 투자 현황이 없어요.</div>
      ) : (
        startupData.map((startup, index) => (
          <ul key={index} className={styles.list}>
            <li>{startup.rank}</li>
            <li>
              <img src={groupImage} alt="그룹 이미지" />
              {startup.name}
            </li>
            <li><div>{startup.description}</div></li>
            <li>{startup.category}</li>
            <li>{startup.simInvest}억</li>
            <li>{startup.actualInvest}억</li>
          </ul>
        ))
      )}
    </div>
  );
}

export default InvestList;
