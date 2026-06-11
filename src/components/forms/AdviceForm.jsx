import React from 'react';
import { FileText } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function AdviceForm() {
  const { advice, setAdvice } = usePrescription();

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 text-slate-800 border-b pb-2">
        <FileText className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Advice & Follow-up</h2>
      </div>
      <textarea 
        value={advice} 
        onChange={(e) => setAdvice(e.target.value)} 
        placeholder="General advice, diet instructions, or follow-up date" 
        className="form-input h-28 resize-y" 
      />
    </section>
  );
}
