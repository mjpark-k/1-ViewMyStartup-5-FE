import { useState } from "react";
import { ActionButton } from "../../components/ActionButton";
import MyCompany from "../../components/MyCompany/MyCompany";
import OtherCompany from "../../components/OtherCompany/OtherCompany";
import "./CompareCompany.css";

function CompareCompany() {
  const [selectComplete, setSelectComplete] = useState("");
  const [otherSelectedCompanies, setOtherSelectedCompanies] = useState([]);

  const isDisabled = otherSelectedCompanies.length === 0;

  const handleClick = () => {
    if (!isDisabled) {
      // 버튼이 활성화된 경우에만 동작 (이 부분을 통해 버튼 이용 컴포넌트 변경 등)
    }
  };

  return (
    <div className="compare-company">
      <MyCompany
        onSelectComplete={setSelectComplete}
        otherSelectedCompanies={otherSelectedCompanies}
        setOtherSelectedCompanies={setOtherSelectedCompanies}
      />
      {selectComplete && (
        <OtherCompany
          otherSelectedCompanies={otherSelectedCompanies}
          setOtherSelectedCompanies={setOtherSelectedCompanies}
        />
      )}
      <ActionButton
        className={`company-comparison-button ${isDisabled ? "disabled" : ""}`}
        text={"기업 비교하기"}
        onClick={handleClick}
      />
    </div>
  );
}

export default CompareCompany;
