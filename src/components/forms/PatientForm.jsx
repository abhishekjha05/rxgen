import React from 'react';
import { User } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function PatientForm() {
  const { patientInfo, setPatientInfo } = usePrescription();

  const handleChange = (e) => {
    setPatientInfo({ ...patientInfo, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 text-slate-800 border-b pb-2">
        <User className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Patient Details</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <input type="text" name="name" value={patientInfo.name} onChange={handleChange} placeholder="Patient Name" className="form-input" />
        </div>
        <input type="number" name="age" value={patientInfo.age} onChange={handleChange} placeholder="Age (Yrs)" className="form-input" />
        <select name="gender" value={patientInfo.gender} onChange={handleChange} className="form-input bg-white">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="number" name="weight" value={patientInfo.weight} onChange={handleChange} placeholder="Weight (kg)" className="form-input" />
        <input type="date" name="date" value={patientInfo.date} onChange={handleChange} className="form-input" />
      </div>
    </section>
  );
}
