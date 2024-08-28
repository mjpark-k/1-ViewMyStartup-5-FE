import { ActionButton } from "../../components/Buttons/ActionButton.js";
import "./CompanyDetail.css";
import Addstartup from "../addStartup/addStartup";
import { useState } from "react";

export default function CompanyDetail({ companyData }) {
  const company = companyData;
  const [addClick, setaddClick] = useState(false);

  const openHandler = () => {
    setaddClick(!addClick);
  };

  return (
    <>
      <Addstartup company={[company]} addClick={addClick} />
      <div className="detail-company-header">
        <img
          className="detail-company-logo"
          src={"../../../public/images/samsung.png"}
          alt="logo"
        />
        <div className="detail-company-info">
          <div className="detail-company-name">{company.name}</div>
          <div className="detail-company-category">{company.category}</div>
        </div>
      </div>

      <div className="detail-company-stats">
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
      <div className="detail-company-description">
        <div className="company-description-label">기업 소개</div>
        <div className="company-description-value">{company.description}</div>
      </div>

      <div className="investment-detail-header">
        <div className="investment-detail-header-label">
          View My Startup에서 받은 투자
        </div>
        <ActionButton
          className={"company-invest-button"}
          text={"기업투자하기"}
          onClick={openHandler}
        />
      </div>
      <div className="simInvest">
        {company.simInvest === 0 ? "" : `총 ${company.simInvest}억 원`}
      </div>
    </>
  );
}
