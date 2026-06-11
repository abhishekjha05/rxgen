# RxGen - Medical Prescription Generator

A professional React-based web application for doctors to create, manage, and print medical prescriptions. Built with modern web technologies and optimized for both desktop and print.

## ✨ Features

- 📋 **Professional Prescription Layout** - Formatted for A4 printing with professional design
- 🏗️ **Component-Based Architecture** - Clean, maintainable, and scalable code structure
- 🔄 **Context API State Management** - Global state management without prop drilling
- 💾 **Auto-Save** - Automatically saves prescriptions every 30 seconds to local storage
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🖨️ **Print Optimization** - Perfect PDF output with proper formatting and page breaks
- 🎨 **Tailwind CSS** - Modern, utility-first styling with beautiful UI
- ⚡ **Vite** - Lightning-fast development experience

## 🏗️ Project Structure

```
rxgen/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── PreviewArea.jsx
│   │   ├── forms/
│   │   │   ├── ClinicForm.jsx
│   │   │   ├── PatientForm.jsx
│   │   │   ├── VitalsForm.jsx
│   │   │   ├── ClinicalNotesForm.jsx
│   │   │   ├── MedicationsForm.jsx
│   │   │   └── AdviceForm.jsx
│   │   └── prescription/
│   │       ├── PrescriptionHeader.jsx
│   │       ├── PrescriptionPatientInfo.jsx
│   │       ├── PrescriptionContent.jsx
│   │       ├── PrescriptionFooter.jsx
│   │       └── MedicationsList.jsx
│   ├── context/
│   │   └── PrescriptionContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── styles/
│   │   ├── globals.css
│   │   ├── print.css
│   │   └── form.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekjha05/rxgen.git
   cd rxgen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎯 Usage

1. **Enter Clinic/Doctor Details**
   - Fill in doctor name, qualifications, clinic info
   - Add registration number and contact details

2. **Add Patient Information**
   - Enter patient name, age, gender, weight
   - Select date of prescription

3. **Record Vitals**
   - Add blood pressure, pulse, temperature, SpO2

4. **Clinical Notes**
   - Document chief complaints/history
   - Enter diagnosis

5. **Add Medications**
   - Click "Add Drug" to add prescriptions
   - Fill in drug name, dosage, frequency, duration
   - Add special instructions (optional)

6. **Advice & Follow-up**
   - Add general advice and follow-up instructions

7. **Print/Save**
   - Click "Print / Save PDF" to generate prescription
   - Browser will open print dialog
   - Save as PDF from print dialog

## 💾 Data Persistence

- Prescriptions auto-save to browser's local storage every 30 seconds
- Data persists across browser sessions
- Click "Clear All" to start a new prescription

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` to customize the color scheme

### Modify Clinic Details
Default clinic info is in `src/context/PrescriptionContext.jsx`

### Add New Fields
Add to the respective form component and context

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy with Docker
```bash
docker build -t rxgen:latest .
docker run -p 80:80 rxgen:latest
```

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Context API** - State management

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for healthcare professionals**
