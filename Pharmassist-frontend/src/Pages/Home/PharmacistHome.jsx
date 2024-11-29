import React from "react";
import { FaUsers, FaCapsules, FaCalendarAlt, FaBell, FaPlusCircle } from "react-icons/fa";
import { Chart } from "react-chartjs-2"; // Example: Chart.js for analytics
import "chart.js/auto"; // Required for Chart.js

const PharmacistHome = () => {
  // Sample data (replace with API/state data)
  const overviewMetrics = {
    totalPharmacists: 5,
    activePharmacists: 2,
    pendingPrescriptions: 25,
    lowStockMedicines: 8,
  };

  const recentNotifications = [
    "Pharmacist John updated stock levels for Ibuprofen.",
    "Low stock alert: Paracetamol below 10 units.",
    "New prescription processed by Dr. Emily.",
  ];

  const prescriptionChartData = {
    labels: ["Processed", "Pending", "Rejected"],
    datasets: [
      {
        label: "Prescriptions",
        data: [150, 25, 5], // Sample data
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  const quickLinks = [
    { name: "Manage Pharmacists", icon: <FaUsers />, path: "/manage-pharmacists" },
    { name: "Stock Levels", icon: <FaCapsules />, path: "/stock-levels" },
    { name: "Appointments", icon: <FaCalendarAlt />, path: "/appointments" },
    { name: "Notifications", icon: <FaBell />, path: "/notifications" },
  ];

  const pharmacistTableData = [
    { name: "John Doe", status: "Active", prescriptionsHandled: 150, lastLogin: "Today, 10:00 AM" },
    { name: "Jane Smith", status: "Inactive", prescriptionsHandled: 80, lastLogin: "Yesterday, 5:30 PM" },
    { name: "Mike Brown", status: "Active", prescriptionsHandled: 120, lastLogin: "Today, 11:00 AM" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back !</h1>
          <p className="text-gray-600">Here's an overview of the pharmacy management system.</p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Total Pharmacists", value: overviewMetrics.totalPharmacists, color: "blue", icon: <FaUsers /> },
          { title: "Active Pharmacists", value: overviewMetrics.activePharmacists, color: "green", icon: <FaCapsules /> },
          { title: "Pending Prescriptions", value: overviewMetrics.pendingPrescriptions, color: "yellow", icon: <FaCalendarAlt /> },
          { title: "Low Stock Medicines", value: overviewMetrics.lowStockMedicines, color: "red", icon: <FaBell /> },
        ].map((card, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg flex items-center">
            <div className={`text-${card.color}-500 text-4xl mr-4`}>{card.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{card.value}</h2>
              <p className="text-gray-600">{card.title}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Analytics Section */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Prescription Analytics</h2>
        <Chart
          type="pie"
          data={prescriptionChartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "bottom" },
            },
          }}
        />
      </section>

      {/* Notifications Section */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Notifications</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {recentNotifications.map((notification, index) => (
            <li key={index} className="mb-2">
              {notification}
            </li>
          ))}
        </ul>
      </section>

      {/* Manage Pharmacists Section */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Pharmacists</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-3 text-left">Name</th>
              <th className="border-b p-3 text-left">Status</th>
              <th className="border-b p-3 text-left">Prescriptions Handled</th>
              <th className="border-b p-3 text-left">Last Login</th>
            </tr>
          </thead>
          <tbody>
            {pharmacistTableData.map((pharmacist, index) => (
              <tr key={index}>
                <td className="border-b p-3">{pharmacist.name}</td>
                <td className="border-b p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      pharmacist.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {pharmacist.status}
                  </span>
                </td>
                <td className="border-b p-3">{pharmacist.prescriptionsHandled}</td>
                <td className="border-b p-3">{pharmacist.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default PharmacistHome;
