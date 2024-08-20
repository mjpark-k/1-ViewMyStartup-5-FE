import { useCallback, useEffect, useState } from "react";
import toggle from "../../images/ic_toggle.svg";
import styles from "./InvestTitle.module.css";

function InvestTitle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

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
          View My Startup 투자 금액 높은순
          <img src={toggle} alt="toggle icon" />
        </p>
        {isOpen && (
          <ul className={styles.menu}>
            <li>View My Startup 투자 금액 높은순</li>
            <li>View My Startup 투자 금액 낮은순</li>
            <li>실제 누적 투자 금액 높은순</li>
            <li>실제 누적 투자 금액 낮은순</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default InvestTitle;
