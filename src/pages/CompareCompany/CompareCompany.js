import { useState } from "react";
import { ActionButton } from "../../components/Buttons/ActionButton";
import MyCompany from "../../components/MyCompany/MyCompany";
import OtherCompany from "../../components/OtherCompany/OtherCompany";
import "./CompareCompany.css";
import ComparisonViewer from "../../components/ComparisonViewer/ComparisonViewer";
import CompanyRank from "../../components/CompanyRank/CompanyRank";

function CompareCompany() {
  const [selectComplete, setSelectComplete] = useState("");
  const [otherSelectedCompanies, setOtherSelectedCompanies] = useState([]);
  const [resultPage, setResultPage] = useState(false);
  const isDisabled = otherSelectedCompanies.length === 0;
  const [NameData, setNameData] = useState([]);
  const [MyNameData, setMyNameData] = useState("");

  const handleClick = () => {
    if (!isDisabled) {
      // 버튼이 활성화된 경우에만 동작 (이 부분을 통해 버튼 이용 컴포넌트 변경 등)
      for (let i = 0; i <= otherSelectedCompanies.length - 1; i++) {
        setNameData((prevNameData) => [
          ...prevNameData,
          otherSelectedCompanies[i].name,
        ]);
      }

      setSelectComplete(false);
      setResultPage(true);
      // NameData.push(MyNameData);
      //Namelist 이동시켜줘야함
      //CompanyRank
      //CompanyViewer
      //리스트 이동 시켜주고, 페이지에서 스테이트 만들어서 공통으로 사용
    }
  };

  return (
    <div className="compare-company">
      <MyCompany
        onSelectComplete={setSelectComplete}
        otherSelectedCompanies={otherSelectedCompanies}
        setOtherSelectedCompanies={setOtherSelectedCompanies}
        MyNameData={MyNameData}
        setMyNameData={setMyNameData}
      />
      {selectComplete && (
        <OtherCompany
          otherSelectedCompanies={otherSelectedCompanies}
          setOtherSelectedCompanies={setOtherSelectedCompanies}
        />
      )}
      {resultPage && (
        <>
          <ComparisonViewer keyword={NameData} MyNameData={MyNameData} />
          <CompanyRank />
        </>
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
