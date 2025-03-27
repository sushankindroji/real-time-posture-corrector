import React, { useState } from 'react';
import { 
  Home, 
  Camera, 
  Activity, 
  User, 
  Award, 
  Video 
} from 'lucide-react';

// Navigation Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { icon: Home, label: 'Dashboard', tab: 'dashboard' },
    { icon: Camera, label: 'Posture Scan', tab: 'scan' },
    { icon: Activity, label: 'Progress', tab: 'progress' },
    { icon: Award, label: 'Achievements', tab: 'achievements' },
    { icon: User, label: 'Profile', tab: 'profile' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-blue-900 text-white flex flex-col items-center py-6 shadow-lg">
      <div className="mb-8">
        <img 
          src="/api/placeholder/80/80" 
          alt="Posture Improver Logo" 
          className="w-12 h-12 rounded-full"
        />
      </div>
      {navItems.map((item) => (
        <button
          key={item.tab}
          onClick={() => setActiveTab(item.tab)}
          className={`p-3 rounded-lg mb-4 hover:bg-blue-700 transition-all ${
            activeTab === item.tab ? 'bg-blue-600' : ''
          }`}
        >
          <item.icon className="w-6 h-6" />
          <span className="text-xs block mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Posture Journey</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Posture Score Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Posture Score</h2>
          <div className="flex items-center">
            <div className="radial-progress text-4xl font-bold text-blue-600" style={{
              '--value': 75,
              '--size': '100px',
              '--thickness': '10px'
            }}>75%</div>
            <div className="ml-4">
              <p className="text-green-600">Good Alignment</p>
              <p className="text-sm text-gray-500">Improvement from last week</p>
            </div>
          </div>
        </div>

        {/* Quick Scan Button */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">Quick Posture Check</h2>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center">
            <Video className="mr-2" /> Start Scan
          </button>
        </div>

        {/* Recommendation Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Today's Recommendation</h2>
          <div className="flex items-center">
            <img 
              src="/api/placeholder/80/80" 
              alt="Exercise" 
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div>
              <p className="font-medium">Shoulder Stretch</p>
              <p className="text-sm text-gray-500">5 mins | Difficulty: Easy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Posture Scan Component
const PostureScan = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Posture Scan</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center justify-center">
          <Camera className="w-32 h-32 text-blue-600 mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Prepare for Scan</h2>
          <p className="text-gray-600 mb-6 text-center">
            Position yourself in a well-lit area. Make sure your full body is visible to the camera.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
            Start Posture Scan
          </button>
        </div>
      </div>
    </div>
  );
};

// Progress Tracking Component
const ProgressTracking = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Progress Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Posture Improvement</h2>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Award className="mr-2 text-yellow-500" />
              <span>Maintained Good Posture for 7 Days</span>
            </li>
            <li className="flex items-center">
              <Award className="mr-2 text-yellow-500" />
              <span>Completed 10 Stretching Exercises</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Achievements Component
const Achievements = () => {
  const achievements = [
    { title: '7-Day Streak', description: 'Maintained good posture for a week', icon: Award },
    { title: 'Stretching Master', description: 'Completed 10 stretching exercises', icon: Activity },
    { title: 'Posture Pro', description: 'Improved posture by 25%', icon: User }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
            <achievement.icon className="w-12 h-12 text-blue-600 mr-4" />
            <div>
              <h2 className="text-xl font-semibold">{achievement.title}</h2>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Profile Component
const Profile = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <img 
            src="/api/placeholder/120/120" 
            alt="Profile" 
            className="w-24 h-24 rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Posture Improver</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Personal Information</h3>
            <p>Email: john.doe@example.com</p>
            <p>Age: 28</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Posture Stats</h3>
            <p>Total Scans: 24</p>
            <p>Average Posture Score: 72%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Application Component
const PostureImproverApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="ml-20 w-full">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'scan' && <PostureScan />}
        {activeTab === 'progress' && <ProgressTracking />}
        {activeTab === 'achievements' && <Achievements />}
        {activeTab === 'profile' && <Profile />}
      </div>
    </div>
  );
};

export default PostureImproverApp;