import { useEffect } from 'react';
import { usePrescription } from '../context/PrescriptionContext';

export const useLocalStorage = () => {
  const { 
    clinicInfo, patientInfo, vitals, clinicalNotes, medications, advice 
  } = usePrescription();

  const save = (key = 'rxgen_prescription') => {
    const data = {
      clinicInfo, patientInfo, vitals, clinicalNotes, medications, advice,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(data));
  };

  const load = (key = 'rxgen_prescription') => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const getSavedPrescriptions = () => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('rxgen_'));
    return keys.map(k => ({ key: k, ...JSON.parse(localStorage.getItem(k)) }));
  };

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => save(), 30000);
    return () => clearInterval(interval);
  }, [clinicInfo, patientInfo, vitals, clinicalNotes, medications, advice]);

  return { save, load, getSavedPrescriptions };
};
