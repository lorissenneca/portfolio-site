import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const DeploySimulator = () => {
  const [stage, setStage] = useState(null);
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("");
  const [showFireworks, setShowFireworks] = useState(false);

  const stages = [
    "Starting deployment...",
    "Building artifacts...",
    "Running unit tests...",
    "Deploying to production...",
    "Finalizing...",
  ];

  const outcomes = [
    "Deployment succeeded! 🎉 Servers are happy.",
    "Deployment failed! 😢 Rolling back changes...",
    "Deployed to production accidentally! 🚨 Panic mode activated.",
  ];

  const startDeployment = async () => {
    setLogs([]);
    setStatus("");
    setStage(0);
    setShowFireworks(false);

    for (let i = 0; i < stages.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setLogs((prev) => [...prev, stages[i]]);
      setStage(i + 1);
    }

    // Show final outcome
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    setStatus(outcome);

    // Trigger fireworks on success
    if (outcome.includes("succeeded")) {
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 5000); // Stop fireworks after 5 seconds
      window.scrollTo(0, 0)
    }
  };

  return (
    <div className=" px-4 py-6 bg-[#161513]  text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Push to Deploy</h2>
      <p className="text-sm mb-4">
        Click the button below to experience a DevOps deployment. (Warning: Chaos likely!)
      </p>
      <button
        onClick={startDeployment}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-md"
      >
        Deploy Now
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Deployment Logs</h3>
        <div className="bg-[#161513] p-4 rounded-md mt-2 h-40 overflow-y-auto">
          {logs.map((log, index) => (
            <p key={index} className="text-sm text-gray-300">
              {log}
            </p>
          ))}
        </div>
      </div>

      {status && (
        <div
          className={`mt-4 p-4 rounded-md ${
            status.includes("succeeded")
              ? "bg-green-600"
              : status.includes("failed")
              ? "bg-red-600"
              : "bg-yellow-600"
          }`}
        >
          {status}
        </div>
      )}

      {showFireworks && <Confetti />}
    </div>
  );
};

export default DeploySimulator;
