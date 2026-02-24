// import React from "react";

// export default function VerificationPage() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 space-y-6">

//         {/* Profile Section */}
//         <div className="flex flex-col items-center text-center space-y-4">
//           <img
//             src="1742142176139.jpeg"
//             alt="Doctor"
//             className="w-28 h-28 rounded-full object-cover"
//           />

//           <div className="bg-green-500 text-white px-5 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
//             ✓ VERIFIED
//           </div>

//           <h1 className="text-2xl font-bold text-blue-700">
//             Dr. Saksham Narotra, M.D.
//           </h1>

//           <p className="text-blue-500 text-lg">
//             Emergency Medicine, Board of Drug
//           </p>

//           <p className="text-gray-500 text-sm">
//             Verified as of: November, 2025 at 04:12 AM EST
//           </p>
//         </div>

//         <hr class="border-none h-px bg-black" />

//         {/* Physician Credentials */}
//         <div className="space-y-4 flex flex-col items-center">
//           <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
//             🩺 Physician Credentials
//           </h2>

//           <Credential label="Medical License Number" value="OP656987850" />
//           <Credential label="State of Licensure" value="Haryana" />
//           <Credential label="License Status" value="Active" />
//           <Credential label="License Expiration" value="03/20/2030" />
//           <Credential
//             label="National Provider Identifier (NPI)"
//             value="14678563858"
//             link
//           />
//           <Credential
//             label="Board Certification"
//             value="Haryana Medical Council (HMC)"
//           />
//           <Credential label="Years in Practice" value="7" />
//           <Credential
//             label="Verification Source"
//             value="Haryana State Department"
//           />
//         </div>

//         <hr class="border-none h-px bg-black" />

//         {/* Document Authentication */}
//         <div className="space-y-4">
//           <h2 className="text-xl text-gray-700 font-semibold">📄 Document Authentication</h2>

//           <Credential label="Document Reference" value="54X08I8K0" />
//           <Credential label="Document Issue Date" value="November, 2025" />
//           <Credential label="Verification Status" value="Authentic Document" />
//           <Credential label="QR Code Generated" value="November, 2025" />
//         </div>

//         <div className="flex flex-col items-center pt-6">
//           <div className="bg-green-100 border-4 border-green-500 rounded-2xl p-6">
//             <div className="text-center">
//               <div className="text-green-700 text-4xl">✔</div>
//               <p className="font-bold text-green-700 mt-2">VERIFIED</p>
//             </div>
//           </div>

//           <h3 className="text-blue-600 text-2xl font-bold mt-4 tracking-wide">
//             SECURE VERIFICATION
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Credential({ label, value, link }) {
//   return (
//     <div>
//       <p className="text-gray-400 text-sm">{label}</p>
//       {link ? (
//         <a href="#" className="text-blue-600 font-semibold">
//           {value}
//         </a>
//       ) : (
//         <p className="font-semibold text-gray-800">{value}</p>
//       )}
//     </div>
//   );
// }







import React from "react";

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 flex justify-center items-center p-6">

      <div className="w-full max-w-5xl backdrop-blur-xl bg-white/80 shadow-2xl rounded-3xl px-8 md:px-16 py-12 animate-fadeIn">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center border-b pb-12 animate-slideUp">
          <img
            src="/1742142176139.jpeg"
            alt="Doctor"
            className="w-36 h-36 rounded-full object-cover shadow-xl ring-4 ring-blue-200"
          />

          <div className="mt-6 relative">
            <div className="absolute inset-0 bg-green-400 blur-xl opacity-30 animate-pulse rounded-full"></div>
            <div className="relative bg-green-600 text-white px-8 py-2 rounded-full text-sm font-semibold tracking-widest shadow-md">
              ✓ VERIFIED
            </div>
          </div>

          <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-blue-800">
            Dr. Saksham Narotra, M.D.
          </h1>

          <p className="mt-4 text-xl text-blue-600 font-medium">
            Emergency Medicine, Board of Drug
          </p>

          <p className="mt-3 text-gray-500 text-sm">
            Verified as of: November, 2025 at 04:12 AM EST
          </p>
        </div>
        <hr class="border-none h-px bg-black" />

        {/* Physician Credentials */}
        <section className="py-12 border-b animate-fadeIn delay-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 flex items-center gap-3">
            🩺 Physician Credentials
          </h2>

          <div className="grid md:grid-cols-2 gap-y-8 gap-x-20">
            <Credential label="Medical License Number" value="OP656987850" />
            <Credential label="State of Licensure" value="Haryana" />
            <Credential label="License Status" value="Active" />
            <Credential label="License Expiration" value="03/20/2030" />
            <Credential
              label="National Provider Identifier (NPI)"
              value="14678563858"
              link
            />
            <Credential
              label="Board Certification"
              value="Haryana Medical Council (HMC)"
            />
            <Credential label="Years in Practice" value="7" />
            <Credential
              label="Verification Source"
              value="Haryana State Department"
            />
          </div>
        </section>
        <hr class="border-none h-px bg-black" />

        {/* Document Authentication */}
        <section className="py-12 animate-fadeIn delay-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            📄 Document Authentication
          </h2>

          <div className="grid md:grid-cols-2 gap-y-8 gap-x-20">
            <Credential label="Document Reference" value="54X08I8K0" />
            <Credential label="Document Issue Date" value="November, 2025" />
            <Credential label="Verification Status" value="Authentic Document" />
            <Credential label="QR Code Generated" value="November, 2025" />
          </div>
        </section>

        {/* Footer Verification */}
        <div className="flex flex-col items-center mt-16">
          <div className="bg-green-50 border-2 border-green-600 rounded-2xl px-14 py-8 shadow-lg hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="text-green-600 text-6xl">✔</div>
              <p className="font-bold text-green-700 mt-4 tracking-widest text-lg">
                VERIFIED
              </p>
            </div>
          </div>

          <h3 className="text-blue-800 text-3xl font-extrabold mt-8 tracking-widest">
            SECURE VERIFICATION
          </h3>
        </div>

      </div>
    </div>
  );
}

function Credential({ label, value, link }) {
  return (
    <div className="group transition duration-300">
      <p className="text-gray-500 text-sm mb-2 group-hover:text-blue-600 transition">
        {label}
      </p>
      {link ? (
        <a
          href="#"
          className="text-blue-700 font-semibold hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="font-semibold text-gray-900 text-lg">
          {value}
        </p>
      )}
    </div>
  );
}