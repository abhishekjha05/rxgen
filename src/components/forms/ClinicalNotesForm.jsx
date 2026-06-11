import React from 'react';
import { FileText } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function ClinicalNotesForm() {
  const { clinicalNotes, setClinicalNotes } = usePrescription();

  const handleChange = (e) => {
    setClinicalNotes({ ...clinicalNotes, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 text-slate-800 border-b pb-2">
        <FileText className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Clinical Notes</h2>
      </div>
      <div className="space-y-3">
        <textarea name="chiefComplaints" value={clinicalNotes.chiefComplaints} onChange={handleChange} placeholder="Chief Complaints & History" className="form-input h-20 resize-y" />
        <textarea name="diagnosis" value={clinicalNotes.diagnosis} onChange={handleChange} placeholder="Diagnosis" className="form-input h-16 resize-y" />
      </div>
    </section>
  );
}
