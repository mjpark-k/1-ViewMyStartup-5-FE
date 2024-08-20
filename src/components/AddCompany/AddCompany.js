import "./AddCompany.css";
import btnPlus from "../../images/btn-plus.svg";
import searchDelete from "../../images/search-delete.svg";
import searchButton from "../../images/search-button.svg";
import { ActionButton } from "../ActionButton";
import { useState } from "react";
import Modal from "../modal/modal";

function AddCompany() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearInput = () => {
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="background-black">
      <Modal
        className={"add-company-modal"}
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <>
          <div className="modal-box">
            <p className="modal-title">나의 기업 선택하기</p>
            <div className="search-container">
              <input
                className="search-input"
                type="text"
                value={input}
                onChange={handleInputChange}
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
            {/* 이거 숫자 처리 해야함 나온 개수만큼 숫자가 */}
            <p className="modal-title">최근 선택된 기업 (숫자)</p>
            <ul>
              <li>코드잇</li>
              <li>팀스파르타</li>
            </ul>
          </div>
        </>
      </Modal>
      <div className="company-choice-container">
        <div className="company-choice-header">
          <h1 className="company-choice-title">나의 기업을 선택해주세요</h1>
          <ActionButton
            className={"initialization-button"}
            text={"전체 초기화"}
            option={"initialization"}
          />
        </div>
        <div className="company-choice-input">
          <div className="company-choice-button">
            <img
              className="btn-plus"
              src={btnPlus}
              alt="btn-plus"
              onClick={openModal}
            />
            <p>기업 추가</p>
          </div>
        </div>
        <ActionButton
          className={"company-comparison-button"}
          text={"기업 비교하기"}
        />
      </div>
    </div>
  );
}

export default AddCompany;
