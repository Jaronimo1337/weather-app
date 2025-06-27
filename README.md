Weather App, a simple weather application built with Vue.js for frontend and Express.js for backend.

Features: Search weather by city name,
Input validation and error handling,
Responsive UI with Tailwind CSS and TailwindcssAnimated,
Toast notifications for user feedback.

Tech Stack
Frontend:

Vue.js 3
Vite
Tailwind CSS
Axios
Vue3-Toastify

Backend:

Express.js
Express-validator
Axios
Jest & Supertest (testing)

Installation & Setup
1. Clone the repository: git clone https://github.com/Jaronimo1337/weather-app.git
cd weather-app
3. Install Backend Dependencies
cd server
npm install
4. Install Frontend Dependencies
cd client
npm install
5. Environment Variables
1. Create a .env file in the server directory:
PORT = 3000
API_KEY = your_actual_key_here
2. Create a .env file in the client directory:
VITE_API_URL=http://{url}:{port}/api   Only change url and port, leave /api
6. Running the Application
1. Start the Backend Server
cd server
npm start
Server will run on http://localhost:3000
2. Start the Frontend Client
cd client
npm run dev
Client will run on http://localhost:5173
7. Testing
Run Backend Tests
cd server
npm test
