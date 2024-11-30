export default function Buttons({ step, setStep }) {
  const buttonStyle = { backgroundColor: "#7950f2", color: "#fff" };

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  return (
    <div className="buttons">
      <button style={step >= 2 ? buttonStyle : {}} onClick={handlePrevious}>
        Previous
      </button>
      <button style={step <= 2 ? buttonStyle : {}} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
