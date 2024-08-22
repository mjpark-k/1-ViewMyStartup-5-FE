import './Inputs.css';

export function PasswordInput({ text, placeholder, passwordChange }) {
  return (
    <>
      <label htmlFor="password-input">{text}</label>
      <div className="password-input-box">
        <input
          className="password-input"
          type="password"
          placeholder={placeholder}
          onChange={passwordChange}
        ></input>
        <div className="password-eye" />
      </div>
    </>
  );
}
