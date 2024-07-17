"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";

const steps = [
  { label: "Basic" },
  { label: "Location" },
  { label: "Features" },
  { label: "Pictures" },
  { label: "Contact" },
];

const AddPropertyForm = () => {
  const [step, setStep] = useState(0);
  return (
    <div>
      <Stepper items={steps} activeItem={step} setActiveItem={setStep} />
      <button onClick={() => setStep((prev) => prev + 1)}>next</button>
    </div>
  );
};

export default AddPropertyForm;
