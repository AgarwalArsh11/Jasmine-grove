import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Import images
import sitePlanImg from "../assets/siteplan/large-plan.jpg";
import room1 from "../assets/siteplan/room1.jpg";
import room2 from "../assets/siteplan/room2.jpg";
import room3 from "../assets/siteplan/room3.jpg";
import room4 from "../assets/siteplan/room4.jpg";

// Chart Data
const salesData = [
  { name: "2018", value: 400 },
  { name: "2019", value: 300 },
  { name: "2020", value: 500 },
  { name: "2021", value: 350 },
  { name: "2022", value: 450 },
];

const COLORS = ["#4F86F7", "#FF6B6B", "#A78BFA", "#FDBA74", "#8B5CF6"];

const SitePlan = () => {
  // Modal state
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen pt-20">

      {/* Location & Connectivity */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Location & Connectivity
            </h2>
            <ul className="space-y-3 text-lg text-gray-600">
              <li>➤ Situated at NH-24, Ghaziabad.</li>
              <li>➤ Proposed 14 Lane NH-24 Express Way</li>
              <li>➤ 02 min. drive from Columbia Asia Hospital</li>
              <li>➤ 05 min. drive from Lal Kaun</li>
              <li>➤ 10 min. drive from Noida</li>
              <li>➤ 15 min. drive from Old Railway Station</li>
              <li>➤ 02 min. drive from Schools like Ryan International, Gurukul, DPS</li>
              <li>➤ 02 min. drive from Engineering, Medical & Management Colleges</li>
            </ul>
          </div>

          <div className="h-80">
            <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">
              Sales Graph
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Large Site Plan */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Master Site Plan
          </h2>
          <img
            src={sitePlanImg}
            alt="Site Plan"
            className="w-full rounded-3xl shadow-2xl cursor-pointer hover:opacity-90"
            onClick={() => setSelectedImg(sitePlanImg)}
          />
        </div>
      </section>

      {/* Room Plans */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Room Plans
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "2 BHK + 2 Toilet", img: room1 },
              { title: "3 BHK + 3 Toilets + Store", img: room2 },
              { title: "3 BHK + 2 Toilets + Dining", img: room3 },
              { title: "4 BHK + 4 Toilets + Dress + Dining", img: room4 },
            ].map((room, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center"
              >
                <div className="w-full overflow-hidden rounded-2xl">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImg(room.img)}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mt-4">
                  {room.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Enlarged view"
            className="max-w-5xl max-h-[95vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default SitePlan;
