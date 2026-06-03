import "./button.css";
const paddingStyle = {
  sm: "10px",
  md: "10px 100px",
};
export function Button({ text, color, size = "sm" , onClick }) {
  return (
    <>
      <button onClick={onClick} style={{ background: color, padding: paddingStyle[size] }}>
        {text}
      </button>
    </>
  );
}
