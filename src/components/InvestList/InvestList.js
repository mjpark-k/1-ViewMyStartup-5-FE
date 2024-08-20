import groupImage from "../../images/Mask group.svg";
import styles from "./InvestList.module.css";

const startupData = [
  {
    rank: "1위",
    name: "뤼이드",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "100억 원",
    revenue: "40억 원",
  },
  {
    rank: "2위",
    name: "매스프레소",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "80억 원",
    revenue: "102억 원",
  },
  {
    rank: "3위",
    name: "뤼이드",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "50억 원",
    revenue: "68억 원",
  },
  {
    rank: "4위",
    name: "코드잇",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "28억 원",
    revenue: "13억 원",
  },
  {
    rank: "5위",
    name: "매스프레소",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "28억 원",
    revenue: "13억 원",
  },
  {
    rank: "6위",
    name: "앨리스",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "28억 원",
    revenue: "13억 원",
  },
  {
    rank: "7위",
    name: "코드잇",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "28억 원",
    revenue: "13억 원",
  },
  {
    rank: "8위",
    name: "아이헤이트플라잉버...",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "28억 원",
    revenue: "13억 원",
  },
  {
    rank: "9위",
    name: "코드잇",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "10억 원",
    revenue: "13억 원",
  },
  {
    rank: "10위",
    name: "앨리스",
    description:
      "코드잇은 ‘온라인 코딩 교육 서비스’를 운영하는 EdTech 스타트업입니다. 코딩 교육에 대한 수...",
    category: "에듀테크",
    investment: "5억 원",
    revenue: "97억 원",
  },
];

function InvestList() {
  return (
    <div className={styles.inner}>
      <ul className={styles.th}>
        <li>순위</li>
        <li>기업 명</li>
        <li>기업 소개</li>
        <li>카테고리</li>
        <li>
          View My Startup <br className={styles.mobileTh} />
          투자 금액
        </li>
        <li>실제 누적 투자 금액</li>
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
          <li>{startup.investment}</li>
          <li>{startup.revenue}</li>
        </ul>
      ))}
    </div>
  );
}

export default InvestList;
