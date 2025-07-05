import React from 'react';

const Banner = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-10 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-32 right-20 w-6 h-6 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute bottom-32 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-70 animate-bounce delay-300"></div>
                <div className="absolute top-48 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-pulse delay-500"></div>
                <div className="absolute bottom-48 right-1/4 w-5 h-5 bg-orange-400 rounded-full opacity-50 animate-bounce delay-700"></div>

                {/* Larger floating elements */}
                <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 animate-pulse transform rotate-12"></div>
                <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl opacity-15 animate-bounce transform -rotate-12"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 min-h-screen">
                    {/* Left content */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                                <span className="block">  Welcome to </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    CodePlay
                                </span>

                            </h1>
                            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                                A fun and interactive coding game where you guide a robot to its goal using logic and drag-and-drop commands.
                                Learn the basics of programming, solve challenges, and unlock rewards — all while playing!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                🚀 Start Playing
                            </button>
                            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:border-white/40 transition-all duration-300">
                                🔍 Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right content with floating command blocks */}
                    <div className="lg:w-1/2 relative">
                        {/* Main character area */}
                        <div className="relative flex justify-center items-center">
                            {/* Game board with shadow effect */}
                            <div className="relative transform hover:scale-105 transition-transform duration-300">
                                {/* Board shadow */}
                                <div className="absolute inset-0 rounded-3xl backdrop-blur-sm transform rotate-3 translate-x-4 translate-y-4"></div>

                                {/* Main board image */}
                                <img
                                    src="/src/assets/images/board-2.png"
                                    alt="Game Board"
                                    className="relative z-10 w-100 h-100 object-cover "
                                />

                                {/* Robot floating on the board */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 robot-container">
                                    <div className="relative">
                                        {/* Robot glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>

                                        {/* Robot image */}
                                        <img
                                            src="/src/assets/images/robot.png"
                                            alt="Robot Character"
                                            className="relative z-10 w-20 h-20 object-contain animate-bounce drop-shadow-2xl"
                                        />

                                        {/* Floating animation shadow */}
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black/20 rounded-full blur-sm animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom CSS for robot animation */}
                        <style jsx>{`
                            @keyframes moveLeftRight {
                                0% { transform: translate(-50%, -50%) translateX(-40px); }
                                50% { transform: translate(-50%, -50%) translateX(40px); }
                                100% { transform: translate(-50%, -50%) translateX(-40px); }
                            }
                            
                            .robot-container {
                                animation: moveLeftRight 3s ease-in-out infinite;
                            }
                        `}</style>

                        {/* Floating command blocks */}
                        <div className="absolute -top-8 -left-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg animate-bounce transform rotate-12">
                            Move forward
                        </div>

                        <div className="absolute -top-4 -right-12 bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg animate-pulse transform -rotate-12">
                            Turn left
                        </div>

                        <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg animate-bounce delay-300 transform rotate-6">
                            Right
                        </div>

                        <div className="absolute bottom-12 -left-12 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg animate-pulse delay-500 transform -rotate-6">
                            Loop 3x
                        </div>

                        {/* Chat bubble */}
                        <div className="absolute top-16 right-8 bg-white rounded-2xl p-4 shadow-lg max-w-xs transform rotate-3">
                            <div className="text-sm text-gray-700 mb-2">
                                The robot wants to jump 5 times to reach the goal. Which loop should it use?
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <span>AI Helper</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
    );
};

export default Banner;