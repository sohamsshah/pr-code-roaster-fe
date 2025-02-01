import React from 'react';
import ReactMarkdown from 'react-markdown';

const Results = ({ result }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
      <h2 className="text-3xl text-gray-800 font-bold mb-8">
        Analysis Results 🚀
      </h2>
      <div className="max-w-none">
        <div className="space-y-4">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 {...props} className="text-3xl font-bold text-gray-800 mb-4" />
              ),
              h2: ({ node, ...props }) => (
                <h2 {...props} className="text-2xl font-semibold text-gray-800 mb-3" />
              ),
              h3: ({ node, ...props }) => (
                <h3 {...props} className="text-2xl font-semibold text-gray-800 mb-3" />
              ),
              p: ({ node, ...props }) => (
                <p {...props} className="text-gray-700 leading-relaxed mb-4" />
              ),
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code
                    {...props}
                    className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-sm"
                  />
                ) : (
                  <code
                    {...props}
                    className="block p-4 bg-gray-800 text-gray-100 rounded-xl overflow-x-auto text-sm"
                  />
                ),
              ul: ({ node, ...props }) => (
                <ul {...props} className="list-disc list-inside space-y-2 text-gray-700" />
              ),
              ol: ({ node, ...props }) => (
                <ol {...props} className="list-decimal list-inside space-y-2 text-gray-700" />
              ),
              li: ({ node, ...props }) => (
                <li {...props} className="text-gray-700" />
              ),
            }}
          >
            {result}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Results;
