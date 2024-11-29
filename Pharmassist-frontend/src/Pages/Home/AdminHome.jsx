import React from "react";
import {
  FaUsers,
  FaPrescriptionBottle,
  FaCalendarAlt,
  FaBell,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  // Sample data (to be replaced with actual data from API or state)
  const sampleMetrics = {
    totalPatients: 120,
    totalPharmacists: 10,
    pendingAppointments: 15,
    lowStockMedicines: 5,
  };

  const notifications = [
    "New prescription submitted by Dr. Smith.",
    "Appointment confirmed for John Doe at 2 PM.",
    "Medicine stock alert: Paracetamol running low.",
  ];

  const chartData = {
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        label: "Appointments",
        data: [65, 15, 10], // Sample data
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  };

  const quickLinks = [
    { name: "Manage Users", icon: <FaUsers />, path: "/manage-users" },
    { name: "View Prescriptions", icon: <FaPrescriptionBottle />, path: "/prescriptions" },
    { name: "Appointments", icon: <FaCalendarAlt />, path: "/appointments" },
    { name: "Notifications", icon: <FaBell />, path: "/notifications" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Good Morning, Admin!</h1>
          <p className="text-gray-600">Here’s what’s happening today.</p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <FaUsers className="text-blue-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{sampleMetrics.totalPatients}</h2>
            <p className="text-gray-600">Total Patients</p>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <FaPrescriptionBottle className="text-green-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{sampleMetrics.totalPharmacists}</h2>
            <p className="text-gray-600">Total Pharmacists</p>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <FaCalendarAlt className="text-yellow-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{sampleMetrics.pendingAppointments}</h2>
            <p className="text-gray-600">Pending Appointments</p>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <FaBell className="text-red-500 text-4xl mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{sampleMetrics.lowStockMedicines}</h2>
            <p className="text-gray-600">Low Stock Medicines</p>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">System Analytics</h2>
        <Pie data={chartData} options={chartOptions} />
      </section>

      {/* Notifications Section */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Notifications</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {notifications.map((note, index) => (
            <li key={index} className="mb-2">
              {note}
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Links */}
      <section className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg flex flex-col items-center shadow-sm"
            >
              {link.icon}
              <span className="mt-2 text-gray-700 text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
