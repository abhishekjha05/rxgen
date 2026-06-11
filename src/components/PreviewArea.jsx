import React from 'react';
import PrescriptionHeader from './prescription/PrescriptionHeader';
import PrescriptionPatientInfo from './prescription/PrescriptionPatientInfo';
import PrescriptionContent from './prescription/PrescriptionContent';
import PrescriptionFooter from './prescription/PrescriptionFooter';

export default function PreviewArea() {
  return (
    <div className="flex-1 bg-slate-100 overflow-y-auto p-4 md:p-8 print:p-0 print:m-0 print:bg-white print:overflow-visible">
      {/* The Prescription Paper */}
      <div className="max-w-[800px] mx-auto bg-white min-h-[1050px] shadow-2xl rounded-sm print:shadow-none print:rounded-none print:w-full print:max-w-none relative flex flex-col print:h-screen">
        <PrescriptionHeader />
        <PrescriptionPatientInfo />
        <PrescriptionContent />
        <PrescriptionFooter />
      </div>
    </div>
  );
}
