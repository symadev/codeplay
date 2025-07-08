import React, { useEffect, useState } from "react";

const QuizModal = ({ visible, onClose, quizData, onAnswerCorrect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");


  useEffect(() => {
  console.log("Quiz data in modal:", quizData);
}, [quizData]);


if (!visible || !quizData || !Array.isArray(quizData.options)) return null;


  const handleSubmit = () => {
    if (!selectedOption) return;

    if (selectedOption === quizData.answer) {
      setFeedback("Right Answer!!");
      setTimeout(() => {
        setFeedback("");
        onAnswerCorrect(); // allow robot to move to goal
        onClose(); // close modal
      }, 1000);
    } else {
      setFeedback(" Wrong! Try Again");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          {quizData.question}
        </h2>
        <div className="space-y-2">
          {quizData.options.map((option, index) => (
  <div key={index}>
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="quiz"
        value={option}
        checked={selectedOption === option}
        onChange={() => setSelectedOption(option)}
        className="accent-blue-600"
      />
      {option}
    </label>
  </div>
))}

        </div>
        {feedback && <p className="mt-3 font-semibold">{feedback}</p>}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Reject
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
