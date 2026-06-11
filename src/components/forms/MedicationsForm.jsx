import React from 'react';
import { Pill, Plus, Trash2 } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function MedicationsForm() {
  const { medications, addMedication, removeMedication, updateMedication } = usePrescription();

  return (
    <section>
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <div className="flex items-center gap-2 text-slate-800">
          <Pill className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Rx / Medications</h2>
        </div>
        <button onClick={addMedication} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
          <Plus className="w-4 h-4" /> Add Drug
        </button>
      </div>
      
      <div className="space-y-4">
        {medications.map((med, index) => (
          <div key={med.id} className="p-4 bg-slate-100 rounded-lg border border-slate-200 relative group">
            <button 
              onClick={() => removeMedication(med.id)} 
              className="absolute top-2 right-2 text-slate-400 hover:text-red-500 p-1 rounded-full hover:bg-slate-200 transition-colors"
              title="Remove medication"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="font-medium text-slate-500 text-xs mb-2 uppercase tracking-wide">Medication #{index + 1}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  value={med.name} 
                  onChange={(e) => updateMedication(med.id, 'name', e.target.value)} 
                  placeholder="Drug Name (e.g., Tab. Amoxicillin 500mg)" 
                  className="form-input w-full" 
                />
              </div>
              <input type="text" value={med.dosage} onChange={(e) => updateMedication(med.id, 'dosage', e.target.value)} placeholder="Dosage (e.g., 1 Tab)" className="form-input w-full" />
              <input type="text" value={med.frequency} onChange={(e) => updateMedication(med.id, 'frequency', e.target.value)} placeholder="Frequency (e.g., 1-0-1)" className="form-input w-full" />
              <input type="text" value={med.duration} onChange={(e) => updateMedication(med.id, 'duration', e.target.value)} placeholder="Duration (e.g., 5 Days)" className="form-input w-full" />
              <input type="text" value={med.instructions} onChange={(e) => updateMedication(med.id, 'instructions', e.target.value)} placeholder="Instructions (Optional)" className="form-input w-full" />
            </div>
          </div>
        ))}
        {medications.length === 0 && (
          <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-300 rounded-lg text-slate-500">
            No medications added.
          </div>
        )}
      </div>
    </section>
  );
}
