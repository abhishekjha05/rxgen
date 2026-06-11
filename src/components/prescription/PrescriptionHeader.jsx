import React from 'react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function PrescriptionHeader() {
  const { clinicInfo } = usePrescription();

  return (
    <header className="border-b-4 border-blue-800 p-8 pt-10 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 print:hidden opacity-50"></div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight mb-1">{clinicInfo.doctorName || 'Doctor Name'}</h1>
          <p className="text-blue-800 font-semibold mb-2">{clinicInfo.qualifications || 'Qualifications'}</p>
          <p className="text-sm text-slate-600 mt-1">{clinicInfo.registrationNo}</p>
        </div>
        <div className="text-right max-w-xs">
          <h2 className="text-xl font-bold text-slate-800 mb-1">{clinicInfo.clinicName || 'Clinic Name'}</h2>
          <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">{clinicInfo.address}</p>
          <p className="text-sm text-slate-600 font-medium mt-2">{clinicInfo.contact}</p>
        </div>
      </div>
    </header>
  );
}
