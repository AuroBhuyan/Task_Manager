import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {Toaster} from "sonner";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TaskDetails from "./pages/TaskDetails";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function Layout() {
  const { user } = useSelector((state) => state.auth);

  const location=useLocation()
   return user ? (
      <div className="w-full h-screen flex-col md:flex-row">
        <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
          <Sidebar />
        </div>
        {/* <MobileSidebar /> */}
        <div className="flex-1 overflow-y-auto">
          <Navbar/>
          <div className="p-4 2x1:px-10">
            <Outlet />
          </div>
        </div>
      </div>
   ): (
    <Navigate to="/log-in" state={{from: location}} replace />
   )
}
function App() {
  return( 
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>
        <Route path="/log-in" element={<Login />} />
    </Routes>

    <Toaster richColors />
    </main>
  )
}

export default App;
