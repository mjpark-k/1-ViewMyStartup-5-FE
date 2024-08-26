import { useEffect, useState } from 'react';
import PaginationButton from '../../components/Buttons/PaginationButton.js';
import './CompanyDetailPage.css';
import InvesterList from '../../components/CompanyDetail/InvesterList.js';
import CompanyDetail from '../../components/CompanyDetail/CompanyDetail.js';
import { deleteInvester, getCompany, getInvester } from '../../api.js';
import Modal from '../../components/modal/modal.js';
import DeleteModalForm from '../../components/CompanyDetail/Forms/DeleteModalForm.js';
import DeleteFailForm from '../../components/CompanyDetail/Forms/DeleteFailForm.js';
import { useParams } from 'react-router-dom';

export default function CompanyDetailPage() {
  const [detail, setDetail] = useState([]);
  const [invester, setInvester] = useState([]); // 투자자목록 받아서 리스트로 내려주는 상태관리
  const [page, setPage] = useState(1); // 페이지 네이션 버튼 페이지 설정

  const [buttonIndex, setbuttonIndex] = useState(null); //드롭다운 버튼 인덱스
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null); //페이지네이션 버튼 클릭 시 해당 버튼 스타일링
  /**삭제 모달 */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFail, setIsFail] = useState(false);

  const [password, setPassword] = useState(''); //삭제모달 비밀번호 인증
  const [investerId, setInvesterId] = useState(null); //투자자 id 상태관리

  const { id } = useParams();

  const company = async () => {
    const params = { id: id };
    const company = await getCompany(params);
    setDetail(company);
  };

  const investers = async () => {
    const params = { page: page, id: id };
    const investers = await getInvester(params);
    setInvester(investers);
  };

  useEffect(() => {
    company();
  }, []); //기업정보

  useEffect(() => {
    investers();
  }, [page]); //page가 변화할 때마다 렌더링

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  /** 비밀번호 입력 후 삭제하기 버튼 클릭 */
  const deleteClick = (e) => {
    e.preventDefault();
    const findInvesterId = invester.find((data) => data.id === investerId);
    if (findInvesterId.password === password) {
      deleteInvester(findInvesterId.id).then(() => {
        window.location.reload();
      });
    } else {
      setIsFail(true);
    }
  };
  /** 비밀번호 실패 창 확인 버튼 클릭 */
  const clearClick = (e) => {
    e.preventDefault();
    setIsFail(false);
    setIsModalOpen(false);
  };

  const deleteModalClick = (id) => {
    setInvesterId(id);
    setIsModalOpen(true);
  };

  const closeModalClick = () => {
    setIsModalOpen(false);
  };

  const dropdownClick = (index) => {
    if (buttonIndex === index) setbuttonIndex(null);
    else setbuttonIndex(index);
  };

  const NoList = () => {
    return (
      <div className="no-list">
        아직 투자한 기업이 없어요,
        <br />
        버튼을 눌러 기업에 투자해보세요!
      </div>
    );
  };
  return (
    <div className="background">
      <CompanyDetail companyData={detail} />
      {invester.length === 0 ? (
        <NoList />
      ) : (
        <InvesterList
          investerList={invester}
          deleteModalClick={deleteModalClick}
          dropdownClick={dropdownClick}
          buttonIndex={buttonIndex}
        />
      )}
      {invester.length === 0 ? null : (
        <PaginationButton
          setPage={setPage}
          investerList={invester}
          setSelectedButtonIndex={setSelectedButtonIndex}
          selectedButtonIndex={selectedButtonIndex}
          id={id}
        />
      )}
      <Modal
        children={
          isFail ? (
            <DeleteFailForm onClick={clearClick} />
          ) : (
            <DeleteModalForm
              onClick={deleteClick}
              passwordChange={passwordChange}
            />
          )
        }
        isOpen={isModalOpen}
        closeModal={closeModalClick}
        className={'modal-content'}
      />
    </div>
  );
}
