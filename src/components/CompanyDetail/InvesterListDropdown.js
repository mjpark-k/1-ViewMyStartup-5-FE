import './InvesterListDropdown.css';

export default function InvesterListDropdown({
  display,
  onClick,
  deleteModalClick,
}) {
  return (
    <div className="invester-list-dropdown" style={{ display: display }}>
      <button className="invester-list-edit" onClick={onClick}>
        수정하기
      </button>
      <button className="invester-list-delete" onClick={deleteModalClick}>
        삭제하기
      </button>
    </div>
  );
}
