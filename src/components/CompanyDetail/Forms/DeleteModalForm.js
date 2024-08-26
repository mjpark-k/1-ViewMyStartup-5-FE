import { ActionButton } from '../../Buttons/ActionButton.js';
import { PasswordInput } from '../Inputs/Inputs.js';
import './DeleteModalForm.css';

export default function DeleteModalForm({ onClick, passwordChange }) {
  return (
    <>
      <form className="delete-modal-form">
        <div className="form-text">삭제 권한 인증</div>
        <PasswordInput
          text={'비밀번호'}
          placeholder={'비밀번호를 입력해주세요'}
          passwordChange={passwordChange}
        />
        <ActionButton
          text={'삭제하기'}
          className={'modal-button'}
          onClick={onClick}
        />
      </form>
    </>
  );
}
