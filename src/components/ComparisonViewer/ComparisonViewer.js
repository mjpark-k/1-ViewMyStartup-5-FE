import "./ComparisonViewer.css";
import ComparisonInvestList from "./InvestList/ComparisonInvestList.js";
import ComparisonInvestTitle from "./InvestList/ComparisonInvestTitle.js";
import { useState, useEffect } from "react";
import axios from "axios";
function ComparisonViewer() {
  const [ComparisonData, setComparisonData] = useState([]);
  const [ComparisonOption, setComparisonOption] =
    useState("누적 투자금액 낮은순");
  const [ComparisonorderBy, setComparisonOrderBy] = useState("");
  const [ComparisonsortOrder, setComparisonSortOrder] = useState("");
  // const keywrods = ["엘리스", "코드잇"];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://startup-38qa.onrender.com/startups",
        {
          params: {
            // keyword: keywrods,
            limit: 5, // 나중에 리스트 길이만큼 정해주면 끝
            sortBy: ComparisonorderBy,
            sortOrder: ComparisonsortOrder,
          },
        }
      );
      // console.log(response.data.data);
      setComparisonData(response.data.data);
    };
    fetchData();
  }, [ComparisonorderBy, ComparisonsortOrder, ComparisonOption]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(oderBy);
  //     console.log(sortOder);
  //   };
  //   fetchData();
  // }, [oderBy, sortOder]);

  return (
    <>
      <div id="CompoersionViewer">
        <ComparisonInvestTitle
          selectedOption={ComparisonOption}
          setSelectedOption={setComparisonOption}
          sortOrder={ComparisonsortOrder}
          setSortOrder={setComparisonSortOrder}
          orderBy={ComparisonorderBy}
          setOrderBy={setComparisonOrderBy}
        />
        <ComparisonInvestList
          startupData={ComparisonData}
          setstartupData={setComparisonData}
        />
      </div>
    </>
  );
}

export default ComparisonViewer;
