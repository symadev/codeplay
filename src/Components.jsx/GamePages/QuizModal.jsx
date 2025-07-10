import React, { useEffect, useState } from "react";

const QuizModal = ({ visible, onClose, quizData, onAnswerCorrect, onAnswerWrong }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  const playSound = (path) => {
    const audio = new Audio(path);
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    if (visible) {
      playSound("/public/audios/popup.mp3");
      setSelectedOption(null);
      setFeedback("");
    }
  }, [visible]);

  if (!visible || !quizData) return null;

  const handleSubmit = () => {
    if (!selectedOption) {
      setFeedback("Please select an option");
      return;
    }

    if (selectedOption === quizData.answer) {
      setFeedback("🎉 Correct!");
      
      setTimeout(() => {
        onAnswerCorrect();  // tell parent it's correct
        onClose();          // close modal
        setFeedback("");
      }, 1000);
    } else {
      setFeedback("❌ Wrong! Try again");
      playSound("/audios/error.mp3");
      onAnswerWrong();      // tell parent it's wrong
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/60 to-blue-900/80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gradient-to-br from-slate-800 via-indigo-900 to-blue-900 text-white p-8 rounded-3xl w-full max-w-md border border-indigo-400/30 relative shadow-2xl shadow-indigo-500/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-indigo-300 hover:text-white text-2xl transition-all duration-300 hover:rotate-90 hover:scale-110"
        >
          &times;
        </button>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-lg"></div>

        {/* Quiz Icon and Title */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Quiz Challenge
          </h2>
          <p className="text-sm text-indigo-200 mt-2">
            Test your knowledge
          </p>
        </div>

        {/* Question */}
        <div className="text-center mb-6 relative z-10">
          <h3 className="text-xl font-bold text-white">{quizData.question}</h3>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6 relative z-10">
          {quizData.options.map((option, index) => (
            <div key={index} className="relative">
              <input
                type="radio"
                name="quizOption"
                value={option}
                id={`option-${index}`}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="sr-only"
              />
              <label
                htmlFor={`option-${index}`}
                className={`block w-full px-4 py-3 rounded-xl border cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                  selectedOption === option
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-indigo-400 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-slate-800/50 border-indigo-500/30 text-indigo-200 hover:border-indigo-400/50 hover:bg-slate-700/50"
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${
                    selectedOption === option
                      ? "border-white bg-white"
                      : "border-indigo-300 bg-transparent"
                  }`}>
                    {selectedOption === option && (
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </label>
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className="text-center mb-6 relative z-10">
            <p className={`font-semibold text-lg ${
              feedback.includes("Correct") ? "text-green-400" : "text-red-400"
            }`}>
              {feedback}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3 relative z-10">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-slate-700/50 border border-indigo-500/30 rounded-xl text-indigo-200 hover:bg-slate-600/50 hover:border-indigo-400/50 transition-all duration-300 backdrop-blur-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              selectedOption 
                ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transform hover:scale-105 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50" 
                : "bg-gray-500/50 cursor-not-allowed text-gray-400 border border-gray-600/30"
            }`}
            disabled={!selectedOption}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Submit
            </span>
          </button>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default QuizModal;