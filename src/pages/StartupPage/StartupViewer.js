import "./StartupViewer.css";
import StartupList from "../../components/StartupList/StartupList";
import StartupTitle from "../../components/StartupList/StartupTitle";
import { useState, useEffect } from "react";
import axios from "axios";
import PaginationButton from "../../components/Buttons/PaginationButton";
function ComparisonViewer() {
  const [ComparisonData, setComparisonData] = useState([]);
  const [ComparisonOption, setComparisonOption] = useState("매출액 높은순");
  const [ComparisonorderBy, setComparisonOrderBy] = useState("");
  const [ComparisonsortOrder, setComparisonSortOrder] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  // const keywrods = ["엘리스", "코드잇"];

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
          },
        }
      );
      // console.log(response.data.data);
      setComparisonData(response.data.data);
    };
    fetchData();
  }, [ComparisonorderBy, ComparisonsortOrder, ComparisonOption, keyword, page]);

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
        />
      </div>
    </>
  );
}

export default ComparisonViewer;
