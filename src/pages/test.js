import Modal from "../components/modal/modal";
import { useState } from "react";
import "./test.css";
import companyImg from "../images/delete-img.svg";
import passOpenImg from "../images/pass-open.svg";
import passCloseImg from "../images/pass-close.svg";
import { ActionButton } from "../components/ActionButton.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Test() {
  const [isModalOpen, setIsModalOpen] = useState(true); // false 해줘야함 나중에 버튼으로 true 해야함
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [coment, setComent] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [isComplete, setIsComplete] = useState(false); // false 해줘야함 나중에 버튼으로 true 해야함
  const [companyData, setCompanyData] = useState("");

  const navigate = useNavigate();

  const togglePass = () => {
    setShowPass((prevState) => !prevState);
  };
  const togglePass2 = () => {
    setShowPass2((prevState) => !prevState);
  };
  // useEffect(() => {
  //   openModal("0a4788aa-b114-41e7-93b2-6e2e90367134"); // 이런식으로 아이디 가지고 올거임
  // }, []);

  //
  const isNotCompleteHandler = () => {
    setIsComplete(false);
  };

  const completeHandler = () => {
    setIsComplete(false);
    navigate("/investment");
  };

  /**버튼 클릭해서 활성화 시켜줘야함. */ // 이걸로 모달 시작 온클릭에 추가해주면 끝(데이터 가지고 오는건 아직 미완)
  const openModal = async (findId) => {
    const result = await axios.get(
      `https://startup-38qa.onrender.com/startups/${findId}`
    );
    setCompanyData(result.data);
    setIsModalOpen(true);
  };

  const sendAction = async () => {
    if (pass !== pass2) {
      console.log("error");
      return; // 비밀번호가 일치하지 않으면 함수 종료
    }

    const data = {
      name: name,
      InvestAmount: parseInt(amount),
      comment: coment,
      password: pass,
    };

    try {
      const response = await axios.post(
        `https://startup-38qa.onrender.com/startups/${companyData.id}/users`,
        data
      );

      setIsModalOpen(false);
      setIsComplete(true);
    } catch (error) {
      console.error("An error occurred:", error); // 오류를 출력합니다.
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        className={"modal-content"}
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <>
          <div id="modal-title-container">
            <div>
              <p id="modal-title">기업에 투자하기</p>
              <div id="company-info">
                <p>투자 기업 정보</p>
                <div id="company-info-text">
                  <img id="company-img" src={companyImg}></img>

                  <p>{companyData.name}</p>
                  <p id="company-catagory">{companyData.category}</p>
                </div>
                <from id="modal-from">
                  <div>
                    <p id="from-name">투자자 이름</p>
                    <input
                      className="investment-name"
                      placeholder="투자자 이름을 입력해 주세요"
                      type="text"
                      id="modal-input"
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <p id="from-name">투자 금액</p>
                    <input
                      className="investment-amount"
                      placeholder="투자 금액을 입력해 주세요"
                      type="text"
                      id="modal-input"
                      onChange={(e) => setAmount(e.target.value)}
                    ></input>
                    <p id="from-name">투자 코멘트</p>
                    <textarea
                      className="investment-amount"
                      placeholder="투자에 대한 코멘트를 입력해 주세요"
                      type="text"
                      id="modal-input-amount"
                      onChange={(e) => setComent(e.target.value)}
                    ></textarea>
                    <p id="from-name">비밀번호</p>
                    <div id="pass-container">
                      <input
                        className="investment-name"
                        placeholder="비밀번호를 입력해주세요"
                        type={showPass ? "text" : "password"}
                        id="modal-input"
                        onChange={(e) => setPass(e.target.value)}
                      ></input>
                      <i className="close_pw" id="eye_img" onClick={togglePass}>
                        <img
                          src={passCloseImg}
                          style={{ display: showPass ? "none" : "block" }}
                        ></img>
                      </i>
                      <i className="open_pw" id="eye_img" onClick={togglePass}>
                        <img
                          src={passOpenImg}
                          style={{ display: showPass ? "block" : "none" }}
                        ></img>
                      </i>
                    </div>
                    <p id="from-name">비밀번호 확인</p>
                    <div id="pass-container">
                      <input
                        className="investment-name-2"
                        placeholder="비밀번호를 다시 한 번 입력해주세요"
                        type={showPass2 ? "text" : "password"}
                        id="modal-input"
                        onChange={(e) => setPass2(e.target.value)}
                      ></input>
                      <i
                        className="close_pw"
                        id="eye_img"
                        onClick={togglePass2}
                      >
                        <img
                          src={passCloseImg}
                          style={{ display: showPass2 ? "none" : "block" }}
                        ></img>
                      </i>
                      <i className="open_pw" id="eye_img" onClick={togglePass2}>
                        <img
                          src={passOpenImg}
                          style={{ display: showPass2 ? "block" : "none" }}
                        ></img>
                      </i>
                    </div>
                  </div>
                  <div id="btn-container">
                    <ActionButton
                      className={"invest-cancel-button"}
                      text={"취소"}
                      onClick={closeModal} // 이런식
                    />
                    <ActionButton
                      className={"invest-button"}
                      text={"투자하기"}
                      onClick={sendAction} // 이런식
                    />
                  </div>
                </from>
              </div>
            </div>
          </div>
        </>
      </Modal>
      <Modal
        className={"complete-modal"}
        isOpen={isComplete}
        closeModal={isNotCompleteHandler}
      >
        <p id="modal-chk-title">투자가 완료되었어요!</p>
        <ActionButton
          className={"modal-button"}
          text={"확인"}
          onClick={completeHandler} // 이런식
        />
      </Modal>
    </div>
  );
}

export default Test;
