import { useEffect, useState } from "react";
import axios from "axios";

import "./MyCompany.css";
import btnPlus from "../../images/btn-plus.svg";
import searchDelete from "../../images/search-delete.svg";
import searchButton from "../../images/search-button.svg";
import { ActionButton } from "../ActionButton";
import Modal from "../modal/modal";
import CompanyItem from "../ComapanyItem/CompanyItem";
import ChipContent from "../ChipContent/ChipContent";

function MyCompany({ onSelectComplete, otherSelectedCompanies, setOtherSelectedCompanies }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [recentlySelectedCompanies, setRecentlySelectedCompanies] = useState(
    []
  );
  const [mySelectedCompany, setMySelectedCompany] = useState("");

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        const response = await axios.get(
          "https://startup-38qa.onrender.com/startups",
          {
            params: {
              limit: 1000,
            },
          }
        );
        setCompanies(response.data.data); // 데이터를 받아와 companies 상태에 저장
        // 초기 상태 설정
        setFilteredCompanies(response.data.data);
      } catch (error) {
        console.log("Failed to fetch companies:", error);
      }
    };
    getCompanyData();
  }, []);
  // 테스트
  console.log(companies);

  // input 값이 변경될 때마다 필터링 작업 수행(철자 하나가 빠지는 오류 해결)
  useEffect(() => {
    const filtered = companies.filter((company) =>
      company.name.includes(input)
    );
    setFilteredCompanies(filtered);
  }, [input]);

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

  const selectCompany = async (company) => {
    const getSelectedCompany = async () => {
      const selectedCompany = await axios.get(
        "https://startup-38qa.onrender.com/startups",
        {
          params: {
            keyword: company,
          },
        }
      );

      const newSelectedCompany = selectedCompany.data.data;

      // 이미 선택된 회사인지 확인
      const isDuplicate = recentlySelectedCompanies.some(
        (existingCompany) => existingCompany.id === newSelectedCompany[0].id
      );

      // 중복이 아닐 경우에만 배열에 추가
      if (!isDuplicate) {
        setRecentlySelectedCompanies([
          ...recentlySelectedCompanies,
          ...newSelectedCompany,
        ]);
      }
      setMySelectedCompany(newSelectedCompany);
      onSelectComplete(newSelectedCompany);
    };
    setIsModalOpen(false);
    getSelectedCompany();
  };

  // 선택 취소 클릭 시 처음 상태로
  const deselect = () => {
    setMySelectedCompany("");
    onSelectComplete("");
  };

  // 확인 용도 (선택한 나의 기업)
  console.log(mySelectedCompany);
  console.log(otherSelectedCompanies);

  return (
    <>
      <Modal
        className={"add-company-modal"}
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <div className="modal-box">
          <p className="modal-title">나의 기업 선택하기</p>
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
            최근 선택된 기업 ({recentlySelectedCompanies.length})
          </p>
          <ol>
            {recentlySelectedCompanies.map((company) => (
              <CompanyItem
                key={company.id}
                company={company}
                onSelect={selectCompany}
              />
            ))}
          </ol>
          <p className="modal-title">
            검색 결과 ({(input ? filteredCompanies : []).length})
          </p>
          <ol>
            {(input ? filteredCompanies : []).map((company) => (
              <CompanyItem
                key={company.id}
                company={company}
                onSelect={selectCompany}
              />
            ))}
          </ol>
        </div>
      </Modal>
      <div className="company-choice-container">
        <div className="company-choice-header">
          <h1 className="company-choice-title">나의 기업을 선택해주세요</h1>
          {otherSelectedCompanies.length > 0 && (
            <ActionButton
              className={"initialization-button"}
              text={"전체 초기화"}
              option={"initialization"}
            />
          )}
        </div>
        <div className="company-choice-input">
          {mySelectedCompany && (
            <p className="deselect" onClick={deselect}>
              선택 취소
            </p>
          )}
          {mySelectedCompany ? (
            <ChipContent
              className={"chip-item-form"}
              company={mySelectedCompany[0]}
            />
          ) : (
            <div className="company-choice-button">
              <img
                className="btn-plus"
                src={btnPlus}
                alt="btn-plus"
                onClick={openModal}
              />
              <p>기업 추가</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyCompany;
