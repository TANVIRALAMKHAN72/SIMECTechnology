import React from "react";
import { Phone, Code } from "lucide-react";

// Images (নিজের asset অনুযায়ী path ঠিক করো)
import mdImg from "../../assets/13.12.2025_16.48.51_REC.png";
import operationImg from "../../assets/481194787_3912106632382973_7036331142400474416_n.jpg";
import accountsImg from "../../assets/WhatsApp Image 2025-12-14 at 4.55.37 PM.jpeg";
import developerImg from "../../assets/WhatsApp Image 2025-09-27 at 20.08.01_b6c64082.jpg";

const ManagementTeam = () => {
  return (
    <section className="py-20 bg-slate-50">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Management Team
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          The leadership and professionals behind SIMEC Technology Limited
        </p>
      </div>

      {/* ===== Managing Director (Top Row) ===== */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-lg mb-6">
            <img
              src={mdImg}
              alt="Managing Director"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-800">
            Engr. Mohammad Abdus Salam Khan
          </h3>

          <p className="text-primary font-semibold mt-1">
            Managing Director
          </p>

          <p className="text-gray-600 mt-2">
            FIEB, FEWA, BSc in EEE
          </p>

          <div className="flex justify-center items-center gap-2 mt-4 text-gray-700">
            <Phone className="w-5 h-5 text-primary" />
            <span>01919822952</span>
          </div>
        </div>
      </div>

      {/* ===== Other Team Members (Bottom Row) ===== */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Operation Executive */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center">
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden shadow mb-5">
            <img src={operationImg} alt="Operation Executive" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold">Engr. Mozahid Al Talib</h3>
          <p className="text-primary font-medium">Operation Executive</p>
          <p className="text-gray-600 text-sm mt-2">
            Operations & Project Coordination
          </p>
          <div className="flex justify-center items-center gap-2 mt-4 text-gray-700">
            <Phone className="w-5 h-5 text-primary" />
            <span>01897586245</span>
          </div>
        </div>

        {/* Accounts */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center">
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden shadow mb-5">
            <img src={accountsImg} alt="Accounts Executive" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold">Md. Fojla Rabby</h3>
          <p className="text-primary font-medium">Accounts Executive</p>
          <p className="text-gray-600 text-sm mt-2">
            Accounts & Finance Management
          </p>
          <div className="flex justify-center items-center gap-2 mt-4 text-gray-700">
            <Phone className="w-5 h-5 text-primary" />
            <span>01568829324</span>
          </div>
        </div>

       {/* Developer */}
<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center">
  <div className="w-36 h-36 mx-auto rounded-full overflow-hidden shadow mb-5">
    <img src={developerImg} alt="Developer" className="w-full h-full object-cover" />
  </div>
  <h3 className="text-xl font-semibold">Tanvir Alam Khan</h3>
  <p className="text-primary font-medium">Software Developer</p>
  <p className="text-gray-600 text-sm mt-2">
    Web Application & System Development
  </p>
  <div className="flex justify-center items-center gap-2 mt-4 text-gray-700">
    <Phone className="w-5 h-5 text-primary" />
    <span>01617725840</span>
  </div>
</div>


      </div>
    </section>
  );
};

export default ManagementTeam;
