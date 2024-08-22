import { useCallback, useEffect, useState } from "react";
import toggle from "../../../images/ic_toggle.svg";
import styles from "./InvestTitle.module.css";

function InvestTitle({
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
    if (option === "누적 투자금액 높은순") {
      setOrderBy("actualInvest");
      setSortOrder("desc");
    } else if (option === "누적 투자금액 낮은순") {
      setOrderBy("actualInvest");
      setSortOrder("asc");
    } else if (option === "매출액 높은순") {
      setOrderBy("revenue");
      setSortOrder("desc");
    } else if (option === "매출액 낮은순") {
      setOrderBy("revenue");
      setSortOrder("asc");
    } else if (option === "고용 인원 많은순") {
      setOrderBy("employees");
      setSortOrder("desc");
    } else if (option === "고용 인원 적은순") {
      setOrderBy("employees");
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
      <h1 className={styles.title}>기업 순위 확인하기</h1>
      <div className={styles.dropdown}>
        <p className={styles.toggle} onClick={handleButtonClick}>
          {selectedOption}
          <img src={toggle} alt="toggle icon" />
        </p>
        {isOpen && (
          <ul className={styles.menu}>
            <li onClick={() => handleOptionClick("누적 투자금액 높은순")}>
              누적 투자금액 높은순
            </li>
            <li onClick={() => handleOptionClick("누적 투자금액 낮은순")}>
              누적 투자금액 낮은순
            </li>
            <li onClick={() => handleOptionClick("매출액 높은순")}>
              매출액 높은순
            </li>
            <li onClick={() => handleOptionClick("매출액 낮은순")}>
              매출액 낮은순
            </li>
            <li onClick={() => handleOptionClick("고용 인원 많은순")}>
              고용 인원 많은순
            </li>
            <li onClick={() => handleOptionClick("고용 인원 적은순")}>
              고용 인원 적은순
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default InvestTitle;
