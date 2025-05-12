## ✅ `swing-trade-app/README.md` (Frontend)

```markdown
# 📱 Swing Trade AI Agent – Frontend (React Native with Expo)

This is the mobile frontend for the Swing Trade AI Agent.  
Built using **React Native**, **Expo Router**, and modern UI practices.  
It connects to the FastAPI backend to display swing trade recommendations, market sentiment, risk level, and trade history.

---

## 🚀 Features

- Clean 5-tab navigation (Home, Suggest, History, Charts, About Us)
- Mobile-friendly, responsive UI
- Connects to backend API for live AI-powered recommendations
- Display history logs from backend
- Easy to run on iOS, Android, or Web via Expo

---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/alinfosystems/swing-trade-app.git
cd swing-trade-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Update Backend API URL
In config.js, change the BASE_URL to your backend address:

js
Copy
Edit
export const BASE_URL = "http://192.168.x.x:8000"; // or use localhost for web
4. Run the App
bash
Copy
Edit
npx expo start
Scan the QR code using Expo Go on your phone

Or press w to open it in your browser

🧭 Navigation
🏠 Home: Welcome screen with logo

📈 Suggest: Gets the latest swing trade suggestion

🗂 History: Shows previously generated results

📊 Charts: Placeholder for future data visualizations

ℹ️ About Us: App info and credits

📁 Folder Structure
bash
Copy
Edit
app/
├── index.js        # Home screen
├── suggest.js      # Suggestion screen
├── history.js      # History screen
├── charts.js       # Charts screen
└── about.js        # About Us screen

assets/
└── logo.png        # App logo
🤝 Contact
For any questions, support, or partnership inquiries:
📧 contactalinfosystems@gmail.com
