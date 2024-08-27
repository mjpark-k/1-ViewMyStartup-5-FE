import { ActionButton } from '../../Buttons/ActionButton.js';
import './DeleteFailForm.css';

export default function DeleteFailForm({ onClick }) {
  return (
    <>
      <div className="delete-fail-form">
        <div className="delete-fail-text">
          잘못된 비밀번호로 삭제에 실패하셨습니다.
        </div>
        <ActionButton
          text={'확인'}
          className={'modal-button'}
          onClick={onClick}
        />
      </div>
    </>
  );
}
