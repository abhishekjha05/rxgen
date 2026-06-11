import React from 'react';
import { Upload, Trash2 } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function SignatureUpload() {
  const { signatureImage, setSignatureImage } = usePrescription();

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSignatureImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 text-slate-800 border-b pb-2">
        <Upload className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Doctor's Signature</h2>
      </div>
      <div className="space-y-3">
        <label className="block">
          <input
            type="file"
            accept="image/*"
            onChange={handleSignatureUpload}
            className="hidden"
          />
          <span className="block w-full p-3 bg-slate-100 border border-dashed border-slate-300 rounded-lg text-center cursor-pointer hover:bg-slate-200 transition-colors text-sm text-slate-600 font-medium">
            {signatureImage ? '✓ Signature uploaded' : '📝 Click to upload signature'}
          </span>
        </label>
        {signatureImage && (
          <>
            <div className="p-2 bg-white border border-slate-200 rounded-lg">
              <img src={signatureImage} alt="Signature" className="h-20 object-contain" />
            </div>
            <button
              onClick={() => setSignatureImage(null)}
              className="w-full py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" /> Remove Signature
            </button>
          </>
        )}
      </div>
    </section>
  );
}
