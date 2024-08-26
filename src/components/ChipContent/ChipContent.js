import "./ChipContent.css";
import imgTest from "../../images/img-test.svg";

function ChipContent({ className, company }) {
  return (
    <div className={className}>
      <div className="chip-info">
        <img className="chip-logo" src={imgTest} alt="imgTest" />
        <div className="chip-content">
          <p className="chip-name">{company.name}</p>
          <p className="chip-category">{company.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ChipContent;
