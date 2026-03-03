import React from "react";

export default function StudentAttendanceDashboard() {
  const student = {
    name: "VINAY KAKARLA",
    regNo: "2500031657",
    department: "CSE",
  };

  const subjects = [
    { name: "Mathematics", attendance: 82 },
    { name: "Data Structures", attendance: 74 },
    { name: "Operating Systems", attendance: 65 },
    { name: "Database Systems", attendance: 58 },
    { name: "Computer Networks", attendance: 91 },
  ];

  const getColor = (percentage) => {
    if (percentage > 75)
      return "bg-green-50 border-green-800 text-green-900";
    if (percentage >= 60)
      return "bg-yellow-50 border-yellow-700 text-yellow-900";
    return "bg-red-50 border-red-800 text-red-900";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navigation Bar */}
      <nav className="bg-slate-900 text-white p-4 shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-wide">
            KL University - Attendance Dashboard
          </h1>
        </div>

        <div className="text-sm mt-3 text-center">
          <p><span className="font-semibold">Name:</span> {student.name}</p>
          <p><span className="font-semibold">Reg No:</span> {student.regNo}</p>
          <p><span className="font-semibold">Dept:</span> {student.department}</p>
        </div>
      </nav>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto mt-10 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border-l-4 shadow-md ${getColor(
              subject.attendance
            )}`}
          >
            <h2 className="text-lg font-semibold mb-3">
              {subject.name}
            </h2>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">
                Attendance
              </span>

              <span className="text-xl font-bold">
                {subject.attendance}%
              </span>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}