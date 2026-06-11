import React from 'react';
import { Settings } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function ClinicForm() {
  const { clinicInfo, setClinicInfo } = usePrescription();

  const handleChange = (e) => {
    setClinicInfo({ ...clinicInfo, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 text-slate-800 border-b pb-2">
        <Settings className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Doctor / Clinic Profile</h2>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <input type="text" name="doctorName" value={clinicInfo.doctorName} onChange={handleChange} placeholder="Doctor's Name" className="form-input" />
        <input type="text" name="qualifications" value={clinicInfo.qualifications} onChange={handleChange} placeholder="Qualifications" className="form-input" />
        <input type="text" name="registrationNo" value={clinicInfo.registrationNo} onChange={handleChange} placeholder="Registration Number" className="form-input" />
        <input type="text" name="clinicName" value={clinicInfo.clinicName} onChange={handleChange} placeholder="Clinic/Hospital Name" className="form-input" />
        <textarea name="address" value={clinicInfo.address} onChange={handleChange} placeholder="Clinic Address" className="form-input h-20 resize-none" />
        <input type="text" name="contact" value={clinicInfo.contact} onChange={handleChange} placeholder="Contact Details" className="form-input" />
      </div>
    </section>
  );
}
