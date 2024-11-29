import React from "react";
import { FaNotesMedical, FaHeartbeat, FaCalendarAlt, FaFileMedical, FaPlusCircle } from "react-icons/fa";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const PatientHome = () => {
  // Sample Data
  const dashboardMetrics = {
    upcomingAppointments: 2,
    completedAppointments: 12,
    activePrescriptions: 3,
  };

  const healthTips = [
    "Drink at least 8 glasses of water daily to stay hydrated.",
    "Maintain a balanced diet with fruits and vegetables.",
    "Engage in regular physical activity for at least 30 minutes daily.",
  ];

  const appointmentData = [
    {
      date: "20th Nov 2024",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      date: "25th Nov 2024",
      time: "2:00 PM",
      status: "Pending",
    },
  ];

  const prescriptions = [
    { name: "Paracetamol", dosage: "500mg", frequency: "Twice a day" },
    { name: "Amoxicillin", dosage: "250mg", frequency: "Three times a day" },
  ];

  const appointmentChartData = {
    labels: ["Completed", "Upcoming"],
    datasets: [
      {
        label: "Appointments",
        data: [12, 2],
        backgroundColor: ["#4CAF50", "#FFC107"],
      },
    ],
  };

  const quickLinks = [
    { name: "Book Appointment", icon: <FaCalendarAlt />, path: "/book-appointment" },
    { name: "View Prescriptions", icon: <FaFileMedical />, path: "/prescriptions" },
    { name: "Health Tips", icon: <FaHeartbeat />, path: "/health-tips" },
    { name: "Request Refill", icon: <FaPlusCircle />, path: "/request-refill" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard!</h1>
          <p className="text-gray-600">Stay on top of your health and appointments.</p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      {/* Dashboard Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { title: "Upcoming Appointments", value: dashboardMetrics.upcomingAppointments, color: "yellow", icon: <FaCalendarAlt /> },
          { title: "Completed Appointments", value: dashboardMetrics.completedAppointments, color: "green", icon: <FaNotesMedical /> },
          { title: "Active Prescriptions", value: dashboardMetrics.activePrescriptions, color: "blue", icon: <FaFileMedical /> },
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

      {/* Health Tips */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Health Tips</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {healthTips.map((tip, index) => (
            <li key={index} className="mb-2">
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Appointment Details */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-3 text-left">Date</th>
              <th className="border-b p-3 text-left">Time</th>
              <th className="border-b p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointmentData.map((appointment, index) => (
              <tr key={index}>
                <td className="border-b p-3">{appointment.date}</td>
                <td className="border-b p-3">{appointment.time}</td>
                <td className="border-b p-3 text-green-500 font-bold">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Prescriptions */}
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Active Prescriptions</h2>
        <ul className="list-disc pl-5 text-gray-600">
          {prescriptions.map((prescription, index) => (
            <li key={index} className="mb-2">
              {`${prescription.name} - ${prescription.dosage} (${prescription.frequency})`}
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

export default PatientHome;
