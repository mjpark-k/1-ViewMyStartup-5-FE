import "./CompanyItem.css";
import imgTest from "../../images/img-test.svg";
import { ActionButton } from "../Buttons/ActionButton";

function CompanyItem({
  company,
  onSelect,
  isSelected,
  onDelete,
  selectCancel,
}) {
  const handleSelect = () => {
    if (!isSelected) {
      onSelect(company.name);
    } else if (selectCancel && onDelete) {
      onDelete(company.id);
    }
  };

  const getButtonText = () => {
    if (selectCancel) {
      return "선택해제";
    } else if (isSelected) {
      return "선택완료";
    } else {
      return "선택하기";
    }
  };

  const getButtonClassName = () => {
    let className = isSelected ? "select-complete-button" : "select-button";
    if (selectCancel) {
      className += " cancel";
    }
    return className;
  };

  const buttonText = getButtonText();
  const buttonClassName = getButtonClassName();

  return (
    <div className="company-item-form">
      <div className="company-info">
        <img className="company-logo" src={imgTest} alt="imgTest" />
        <div className="company-content">
          <p className="company-name">{company.name}</p>
          <p className="company-category">{company.category}</p>
        </div>
      </div>
      <ActionButton
        className={buttonClassName}
        text={buttonText}
        onClick={handleSelect}
      />
    </div>
  );
}

export default CompanyItem;
