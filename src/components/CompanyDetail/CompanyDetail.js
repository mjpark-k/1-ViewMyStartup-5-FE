import { ActionButton } from '../../components/Buttons/ActionButton.js';
import './CompanyDetail.css';

export default function CompanyDetail({ companyData }) {
  const company = companyData;

  return (
    <>
      <div className="company-header">
        <img
          className="company-logo"
          src={'../../../public/images/samsung.png'}
          alt="logo"
        />
        <div className="company-info">
          <div className="company-name">{company.name}</div>
          <div className="company-category">{company.category}</div>
        </div>
      </div>

      <div className="company-stats">
        <div className="stat-item">
          <div className="stat-label">누적 투자 금액</div>
          <div className="stat-value">{company.actualInvest}억 원</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">매출액</div>
          <div className="stat-value">{company.revenue}억 원</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">고용 인원</div>
          <div className="stat-value">{company.employees}명</div>
        </div>
      </div>
      <div className="company-description">
        <div className="company-description-label">기업 소개</div>
        <div className="company-description-value">{company.description}</div>
      </div>

      <div className="investment-detail-header">
        <div className="investment-detail-header-label">
          View My Startup에서 받은 투자
        </div>
        <ActionButton
          className={'company-invest-button'}
          text={'기업투자하기'}
          option={'none'}
        />
      </div>
      <div className="simInvest">
        {company.simInvest === 0 ? '' : `총 ${company.simInvest}억 원`}
      </div>
    </>
  );
}
