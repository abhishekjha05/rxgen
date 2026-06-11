import React from 'react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function MedicationsList() {
  const { medications } = usePrescription();

  return (
    <div className="flex-1 z-10 relative space-y-6">
      {medications.length > 0 ? (
        medications.map((med, idx) => (
          <div key={med.id} className="mb-5 last:mb-0 prescription-item">
            <div className="flex items-start mb-1">
              <span className="font-bold text-slate-800 mr-3 mt-[2px]">{idx + 1}.</span>
              <div>
                <h4 className="font-bold text-slate-900 text-lg leading-tight uppercase">{med.name}</h4>
                <div className="flex flex-wrap text-slate-700 mt-1 gap-x-4 gap-y-1 text-sm font-medium">
                  {med.dosage && <span><span className="text-slate-400 font-normal">Dose:</span> {med.dosage}</span>}
                  {med.frequency && <span><span className="text-slate-400 font-normal">Freq:</span> {med.frequency}</span>}
                  {med.duration && <span><span className="text-slate-400 font-normal">Duration:</span> {med.duration}</span>}
                </div>
                {med.instructions && (
                  <p className="text-sm text-slate-500 mt-1 italic">
                    Note: {med.instructions}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-slate-300 italic py-10 print:hidden">
          Add medications from the sidebar to see them here...
        </div>
      )}
    </div>
  );
}
