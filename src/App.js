import { useState } from "react";
import Numbers from "./Numbers";
import Buttons from "./Buttons";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <Numbers step={step} setStep={setStep} />

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <Buttons step={step} setStep={setStep} />
        </div>
      )}
    </>
  );
}
