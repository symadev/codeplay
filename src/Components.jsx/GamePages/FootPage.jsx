const FootPage = () => {
  return (
    <footer className="w-full py-5 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-center text-sm text-blue-100 select-none border-t border-blue-700 shadow-inner">
      <p className="tracking-wide font-medium">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-300 font-bold hover:text-cyan-400 transition-colors">
          CodePlay
        </span>{" "}
        – <span className="text-purple-300">Learn to code by playing</span>! &nbsp;|&nbsp;
        <span className="text-pink-400 animate-pulse">Made with ❤️</span>
      </p>
    </footer>
  );
};

export default FootPage;
