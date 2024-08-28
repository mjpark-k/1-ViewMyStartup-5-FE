import "./InvestViewer.css";
import InvestList from "../../components/InvestList/InvestList.js";
import InvestTitle from "../../components/InvestList/InvestTitle.js";
import { useState, useEffect } from "react";
import axios from "axios";
import PaginationButton from "../../components/Buttons/PaginationButton";
function InvestViewer() {
  const [ComparisonData, setComparisonData] = useState([]);
  const [ComparisonOption, setComparisonOption] = useState(
    "View My Startup 투자 금액 높은순"
  );
  const [ComparisonorderBy, setComparisonOrderBy] = useState("");
  const [ComparisonsortOrder, setComparisonSortOrder] = useState("");
  const [page, setPage] = useState(1);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  // const keywrods = ["엘리스", "코드잇"];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://startup-38qa.onrender.com/startups",
        {
          params: {
            // keyword: keywrods,
            page: page,
            sortBy: ComparisonorderBy,
            sortOrder: ComparisonsortOrder,
          },
        }
      );
      // console.log(response.data.data);
      setComparisonData(response.data.data);
    };
    fetchData();
  }, [ComparisonorderBy, ComparisonsortOrder, ComparisonOption, page]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(oderBy);
  //     console.log(sortOder);
  //   };
  //   fetchData();
  // }, [oderBy, sortOder]);
  return (
    <>
      {ComparisonData.length === 0 ? (
        <div id="no-data">아직 투자 현황이 없어요.</div>
      ) : (
        <div id="CompoersionViewer">
          <InvestTitle
            selectedOption={ComparisonOption}
            setSelectedOption={setComparisonOption}
            sortOrder={ComparisonsortOrder}
            setSortOrder={setComparisonSortOrder}
            orderBy={ComparisonorderBy}
            setOrderBy={setComparisonOrderBy}
          />
          <InvestList
            startupData={ComparisonData}
            setstartupData={setComparisonData}
          />
          <PaginationButton
            api={"company"}
            selectedButtonIndex={selectedButtonIndex}
            setSelectedButtonIndex={setSelectedButtonIndex}
            setPage={setPage}
          />
        </div>
      )}
    </>
  );
}

export default InvestViewer;
