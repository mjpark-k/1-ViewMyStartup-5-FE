import styles from "./ComparisonList.module.css";

function ComparisonList({ startupData }) {
  return (
    <div className={styles.inner}>
      <ul className={styles.th}>
        <li>순위</li>
        <li>기업 명</li>
        <li>기업 소개</li>
        <li>카테고리</li>
        <li>나의 기업 선택 횟수</li>
        <li>비교 기업 선택 횟수</li>
      </ul>
      {startupData.map((startup, index) => (
        <ul key={index} className={styles.list}>
          <li>{startup.rank}위</li>
          <li>
            <img src={startup.image} alt="그룹 이미지" />
            {startup.name}
          </li>
          <li>
            <div>{startup.description}</div>
          </li>
          <li>{startup.category}</li>
          <li>{startup.count}</li>
          <li>{startup.actualInvest}</li>
        </ul>
      ))}
    </div>
  );
}

export default ComparisonList;
