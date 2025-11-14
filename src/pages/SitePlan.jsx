import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import sitePlanImg from "../assets/siteplan/large-plan.jpg";
import room1 from "../assets/siteplan/room1.jpg";
import room2 from "../assets/siteplan/room2.jpg";
import room3 from "../assets/siteplan/room3.jpg";
import room4 from "../assets/siteplan/room4.jpg";

const salesData = [
  { name: "2018", value: 400 },
  { name: "2019", value: 300 },
  { name: "2020", value: 500 },
  { name: "2021", value: 350 },
  { name: "2022", value: 450 },
];

const COLORS = ["#3B9797", "#16476A", "#132440", "#BF092F", "#6A9C77"];

const SitePlan = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen pt-0 bg-gray-50" id="siteplan">
      <section className="py-24 bg-gradient-to-br from-white via-color-1/10 to-color-1/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-color-3 mb-6 tracking-tight">Location & Connectivity</h2>
            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <li>➤ Situated at NH-24, Ghaziabad.</li>
              <li>➤ Proposed 14 Lane NH-24 Express Way</li>
              <li>➤ 02 min. drive from Columbia Asia Hospital</li>
              <li>➤ 05 min. drive from Lal Kaun</li>
              <li>➤ 10 min. drive from Noida</li>
              <li>➤ 15 min. drive from Old Railway Station</li>
            </ul>
          </div>
          <div className="h-96 w-full p-4 rounded-3xl shadow-xl bg-white flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-color-3 text-center mb-6">Sales Graph</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={salesData} dataKey="value" nameKey="name" outerRadius={120} label>
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

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-color-3 text-center mb-8 tracking-tight">Master Site Plan</h2>
          <div className="flex flex-col items-center gap-4">
            <img src={sitePlanImg} alt="Site Plan" className="w-full max-w-4xl rounded-3xl shadow-2xl cursor-pointer transition-transform duration-500 ease-in-out hover:scale-[1.01]" onClick={() => setSelectedImg(sitePlanImg)} />
            <a href={sitePlanImg} download className="text-color-4 font-semibold mt-2">Download Master Plan</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-white via-color-1/10 to-color-1/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-color-3 text-center mb-12 tracking-tight">Room Plans</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ { title: "2 BHK + 2 Toilets", img: room1 }, { title: "3 BHK + 3 Toilets + Store", img: room2 }, { title: "3 BHK + 2 Toilets + Dining", img: room3 }, { title: "4 BHK + 4 Toilets + Dress + Dining", img: room4 } ].map((room, i) => (
              <div key={i} className="rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl flex flex-col overflow-hidden transform hover:-translate-y-2 bg-gradient-to-br from-color-1/10 via-white to-color-1/10">
                <div className="p-4 w-full">
                  <img src={room.img} alt={room.title} className="w-full h-auto object-contain cursor-pointer" onClick={() => setSelectedImg(room.img)} />
                </div>
                <div className="p-6 pt-0 w-full text-center">
                  <h3 className="text-2xl font-bold text-color-3 mb-2">{room.title}</h3>
                  <a href={room.img} download className="text-color-4 font-semibold">Download Floor Plan</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <div className="bg-white rounded-2xl overflow-auto max-w-4xl w-full">
            <img src={selectedImg} alt="Selected" className="w-full h-auto rounded-2xl" />
            <div className="p-4 text-right">
              <a href={selectedImg} download className="px-4 py-2 bg-color-4 text-white rounded-lg">Download</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SitePlan;
