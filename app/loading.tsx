export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <div className="w-8 h-8 bg-white rounded-full animate-ping"></div>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Loading AssetSync</h2>
        <p className="text-gray-400">Syncing your portfolio...</p>
      </div>
    </div>
  );
}
