import "./ActionButton.css";

export function ActionButton({ className, text, onClick, option }) {
  return (
    <button className={className} onClick={onClick} type="button">
      {option === "initialization" || "complete" ? (
        <div className={`${option}-box`}>
          <div className={option} />
          {text}
        </div>
      ) : (
        text
      )}
    </button>
  );
}
//모달이 있는 페이지의 경우 스타일이 다르기 때문에 className 따로 지정
//option 값은 초기화 버튼( 'initialization' )
