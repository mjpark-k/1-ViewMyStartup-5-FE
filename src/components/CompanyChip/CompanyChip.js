import "./CompanyChip.css";
import deleteChip from "../../images/delete-chip.svg";
import ChipContent from "../ChipContent/ChipContent";

function CompanyChip({ company, onDelete }) {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(company.id);
    }
  };

  return (
    <div className="chip-container">
      <img
        className="delete-chip"
        src={deleteChip}
        alt="delete-chip"
        onClick={handleDelete}
      />
      <ChipContent className="chip-inside" company={company} />
    </div>
  );
}

export default CompanyChip;
