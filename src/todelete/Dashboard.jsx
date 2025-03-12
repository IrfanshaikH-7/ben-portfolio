// Dashboard.jsx
import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings';
import AddBlog from './pages/AddBlogs';

const Sidebar = () => {
  return (
    <div className="h-screen w-60 py-14 px-4 gap-2 bg-black flex flex-col">
      <Link to="/dashboard/settings">Settings</Link>
      <Link to="/dashboard/add-blog">Add Blog</Link>
    </div>
  );
};

const DashboardHome = () => <h2>Dashboard Home</h2>;

export default function Dashboard() {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="flex-1 py-14">
        <Routes>
          <Route index element={<DashboardHome />} /> {/* Changed to index */}
          <Route path="settings" element={<Settings />} /> {/* Removed leading slash */}
          <Route path="add-blog" element={<AddBlog />} /> {/* Removed leading slash */}
        </Routes>
      </div>
    </div>
  )
}
