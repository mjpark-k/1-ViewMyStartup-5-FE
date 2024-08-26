import { useEffect, useState } from "react";
import axios from "axios";

import "./OtherCompany.css";
import { ActionButton } from "../Buttons/ActionButton";
import searchDelete from "../../images/search-delete.svg";
import searchButton from "../../images/search-button.svg";
import Modal from "../modal/modal";
import CompanyItem from "../ComapanyItem/CompanyItem";
import CompanyChip from "../CompanyChip/CompanyChip";

function OtherCompany({ otherSelectedCompanies, setOtherSelectedCompanies }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

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

      const newOtherSelectedCompany = selectedCompany.data.data;

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
    };
    getSelectedCompany();
  };

  // otherSelectedCompanies 이걸 이용해서 뒤에 칩도 가져오고
  // console.log(otherSelectedCompanies);
  // console.log(otherSelectedCompanies.length);
  // console.log(filteredCompanies);

  // CompanyItem isSelected 관리
  const isCompanySelected = (companyId) => {
    return otherSelectedCompanies.some((company) => company.id === companyId);
  };

  const deleteSelectedCompany = (companyId) => {
    setOtherSelectedCompanies((prevSelectedCompanies) =>
      prevSelectedCompanies.filter((company) => company.id !== companyId)
    );
  };

  // 그냥 해본거 두 배열의 교집합이라고 생각
  // const filteredAndSelected = filteredCompanies.filter((item) => {
  //   return otherSelectedCompanies.some((other) => other.id === item.id);
  // });

  // console.log(filteredAndSelected);

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
          <p className="modal-title">
            검색 결과 ({(input ? filteredCompanies : []).length})
          </p>
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
