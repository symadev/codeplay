import React, { useEffect, useState } from "react";

const QuizModal = ({ visible, onClose, quizData, onAnswerCorrect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    console.log("Quiz data in modal:", quizData);
    console.log("Quiz data type:", typeof quizData);
    console.log("Options:", quizData?.options);
    console.log("Options type:", typeof quizData?.options);
    console.log("Is options array:", Array.isArray(quizData?.options));
    if (quizData?.options) {
      console.log("Options length:", quizData.options.length);
      console.log("Options content:", quizData.options);
    }
  }, [quizData]);

  // Reset selected option when quiz data changes
  useEffect(() => {
    setSelectedOption(null);
    setFeedback("");
  }, [quizData]);

  if (!visible || !quizData) {
    console.log("Modal not visible or no quiz data");
    return null;
  }

  if (!quizData.options || !Array.isArray(quizData.options)) {
    console.log("Options not found or not an array:", quizData.options);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl border border-red-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 via-transparent to-red-400/10 rounded-2xl pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-200 via-red-100 to-red-200 bg-clip-text text-transparent">
              Error: Quiz options not found
            </h2>
            <p className="text-gray-200 mb-6">Quiz data: {JSON.stringify(quizData)}</p>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!selectedOption) {
      setFeedback("Please select an option");
      return;
    }

    console.log("Selected option:", selectedOption);
    console.log("Correct answer:", quizData.answer);

    if (selectedOption === quizData.answer) {
      setFeedback("Right Answer!!");
      setTimeout(() => {
        setFeedback("");
        onAnswerCorrect(); // allow robot to move to goal
        onClose(); // close modal
      }, 1000);
    } else {
      setFeedback("Wrong! Try Again");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 rounded-2xl p-8 w-[90%] max-w-lg shadow-2xl border border-blue-500/20 transform transition-all duration-300 hover:scale-[1.02]">
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10 rounded-2xl pointer-events-none"></div>
        
        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="text-sm text-blue-300 font-medium bg-blue-800/50 px-3 py-1 rounded-full border border-blue-500/30">
              Quiz Time
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            {quizData.question}
          </h2>
        </div>
        
        {/* Options with enhanced styling */}
        <div className="space-y-3 mb-6 relative z-10">
          {quizData.options.map((option, index) => (
            <div 
              key={index} 
              className={`group relative flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                selectedOption === option 
                  ? 'border-blue-400 bg-gradient-to-r from-blue-700/50 to-blue-600/50 shadow-lg shadow-blue-500/30' 
                  : 'border-gray-500/30 bg-white/10 hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-700/30 hover:to-blue-600/30'
              }`}
              onClick={() => setSelectedOption(option)}
            >
              <div className="relative">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="quiz"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                  selectedOption === option 
                    ? 'border-blue-400 bg-gradient-to-r from-blue-400 to-blue-500' 
                    : 'border-gray-400 bg-white/20 group-hover:border-blue-400'
                }`}>
                  {selectedOption === option && (
                    <div className="w-2 h-2 bg-white rounded-full transform scale-100 transition-transform duration-200"></div>
                  )}
                </div>
              </div>
              
              <label 
                htmlFor={`option-${index}`}
                className="cursor-pointer text-gray-100 font-medium flex-1 transition-colors group-hover:text-blue-200"
              >
                {option}
              </label>
              
              {/* Subtle arrow indicator */}
              <div className={`transition-all duration-300 ${
                selectedOption === option ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              }`}>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback section */}
        {feedback && (
          <div className={`relative z-10 mb-6 p-4 rounded-xl border-l-4 ${
            feedback.includes("Right") 
              ? "bg-gradient-to-r from-green-800/50 to-emerald-800/50 border-green-400 text-green-200" 
              : "bg-gradient-to-r from-red-800/50 to-rose-800/50 border-red-400 text-red-200"
          }`}>
            <p className="font-semibold flex items-center gap-2">
              {feedback}
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-end gap-3 mt-8 relative z-10">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Reject
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
              selectedOption
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg shadow-blue-500/25'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default QuizModal;