import React from 'react';
import { usePrescription } from '../../context/PrescriptionContext';
import MedicationsList from './MedicationsList';

export default function PrescriptionContent() {
  const { vitals, clinicalNotes, advice } = usePrescription();

  return (
    <div className="flex flex-1 flex-col md:flex-row print:flex-row">
      {/* Left Column (Vitals & Notes) */}
      <div className="w-full md:w-1/3 print:w-[30%] border-r border-slate-200 p-8 bg-slate-50/30 print:bg-transparent">
        
        {/* Vitals */}
        {(vitals.bp || vitals.pulse || vitals.temperature || vitals.spo2) && (
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-200 pb-1">Vitals</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {vitals.bp && <li><span className="font-medium mr-2">BP:</span> {vitals.bp} mmHg</li>}
              {vitals.pulse && <li><span className="font-medium mr-2">PR:</span> {vitals.pulse} bpm</li>}
              {vitals.temperature && <li><span className="font-medium mr-2">Temp:</span> {vitals.temperature} °F</li>}
              {vitals.spo2 && <li><span className="font-medium mr-2">SpO2:</span> {vitals.spo2} %</li>}
            </ul>
          </div>
        )}

        {/* Complaints & History */}
        {clinicalNotes.chiefComplaints && (
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-200 pb-1">Complaints & Hx</h3>
            <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
              {clinicalNotes.chiefComplaints}
            </p>
          </div>
        )}

        {/* Diagnosis */}
        {clinicalNotes.diagnosis && (
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-200 pb-1">Diagnosis</h3>
            <p className="text-sm font-semibold text-blue-900 whitespace-pre-wrap leading-relaxed">
              {clinicalNotes.diagnosis}
            </p>
          </div>
        )}
      </div>

      {/* Right Column (Rx & Advice) */}
      <div className="w-full md:w-2/3 print:w-[70%] p-8 flex flex-col relative">
        {/* Rx Symbol Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-50 print:text-slate-50 opacity-50 text-[250px] font-serif italic select-none pointer-events-none z-0">
          Rx
        </div>

        {/* Rx Symbol Header */}
        <div className="text-4xl font-serif italic text-slate-800 mb-6 font-bold z-10 relative">
          Rx
        </div>

        {/* Medications List */}
        <MedicationsList />

        {/* Advice Section */}
        {advice && (
          <div className="mt-12 pt-6 border-t border-dashed border-slate-300 z-10 relative">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Advice / Follow-up</h3>
            <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed font-medium">
              {advice}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
