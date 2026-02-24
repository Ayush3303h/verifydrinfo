import React from "react";

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full min-h-screen bg-white p-6 space-y-6">

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="/1742142176139.jpeg"
            alt="Doctor"
            className="w-28 h-28 rounded-full object-cover"
          />

          <div className="bg-green-500 text-white px-5 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
            ✓ VERIFIED
          </div>

          <h1 className="text-2xl font-bold text-blue-700">
            Dr. Saksham Narotra, M.D.
          </h1>

          <p className="text-blue-500 text-lg">
            Emergency Medicine, Board of Drug
          </p>

          <p className="text-gray-500 text-sm">
            Verified as of: November, 2025 at 04:12 AM EST
          </p>
        </div>

        <hr className="border-none h-px bg-black" />

        {/* Physician Credentials */}
        <div className="space-y-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
            🩺 Physician Credentials
          </h2>

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

        <hr className="border-none h-px bg-black" />

        {/* Document Authentication */}
        <div className="space-y-4">
          <h2 className="text-xl text-gray-700 font-semibold">
            📄 Document Authentication
          </h2>

          <Credential label="Document Reference" value="54X08I8K0" />
          <Credential label="Document Issue Date" value="November, 2025" />
          <Credential label="Verification Status" value="Authentic Document" />
          <Credential label="QR Code Generated" value="November, 2025" />
        </div>

        <div className="flex flex-col items-center pt-6">
          <div className="bg-green-100 border-4 border-green-500 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-green-700 text-4xl">✔</div>
              <p className="font-bold text-green-700 mt-2">VERIFIED</p>
            </div>
          </div>

          <h3 className="text-blue-600 text-2xl font-bold mt-4 tracking-wide">
            SECURE VERIFICATION
          </h3>
        </div>
      </div>
    </div>
  );
}

function Credential({ label, value, link }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      {link ? (
        <a href="#" className="text-blue-600 font-semibold">
          {value}
        </a>
      ) : (
        <p className="font-semibold text-gray-800">{value}</p>
      )}
    </div>
  );
}
