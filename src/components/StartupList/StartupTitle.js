import { useCallback, useEffect, useState } from "react";
import search from "../../images/ic_search.svg";
import toggle from "../../images/ic_toggle.svg";
import styles from "./StartupTitle.module.css";

function StartupTitle({
  selectedOption,
  setSelectedOption,
  sortOrder,
  setSortOrder,
  orderBy,
  setOrderBy,
  keyword,
  setKeyword,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

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
    if (option === "매출액 높은순") {
      setOrderBy("revenue");
      setSortOrder("desc");
    } else if (option === "매출액 낮은순") {
      setOrderBy("revenue");
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
      <h1 className={styles.title}>전체 스타트업 목록</h1>
      <div className={styles.box}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          type="search"
          placeholder="검색어를 입력해주세요"
        />
        <img src={search} alt="search icon" />
        <div className={styles.dropdown}>
          <p className={styles.toggle} onClick={handleButtonClick}>
            {selectedOption}
            <img src={toggle} alt="toggle icon" />
          </p>
          {isOpen && (
            <ul className={styles.menu}>
              <li onClick={() => handleOptionClick("매출액 높은순")}>
                매출액 높은순
              </li>
              <li onClick={() => handleOptionClick("매출액 낮은순")}>
                매출액 낮은순
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default StartupTitle;
