import { useState } from "react";
import { ActionButton } from "../../components/Buttons/ActionButton";
import MyCompany from "../../components/MyCompany/MyCompany";
import OtherCompany from "../../components/OtherCompany/OtherCompany";
import "./CompareCompany.css";
import ComparisonViewer from "../../components/ComparisonViewer/ComparisonViewer";
import CompanyRank from "../../components/CompanyRank/CompanyRank";
import AddStartup from "../../components/addStartup/addStartup";

function CompareCompany() {
  const [selectComplete, setSelectComplete] = useState("");
  const [otherSelectedCompanies, setOtherSelectedCompanies] = useState([]);
  const [resultPage, setResultPage] = useState(false);
  const [NameData, setNameData] = useState([]);
  const [mySelectedCompany, setMySelectedCompany] = useState("");
  const [addClick, setaddClick] = useState(false);
  const isDisabled = otherSelectedCompanies.length === 0;

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
    }
  };

  const handleFullReset = () => {
    setMySelectedCompany("");
    setOtherSelectedCompanies([]);
    setSelectComplete("");
    setNameData([]);
    setResultPage(false);
  };

  const addhandleClick = () => {
    setaddClick(!addClick);
  };

  return (
    <div className="compare-company">
      <div
        className={selectComplete ? "complete-empty-box" : "empty-box"}
      ></div>
      <MyCompany
        onSelectComplete={setSelectComplete}
        otherSelectedCompanies={otherSelectedCompanies}
        setOtherSelectedCompanies={setOtherSelectedCompanies}
        mySelectedCompany={mySelectedCompany}
        setMySelectedCompany={setMySelectedCompany}
        handleFullReset={handleFullReset}
      />

      {selectComplete && (
        <>
          <OtherCompany
            otherSelectedCompanies={otherSelectedCompanies}
            setOtherSelectedCompanies={setOtherSelectedCompanies}
            mySelectedCompany={mySelectedCompany}
            setMySelectedCompany={setMySelectedCompany}
          />
          <ActionButton
            className={`company-comparison-button ${
              isDisabled ? "disabled" : ""
            }`}
            text={"기업 비교하기"}
            onClick={handleClick}
          />
        </>
      )}
      {resultPage && (
        <>
          <AddStartup addClick={addClick} company={mySelectedCompany} />
          <ComparisonViewer
            keyword={NameData}
            MyNameData={mySelectedCompany[0].name}
          />
          <CompanyRank keyword={mySelectedCompany[0].name} />
          <ActionButton
            className={`company-comparison-button ${
              isDisabled ? "disabled" : ""
            }`}
            text={"투자하기"}
            onClick={addhandleClick}
          />
        </>
      )}
    </div>
  );
}

export default CompareCompany;
