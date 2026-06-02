import "./button.css";
const paddingStyle ={
    sm : '10px',
    md : '20px',
    lg: '30px',
}
export function Button({ text, color, size = "md" }) {
  return (
    <>
      <button style={{ background: color , padding: paddingStyle[size] }}>{text}</button>
    </>
  );
}
