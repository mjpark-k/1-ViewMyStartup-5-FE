import "./CompanyItem.css";
import { ActionButton } from "../Buttons/ActionButton";

function CompanyItem({
  company,
  onSelect,
  isSelected,
  onDelete,
  selectCancel,
  isMyCompany,
}) {
  const handleSelect = () => {
    if (!isSelected) {
      onSelect(company.id);
    } else if (selectCancel && onDelete) {
      onDelete(company.id);
    }
    console.log(company.id);
  };

  const getButtonText = () => {
    if (selectCancel) {
      return "선택해제";
    } else if (isSelected) {
      return "선택완료";
    } else if (isMyCompany) {
      return "나의 기업";
    } else {
      return "선택하기";
    }
  };

  const getButtonClassName = () => {
    if (selectCancel) {
      return "select-cancel-button";
    } else if (isMyCompany) {
      return "my-selected-company";
    } else if (isSelected) {
      return "select-complete-button";
    } else {
      return "select-button";
    }
  };

  const buttonText = getButtonText();
  const buttonClassName = getButtonClassName();

  return (
    <div className="company-item-form">
      <div className="company-info">
        <img className="company-logo" src={company.image} alt={company.name} />
        <div className="company-content">
          <p className="company-name">{company.name}</p>
          <p className="company-category">{company.category}</p>
        </div>
      </div>
      <ActionButton
        className={buttonClassName}
        text={buttonText}
        option={`${
          buttonClassName === "select-complete-button" ? "complete" : ""
        }`}
        onClick={handleSelect}
      />
    </div>
  );
}

export default CompanyItem;
