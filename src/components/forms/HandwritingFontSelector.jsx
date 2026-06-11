import React from 'react';
import { Type } from 'lucide-react';
import { usePrescription } from '../../context/PrescriptionContext';

export default function HandwritingFontSelector() {
  const { handwritingFont, setHandwritingFont } = usePrescription();

  const fonts = [
    { id: 'caveat', name: '✍️ Caveat (Natural)', className: 'caveat-font' },
    { id: 'kalam', name: '✏️ Kalam (Relaxed)', className: 'kalam-font' },
    { id: 'indie', name: '🖊️ Indie Flower', className: 'indie-font' },
    { id: 'satisfy', name: '💫 Satisfy (Elegant)', className: 'satisfy-font' },
    { id: 'greatvibes', name: '⭐ Great Vibes (Pro)', className: 'greatvibes-font' },
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-4 text-slate-800 border-b pb-2">
        <Type className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Handwriting Font Style</h2>
      </div>
      <div className="space-y-2">
        {fonts.map((font) => (
          <label key={font.id} className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer hover:bg-blue-50 transition-colors">
            <input
              type="radio"
              name="handwriting"
              value={font.id}
              checked={handwritingFont === font.id}
              onChange={(e) => setHandwritingFont(e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="ml-3 flex-1">
              <span className="text-sm font-medium text-slate-800">{font.name}</span>
              <div className={`${font.className} text-sm text-slate-600 mt-1`}>
                Tab. Amoxicillin 500mg - 1-0-1 for 5 days
              </div>
            </span>
            {handwritingFont === font.id && (
              <span className="ml-2 text-blue-600 font-bold">✓</span>
            )}
          </label>
        ))}
      </div>
    </section>
  );
}
