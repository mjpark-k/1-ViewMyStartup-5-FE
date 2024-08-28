import "./StartupViewer.css";
import StartupList from "../../components/StartupList/StartupList";
import StartupTitle from "../../components/StartupList/StartupTitle";
import { useState, useEffect } from "react";
import axios from "axios";
import PaginationButton from "../../components/Buttons/PaginationButton";
function StartupViewer() {
  const [ComparisonData, setComparisonData] = useState([]);
  const [ComparisonOption, setComparisonOption] = useState("매출액 높은순");
  const [ComparisonorderBy, setComparisonOrderBy] = useState("");
  const [ComparisonsortOrder, setComparisonSortOrder] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://startup-38qa.onrender.com/startups`,
        {
          params: {
            page: page,
            keyword: keyword,
            sortBy: ComparisonorderBy,
            sortOrder: ComparisonsortOrder,
            includeRanking: true,
          },
        }
      );
      setComparisonData(response.data.data);
    };
    fetchData();
  }, [ComparisonorderBy, ComparisonsortOrder, ComparisonOption, keyword, page]);

  return (
    <>
      <div id="StartupViewer">
        <StartupTitle
          selectedOption={ComparisonOption}
          setSelectedOption={setComparisonOption}
          sortOrder={ComparisonsortOrder}
          setSortOrder={setComparisonSortOrder}
          orderBy={ComparisonorderBy}
          setOrderBy={setComparisonOrderBy}
          keyword={keyword}
          setKeyword={setKeyword}
        />
        <StartupList
          startupData={ComparisonData}
          setstartupData={setComparisonData}
        />
        <PaginationButton
          api={"company"}
          selectedButtonIndex={selectedButtonIndex}
          setSelectedButtonIndex={setSelectedButtonIndex}
          setPage={setPage}
          keyword={keyword}
        />
      </div>
    </>
  );
}

export default StartupViewer;
