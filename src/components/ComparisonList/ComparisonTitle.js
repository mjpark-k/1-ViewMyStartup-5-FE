import { useCallback, useEffect, useState } from "react";
import toggle from "../../images/ic_toggle.svg";
import styles from "./ComparisonTitle.module.css";

function ComparisonTitle({
  selectedOption,
  setSelectedOption,
  sortOrder,
  setSortOrder,
  orderBy,
  setOrderBy,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);
  const handleOptionClick = useCallback((option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleChange(option);
  }, []);

  const handleChange = (option) => {
    if (option === "나의 기업 선택 횟수 높은순") {
      setOrderBy("count");
      setSortOrder("desc");
    } else if (option === "나의 기업 선택 횟수 낮은순") {
      setOrderBy("count");
      setSortOrder("asc");
    } else if (option === "실제 누적 투자 금액 높은순") {
      setOrderBy("actualInvest");
      setSortOrder("desc");
    } else if (option === "실제 누적 투자 금액 낮은순") {
      setOrderBy("actualInvest");
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.flexBox}>
      <h1 className={styles.title}>비교 현황</h1>
      <div className={styles.dropdown}>
        <p className={styles.toggle} onClick={handleButtonClick}>
          {selectedOption}
          <img src={toggle} alt="toggle icon" />
        </p>
        {isOpen && (
          <ul className={styles.menu}>
            <li onClick={() => handleOptionClick("나의 기업 선택 횟수 높은순")}>
              나의 기업 선택 횟수 높은순
            </li>
            <li onClick={() => handleOptionClick("나의 기업 선택 횟수 낮은순")}>
              나의 기업 선택 횟수 낮은순
            </li>
            <li onClick={() => handleOptionClick("실제 누적 투자 금액 높은순")}>
              실제 누적 투자 금액 높은순
            </li>
            <li onClick={() => handleOptionClick("실제 누적 투자 금액 낮은순")}>
              실제 누적 투자 금액 낮은순
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default ComparisonTitle;
