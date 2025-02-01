import React from 'react';


const Input = ({ prLink, setPrLink, handleSubmit, loading }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={prLink}
            onChange={(e) => setPrLink(e.target.value)}
            placeholder="Paste your PR link here"
            className="w-full h-16 pl-6 pr-36 text-lg rounded-2xl bg-white/50 border-2 border-purple-300/50 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 placeholder:text-gray-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </span>
            ) : (
              'Analyze PR 🔥'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
