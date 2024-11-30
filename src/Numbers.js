export default function Numbers({ step, setStep }) {
  return (
    <div className="numbers">
      <div
        className={step >= 1 ? "active" : ""}
        onClick={() => setStep((s) => (s = 1))}
      >
        1
      </div>
      <div
        className={step >= 2 ? "active" : ""}
        onClick={() => setStep((s) => (s = 2))}
      >
        2
      </div>
      <div
        className={step >= 3 ? "active" : ""}
        onClick={() => setStep((s) => (s = 3))}
      >
        3
      </div>
    </div>
  );
}
