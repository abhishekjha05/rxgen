import React from 'react';
import { Activity } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function VitalsForm() {
  const { vitals, setVitals } = usePrescription();

  const handleChange = (e) => {
    setVitals({ ...vitals, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 text-slate-800 border-b pb-2">
        <Activity className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Vitals</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input type="text" name="bp" value={vitals.bp} onChange={handleChange} placeholder="BP (mmHg)" className="form-input" />
        <input type="text" name="pulse" value={vitals.pulse} onChange={handleChange} placeholder="Pulse (bpm)" className="form-input" />
        <input type="text" name="temperature" value={vitals.temperature} onChange={handleChange} placeholder="Temp (°F)" className="form-input" />
        <input type="text" name="spo2" value={vitals.spo2} onChange={handleChange} placeholder="SpO2 (%)" className="form-input" />
      </div>
    </section>
  );
}
