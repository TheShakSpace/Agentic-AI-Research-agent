// This is the main Home component for the AI Research Agent
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-3xl font-bold">AI Research Agent</h1>
        <p className="text-gray-600 mt-2">
          Give me a mission and I’ll generate a research plan + report.
        </p>

        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">
            Research Mission
          </label>
          <textarea
            className="mt-2 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-black/20"
            rows={4}
            placeholder="Example: Research best AI tools for students in 2026..."
          />
        </div>

        <button className="mt-4 w-full rounded-xl bg-black text-white py-3 font-medium hover:opacity-90">
          Generate Plan
        </button>

        <div className="mt-6 rounded-xl border p-4 bg-gray-50">
          <p className="text-sm text-gray-500">
            Output will appear here in Phase 1 ✅
          </p>
        </div>
      </div>
    </main>
  );
}
