import React from 'react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function PrescriptionPatientInfo() {
  const { patientInfo } = usePrescription();

  return (
    <div className="bg-slate-50 border-b border-slate-200 px-8 py-3 flex flex-wrap justify-between items-center text-sm print:bg-transparent">
      <div className="flex gap-6 flex-wrap">
        <span className="font-medium text-slate-800">
          <span className="text-slate-500 mr-1">Patient:</span> 
          <span className="text-base uppercase">{patientInfo.name || '___________'}</span>
        </span>
        <span className="text-slate-700"><span className="text-slate-500 mr-1">Age/Sex:</span> {patientInfo.age ? `${patientInfo.age} Y / ` : ''}{patientInfo.gender || '-'}</span>
        <span className="text-slate-700"><span className="text-slate-500 mr-1">Wt:</span> {patientInfo.weight ? `${patientInfo.weight} kg` : '-'}</span>
      </div>
      <div className="font-medium text-slate-800 whitespace-nowrap mt-2 sm:mt-0">
        <span className="text-slate-500 mr-1">Date:</span> {patientInfo.date ? new Date(patientInfo.date).toLocaleDateString('en-GB') : '___________'}
      </div>
    </div>
  );
}
