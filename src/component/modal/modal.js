import React, { children } from "react";
import "./modal.css";
import deleteImg from "../image/delete-img.svg";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null; // 모달이 열려있지 않으면 아무것도 렌더링하지 않음
  }

  return (
    <div id="modal-container">
      <div id="modal-content">
        <div id="sss">
          <img id="delete-img" onClick={closeModal} src={deleteImg}></img>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

// 사용법
// import Modal from "./component/modal.js";
// const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//<Modal isOpen={isModalOpen} closeModal={closeModal}>
// <>
// <div id="modal-title">
//  <p>기업에 투자하기</p>
//  <div>투자 기업 정보</div>
// </div>
// </>
//</Modal>
