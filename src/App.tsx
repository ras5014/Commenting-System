function App() {
  return (
    <div className="bg-slate-900 text-slate-100 text-center space-y-8 h-screen flex flex-col">
      <h1 className="text-3xl font-bold mt-8">N-Level Commenting System</h1>
      <div className="flex gap-4 justify-center items-center">
        <input className="bg-slate-900 text-slate-100 border border-slate-700 rounded-md p-2 transition-all hover:border-slate-500" type="text" placeholder="type..." />
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all hover:scale-105">Comment</button>
      </div>
    </div>
  )
}

export default App
