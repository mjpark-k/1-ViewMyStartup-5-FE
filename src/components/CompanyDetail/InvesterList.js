import InvesterListDropdown from './InvesterListDropdown.js';
import './InvesterList.css';

export default function InvesterList({
  investerList,
  deleteModalClick,
  buttonIndex,
  dropdownClick,
}) {
  return (
    <div>
      <div className="simInvest-header-row">
        <div className="invester-name">투자자 이름</div>
        <div className="invester-rank">순위</div>
        <div className="investment-amount">투자 금액</div>
        <div className="investment-comment">투자 코멘트</div>
        <div className="invester-list-container"></div>
        <div className="blank"></div>
      </div>
      <div className="invester-list-container">
        {investerList.map((data, index) => (
          <div key={data.id} className="invester-list">
            <div className="invester-name-value">{data.name}</div>
            <div className="invester-rank-value">{data.rank}위</div>
            <div className="investment-amount-value">{data.InvestAmount}억</div>
            <div className="investment-comment-value">{data.comment}</div>
            <div className="kebab" onClick={() => dropdownClick(index)} />
            <InvesterListDropdown
              display={buttonIndex === index ? 'block' : 'none'}
              deleteModalClick={() => deleteModalClick(data.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
