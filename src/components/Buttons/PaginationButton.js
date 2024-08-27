import { useEffect, useState } from 'react';
import './PaginationButton.css';
import { getInvesterLength, getAllDataLength, getCompanyLength } from '../../api.js';

export default function PaginationButton({
  setPage,
  selectedButtonIndex,
  setSelectedButtonIndex,
  size,
  id,
  input,
  api
}) {
  const [buttonCount, setButtonCount] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [numList, setNumList] = useState([]);
  const [updateBtn, setUpdateBtn] = useState([]);

  /**버튼 클릭 시 명시된 텍스트의 숫자를 상위 컴포넌트로 전달 */
  const pageButtonClick = (index, e) => {
    const targetPage = parseInt(e.target.textContent, 10);
    setSelectedButtonIndex(index);
    setPage(targetPage);
  };

  const initializePagination = async () => {
    if (api === 'invester') {
      const length = await getInvesterLength({ id });
      const totalPages = Math.ceil(length / 5);
      setButtonCount(totalPages);
      const list = [];
      for (let i = 1; i <= totalPages; i++) {
        list.push(i);
      }
      setNumList(list);
    } else if (api === 'company') {
      const length = await getCompanyLength();
      const totalPages = Math.ceil(length / 10);
      setButtonCount(totalPages);
      const list = [];
      for (let i = 1; i <= totalPages; i++) {
        list.push(i);
      }
      setNumList(list);
    } else if (api === 'search') {
      const length = await getAllDataLength(input);
      const totalPages = Math.ceil(length / 5);
      setButtonCount(totalPages);
      const list = [];
      for (let i = 1; i <= totalPages; i++) {
        list.push(i);
      }
      setNumList(list);
    }
  };

  useEffect(() => {
    initializePagination();
  }, [input]);

  useEffect(() => {
    const buttonUpdate = numList.slice(pageNum * 5, (pageNum + 1) * 5);
    setUpdateBtn(buttonUpdate);
    if (buttonUpdate.length > 0) {
      setSelectedButtonIndex(0);
      setPage(buttonUpdate[0]);
    }
  }, [numList, pageNum]);

  const beforeButton = () => {
    if (pageNum > 0) {
      setPageNum((num) => num - 1);
    }
  };

  const nextButton = () => {
    if ((pageNum + 1) * 5 < buttonCount) {
      setPageNum((num) => num + 1);
    }
  };

  return (
    <div className="page-num-box">
      <button
        className={`page-before ${size === 'small' ? 'small' : ''}`}
        onClick={beforeButton}
      />
      {updateBtn.map((num, index) => (
        <button
          className={`page-num ${
            selectedButtonIndex === index ? 'selected' : ''
          } ${size === 'small' ? 'small' : ''}`}
          key={index}
          onClick={(e) => pageButtonClick(index, e)}
        >
          {num}
        </button>
      ))}
      <button
        className={`page-next ${size === 'small' ? 'small' : ''}`}
        onClick={nextButton}
      />
    </div>
  );
}
