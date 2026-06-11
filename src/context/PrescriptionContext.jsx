import React, { createContext, useContext, useState } from 'react';

const PrescriptionContext = createContext();

const initialClinicInfo = {
  doctorName: 'Dr. Rajiv Ranjan',
  qualifications: 'MBBS, MD (General Medicine), PMCH',
  clinicName: 'Aarogyam Clinic & Care',
  address: 'Main Road, Near Kachehari, Tilkamanjhi, Bhagalpur, Bihar - 812001',
  contact: '+91 98765 43210 | dr.rajiv@aarogyambhagalpur.in',
  registrationNo: 'Reg No: BCMR-45678',
};

const initialPatientInfo = {
  name: 'Ramesh Kumar',
  age: '45',
  gender: 'Male',
  weight: '75',
  date: new Date().toISOString().split('T')[0],
};

const initialVitals = {
  bp: '120/80',
  pulse: '72',
  temperature: '98.6',
  spo2: '98',
};

const initialClinicalNotes = {
  chiefComplaints: 'Fever and mild cough for 3 days.\nBody ache and weakness.',
  diagnosis: 'Viral Pyrexia / URI',
};

export const PrescriptionProvider = ({ children }) => {
  const [clinicInfo, setClinicInfo] = useState(initialClinicInfo);
  const [patientInfo, setPatientInfo] = useState(initialPatientInfo);
  const [vitals, setVitals] = useState(initialVitals);
  const [clinicalNotes, setClinicalNotes] = useState(initialClinicalNotes);
  const [medications, setMedications] = useState([
    { id: 1, name: 'Tab. Dolo 650mg', dosage: '1 Tablet', frequency: '1-1-1 (After Food)', duration: '3 Days', instructions: 'Take only if fever > 99°F' },
    { id: 2, name: 'Cap. Pan-D', dosage: '1 Capsule', frequency: '1-0-0 (Empty Stomach)', duration: '5 Days', instructions: 'Take 30 mins before breakfast' },
    { id: 3, name: 'Syp. Ascoril LS', dosage: '10ml', frequency: '1-0-1', duration: '5 Days', instructions: 'For cough' }
  ]);
  const [advice, setAdvice] = useState('Drink plenty of warm fluids (Gunguna pani).\nRest for 2 days.\nReview after 3 days if symptoms persist.');
  const [signatureImage, setSignatureImage] = useState(null);
  const [handwritingFont, setHandwritingFont] = useState('caveat');

  const addMedication = () => {
    setMedications([...medications, { id: Date.now(), name: '', dosage: '', frequency: '', duration: '', instructions: '' }]);
  };

  const removeMedication = (id) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  const updateMedication = (id, field, value) => {
    setMedications(medications.map(med => med.id === id ? { ...med, [field]: value } : med));
  };

  const clearPrescription = () => {
    setClinicInfo(initialClinicInfo);
    setPatientInfo(initialPatientInfo);
    setVitals(initialVitals);
    setClinicalNotes(initialClinicalNotes);
    setMedications([]);
    setAdvice('');
    setSignatureImage(null);
  };

  const value = {
    clinicInfo, setClinicInfo,
    patientInfo, setPatientInfo,
    vitals, setVitals,
    clinicalNotes, setClinicalNotes,
    medications, addMedication, removeMedication, updateMedication,
    advice, setAdvice,
    signatureImage, setSignatureImage,
    handwritingFont, setHandwritingFont,
    clearPrescription,
  };

  return (
    <PrescriptionContext.Provider value={value}>
      {children}
    </PrescriptionContext.Provider>
  );
};

export const usePrescription = () => {
  const context = useContext(PrescriptionContext);
  if (!context) {
    throw new Error('usePrescription must be used within PrescriptionProvider');
  }
  return context;
};
