export default function Buttons({ step, setStep }) {
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  return (
    <div className="buttons">
      <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handlePrevious}>
        <span>👈</span> Previous
      </Button>
      <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
        Next <span>👉</span>
      </Button>
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  const buttonStyle = { backgroundColor: bgColor, color: textColor };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
