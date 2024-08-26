import { useCallback, useEffect, useState } from "react";
import toggle from "../../images/ic_toggle.svg";
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
    if (option === "View My Startup 투자 금액 높은순") {
      setOrderBy("simInvest");
      setSortOrder("desc");
    } else if (option === "View My Startup 투자 금액 낮은순") {
      setOrderBy("simInvest");
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
      <h1 className={styles.title}>투자 현황</h1>
      <div className={styles.dropdown}>
        <p className={styles.toggle} onClick={handleButtonClick}>
          {selectedOption}
          <img src={toggle} alt="toggle icon" />
        </p>
        {isOpen && (
          <ul className={styles.menu}>
            <li
              onClick={() =>
                handleOptionClick("View My Startup 투자 금액 높은순")
              }
            >
              View My Startup 투자 금액 높은순
            </li>
            <li
              onClick={() =>
                handleOptionClick("View My Startup 투자 금액 낮은순")
              }
            >
              View My Startup 투자 금액 낮은순
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

export default InvestTitle;
