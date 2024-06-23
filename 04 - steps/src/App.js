import { useState } from "react";

const messages = ["laern react ", "get a job ", "invest money "];

export default function App() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "zac" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    if (step === 3) setTest({ name: "Zac" });
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    if (step === 2) setTest({ name: "fred" });
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        X
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1.</div>
            <div className={step >= 2 ? "active" : ""}>2.</div>
            <div className={step >= 3 ? "active" : ""}>3.</div>
          </div>

          <p className="message">
            Step: {step} {messages[step - 1]}
            {test.name}
          </p>

          <div className="buttons">
            <button onClick={handlePrevious} style={{ backgroundColor: "#7950f2", color: "#fff" }}>
              previous
            </button>
            <button onClick={handleNext} style={{ backgroundColor: "#7950f2", color: "#fff" }}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
