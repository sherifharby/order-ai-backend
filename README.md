# 🚀 Order AI Backend (NestJS)

AI-powered backend system to process **printed paper orders** using OCR + rule-based AI, with **auto-approval**, **admin review**, and **workflow automation (n8n-ready)**.

> Built for real-world warehouse & operations use cases.

---

## 🧠 What Problem This Solves

Companies processing **hundreds of printed orders daily** suffer from:

* Manual calculations
* Human errors
* Slow review cycles

This system:

* Reads printed orders (any format)
* Extracts products automatically
* Calculates totals & confidence
* Auto-approves high-confidence orders
* Sends low-confidence orders for admin review

---

## ✨ Features

* ✅ OCR from images (Tesseract – 100% free)
* ✅ Rule-based AI (no paid APIs)
* ✅ Confidence scoring per order
* ✅ Auto approval / manual review
* ✅ Admin approval dashboard (API)
* ✅ Auth + JWT (Admin / Reviewer roles)
* ✅ MongoDB persistence
* ✅ Audit logs (who approved what)
* ✅ n8n workflow ready

---

## 🏗️ Architecture Overview

```
Client (Postman / Frontend)
        │
        ▼
NestJS API
        │
        ├── OCR Module (Image → Text)
        ├── AI Module (Parse Products)
        ├── Decision Engine (Approve / Review)
        ├── Orders Module (DB)
        └── Auth Module (JWT)
```

---

## 🧱 Tech Stack

* **Backend:** NestJS (TypeScript)
* **Database:** MongoDB + Mongoose
* **Auth:** Passport + JWT
* **OCR:** Tesseract.js
* **AI:** Rule-based + fuzzy matching
* **Automation:** n8n (Webhook ready)

---

## 📦 Project Structure

```
src/
│
├── auth/        # JWT auth & login
├── users/       # Admin & reviewer users
├── orders/      # Order processing logic
├── ocr/         # OCR extraction
├── ai/          # AI parsing logic
├── decision/    # Auto-approval engine
├── audit/       # Approval logs
├── data/        # Products list
│
├── app.module.ts
├── main.ts
└── seed.ts      # Create admin user
```

---

## ⚙️ Installation

```bash
# clone repo
git clone https://github.com/sherifharby/order-ai-backend.git
cd order-ai-backend

# install deps
npm install
```

---

## 🔑 Environment Variables

Create `.env`

```env
MONGO_URI=mongodb://localhost:27017/order-ai
JWT_SECRET=supersecret
```

---

## ▶️ Run Project

```bash
# development
npm run start:dev

# production
npm run build
npm run start
```

Server runs on:

```
http://localhost:3000
```

---

## 🌱 Seed Admin User

```bash
npx ts-node src/seed.ts
```

Default admin:

```
email: admin@test.com
password: 123456
```

---

## 🔐 Authentication

### Login

`POST /auth/login`

```json
{
  "email": "admin@test.com",
  "password": "123456"
}
```

Response:

```json
{
  "access_token": "JWT_TOKEN"
}
```

Use token as:

```
Authorization: Bearer <token>
```

---

## 📦 Orders API

### Process Order (OCR + AI)

`POST /orders/process`

**Form-Data**

* `file` → image of printed order

Response:

```json
{
  "items": [],
  "confidence": 0.91,
  "status": "approved"
}
```

---

### Approve Order

`PATCH /orders/:id/approve`

---

## 🧠 Decision Engine Logic

```ts
if (confidence >= 0.85) {
  autoApprove = true;
} else {
  manualReview = true;
}
```

This reduces admin workload dramatically.

---

## 🤖 AI Engine (No Paid APIs)

* Rule-based parsing
* Product list matching
* Size & quantity detection
* Confidence scoring

✅ Works offline
✅ Zero cost

---

## 🔁 n8n Integration

The system can:

* Send webhook on new order
* Trigger approval workflows
* Notify admins automatically

n8n workflow JSON included.

---

## 📈 Why This Project Matters

This project demonstrates:

* Real business problem solving
* Clean NestJS architecture
* AI without expensive APIs
* Automation mindset
* Production-ready backend

Perfect for:

* Backend roles
* Automation roles
* AI-integrated systems

---

## 🛣️ Future Improvements

* Swagger API docs
* Frontend dashboard
* AI learning from admin edits
* Multi-warehouse support

---

## 👨‍💻 Author

**Sherif Harby**

* Backend Engineer (NestJS / Node.js)
* Automation & AI Systems

🔗 LinkedIn: *www.linkedin.com/in/sherif-harby*
