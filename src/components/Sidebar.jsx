import React from 'react';
import { Printer, Stethoscope } from 'lucide-react';
import ClinicForm from './forms/ClinicForm';
import PatientForm from './forms/PatientForm';
import VitalsForm from './forms/VitalsForm';
import ClinicalNotesForm from './forms/ClinicalNotesForm';
import MedicationsForm from './forms/MedicationsForm';
import AdviceForm from './forms/AdviceForm';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { usePrescription } from '../context/PrescriptionContext';

export default function Sidebar() {
  const { save } = useLocalStorage();
  const { clearPrescription } = usePrescription();

  const handlePrint = () => {
    save();
    window.print();
  };

  return (
    <div className="w-full md:w-[450px] lg:w-[500px] bg-white border-r border-slate-200 overflow-y-auto h-screen shadow-lg print:hidden flex-shrink-0 z-10">
      {/* Header */}
      <div className="p-6 bg-blue-600 text-white sticky top-0 z-20 shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <Stethoscope className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight">RxGen</h1>
        </div>
        <p className="text-blue-100 text-sm">Medical Prescription Generator</p>
      </div>

      <div className="p-6 space-y-8">
        <ClinicForm />
        <PatientForm />
        <VitalsForm />
        <ClinicalNotesForm />
        <MedicationsForm />
        <AdviceForm />

        {/* Action Buttons */}
        <div className="space-y-3 pt-4 pb-8 border-t border-slate-200">
          <button
            onClick={handlePrint}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-semibold"
          >
            <Printer className="w-5 h-5" />
            Print / Save PDF
          </button>
          <button
            onClick={clearPrescription}
            className="w-full py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition-colors text-sm font-medium"
          >
            Clear All
          </button>
          <p className="text-xs text-center text-slate-400">
            Auto-saves every 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
}
