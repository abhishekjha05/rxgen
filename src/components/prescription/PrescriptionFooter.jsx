import React from 'react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function PrescriptionFooter() {
  const { clinicInfo } = usePrescription();

  return (
    <footer className="mt-auto p-8 pt-4">
      <div className="flex justify-end">
        <div className="text-center">
          <div className="h-16 w-48 border-b-2 border-slate-300 mb-2"></div>
          <p className="font-bold text-slate-800">{clinicInfo.doctorName}</p>
          <p className="text-xs text-slate-500">Signature / Seal</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-400 border-t border-slate-100 pt-4">
        Not valid for medico-legal purposes. Generated electronically.
      </div>
    </footer>
  );
}
