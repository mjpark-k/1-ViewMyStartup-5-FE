import { useEffect, useState } from "react";
import axios from "axios";

import "./OtherCompany.css";
import { ActionButton } from "../Buttons/ActionButton";
import searchDelete from "../../images/search-delete.svg";
import searchButton from "../../images/search-button.svg";
import Modal from "../modal/modal";
import CompanyItem from "../ComapanyItem/CompanyItem";
import CompanyChip from "../CompanyChip/CompanyChip";
import PaginationButton from "../Buttons/PaginationButton";

function OtherCompany({ otherSelectedCompanies, setOtherSelectedCompanies }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        const response = await axios.get(
          "https://startup-38qa.onrender.com/startups",
          {
            params: {
              keyword: input,
              page: page,
              limit: 5,
            },
          }
        );
        setFilteredCompanies(response.data.data);
        setTotalCount(response.data.meta.total);
      } catch (error) {
        console.log("Failed to fetch companies:", error);
      }
    };
    getCompanyData();
  }, [input, page]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // input 초기화 (삭제 버튼으로)
  const clearInput = () => {
    setInput("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const selectCompany = async (id) => {
    const getSelectedCompany = async () => {
      const selectedCompany = await axios.get(
        `https://startup-38qa.onrender.com/startups/${id}`
      );
      const newOtherSelectedCompany = [selectedCompany.data];

      const isDuplicate = otherSelectedCompanies.some(
        (existingCompany) =>
          existingCompany.id === newOtherSelectedCompany[0].id
      );

      if (!isDuplicate && otherSelectedCompanies.length < 5) {
        setOtherSelectedCompanies([
          ...otherSelectedCompanies,
          ...newOtherSelectedCompany,
        ]);
      }
      console.log(newOtherSelectedCompany);
    };
    getSelectedCompany();
  };

  // CompanyItem isSelected 관리
  const isCompanySelected = (companyId) => {
    return otherSelectedCompanies.some((company) => company.id === companyId);
  };

  const deleteSelectedCompany = (companyId) => {
    setOtherSelectedCompanies((prevSelectedCompanies) =>
      prevSelectedCompanies.filter((company) => company.id !== companyId)
    );
  };

  console.log(otherSelectedCompanies);

  return (
    <>
      <Modal
        className={"modal-content"}
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <div className="modal-box">
          <p className="modal-title">비교할 기업 선택하기</p>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="기업 이름을 입력하세요."
            />
            <img
              className="search-delete"
              src={searchDelete}
              onClick={clearInput}
              alt="search-delete"
            />
            <img
              className="search-button"
              src={searchButton}
              alt="search-button"
            />
          </div>
          <p className="modal-title">
            선택한 기업 ({otherSelectedCompanies.length})
          </p>
          <ol>
            {otherSelectedCompanies.map((company) => (
              <CompanyItem
                key={company.id}
                company={company}
                onSelect={selectCompany}
                selectCancel={true}
                isSelected={true} // 버튼 관리 (css, text)
                onDelete={deleteSelectedCompany}
              />
            ))}
          </ol>
          <p className="modal-title">검색 결과 ({input ? totalCount : 0})</p>
          <ol>
            {(input ? filteredCompanies : []).map((company) => (
              <CompanyItem
                key={company.id}
                company={company}
                onSelect={selectCompany}
                selectCancel={false}
                isSelected={isCompanySelected(company.id)} // 버튼 관리 (css, text)
              />
            ))}
          </ol>
          {input ? (
            <PaginationButton
              setPage={setPage}
              setSelectedButtonIndex={setSelectedButtonIndex}
              selectedButtonIndex={selectedButtonIndex}
              input={input}
              api={"search"}
              size={"small"}
            />
          ) : null}
        </div>
      </Modal>
      <div className="other-company-container">
        <div className="other-company-header">
          <div className="other-company-content">
            <h1 className="other-company-title">어떤 기업이 궁금하세요?</h1>
            <h2 className="number-limit">(최대 5개)</h2>
          </div>
          <ActionButton
            className={"add-company-button"}
            text={"기업 추가하기"}
            onClick={openModal}
          />
        </div>
        <div className="other-company-input">
          <div className="other-company-chips">
            {otherSelectedCompanies.length > 0 ? (
              otherSelectedCompanies.map((company) => (
                <CompanyChip
                  key={company.id}
                  company={company}
                  onSelect={selectCompany}
                  selectCancel={true}
                  onDelete={deleteSelectedCompany}
                />
              ))
            ) : (
              <div className="empty-comment">
                <p>
                  아직 추가한 기업이 없어요,
                  <br />
                  버튼을 눌러 기업을 추가해보세요.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherCompany;
