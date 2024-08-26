import "./CompanyRank.css";
import ComparisonInvestList from "./InvestList/CompanyRankInvestList.js";
import ComparisonInvestTitle from "./InvestList/CompanyRankInvestTitle.js";
import { useState, useEffect } from "react";
import axios from "axios";
function ComparisonViewer({ keyword }) {
  const [startupData, setstartupData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("누적 투자금액 낮은순");
  const [orderBy, setOrderBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://startup-38qa.onrender.com/startups",
        {
          params: {
            keyword: keyword,
            includeRanking: true,
            limit: 5, // 나중에 리스트 길이 만큼 정해주면 끝
            sortBy: orderBy,
            sortOrder: sortOrder,
          },
        }
      );
      // console.log(response.data.data);
      setstartupData(response.data.data);
    };
    fetchData();
  }, [orderBy, sortOrder, selectedOption]);

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
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
        <ComparisonInvestList
          startupData={startupData}
          setstartupData={setstartupData}
        />
      </div>
    </>
  );
}

export default ComparisonViewer;
