### ✅ Step 1: Add this content in `README.md`

Create a file named `README.md` in your project root and paste the following:

```markdown
# Gemini Backend Clone - Kuvaka Tech

This is a backend clone assignment inspired by Google's Gemini Chat. The system includes OTP-based user authentication, chatroom creation, async Gemini AI integration, Stripe-based subscription, and JWT security.

---

## 🚀 Features

- ✅ OTP-based User Signup & Login (Mocked)
- ✅ JWT Authentication
- ✅ User Chatrooms
- 🚧 Async AI message queue (to be integrated)
- 🚧 Google Gemini API integration (to be done)
- 🚧 Stripe subscription (Pro/Free Tier)

---

## 📂 Project Structure

```

/controllers
/models
/routes
/services
/middleware
/index.js
.env

````

---

## ⚙️ Environment Setup

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/gemini
JWT_SECRET=your_jwt_secret
````

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

---

## 🔐 Authentication

### Signup (OTP mocked)

**POST** `/auth/signup`

```json
{
  "mobile": "9876543210"
}
```

### Verify OTP

**POST** `/auth/verify-otp`

```json
{
  "mobile": "9876543210",
  "otp": "123456"
}
```

---

## 📦 Postman Collection

A complete Postman collection is available under `docs/Gemini.postman_collection.json`.

---

## 📤 Deployment (Optional)

You can deploy this backend on:

* [Render](https://render.com/)
* [Railway](https://railway.app/)
* [Fly.io](https://fly.io/)

---

## 📌 Tech Stack

* Node.js (Express)
* MongoDB (Mongoose)
* JWT
* Stripe (Sandbox)
* Redis (Queue)
* Google Gemini API (Planned)

---

## 👨‍💻 Author

**Akash Jaiswal**
GitHub: [@akash2899](https://github.com/akash2899)

---

## ✅ Status

✅ Phase 1 – Auth Routes & OTP Logic Complete
🚧 Next: Phase 2 – Chatroom Creation


