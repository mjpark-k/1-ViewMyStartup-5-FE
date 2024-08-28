import "./ComparisonViewer.css";
import ComparisonList from "../../components/ComparisonList/ComparisonList";
import ComparisonTitle from "../../components/ComparisonList/ComparisonTitle";
import { useState, useEffect } from "react";
import axios from "axios";
import PaginationButton from "../../components/Buttons/PaginationButton";
function ComparisonViewer() {
  const [ComparisonData, setComparisonData] = useState([]);
  const [ComparisonOption, setComparisonOption] =
    useState("나의 기업 선택 횟수 높은순");
  const [ComparisonorderBy, setComparisonOrderBy] = useState("");
  const [ComparisonsortOrder, setComparisonSortOrder] = useState("");
  const [page, setPage] = useState(1);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://startup-38qa.onrender.com/startups",
        {
          params: {
            page: page,
            sortBy: ComparisonorderBy,
            sortOrder: ComparisonsortOrder,
          },
        }
      );
      setComparisonData(response.data.data);
    };
    fetchData();
  }, [ComparisonorderBy, ComparisonsortOrder, ComparisonOption, page]);

  return (
    <>
      <div id="ComparisonViewer">
        <ComparisonTitle
          selectedOption={ComparisonOption}
          setSelectedOption={setComparisonOption}
          sortOrder={ComparisonsortOrder}
          setSortOrder={setComparisonSortOrder}
          orderBy={ComparisonorderBy}
          setOrderBy={setComparisonOrderBy}
        />
        <ComparisonList
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
    </>
  );
}

export default ComparisonViewer;
