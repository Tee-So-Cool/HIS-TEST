# Agnos Backend API

Backend API สำหรับ Candidate Assignment (Back-end Developer) พัฒนาด้วย **NestJS + Prisma + PostgreSQL**

---

## 🚀 Tech Stack

- **Node.js**
- **NestJS** (Framework)
- **Prisma ORM**
- **PostgreSQL**
- **TypeScript**

---

## 📦 Prerequisites

- Node.js >= 18
- PostgreSQL
- npm

---

## ⚙️ Setup Project

### 1️⃣ Clone repository
```bash
git clone <repo-url>
cd agnos-backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

---

## 🗄️ Database Setup

### 3️⃣ Create PostgreSQL database

```sql
CREATE DATABASE agnos_db;
```

### 4️⃣ Configure Environment Variables

Create `.env` file
```env
DATABASE_URL="postgresql://postgres:123@localhost:5432/agnos_db"
```

> ⚠️ เปลี่ยน `username / password` ให้ตรงกับเครื่องของคุณ

---

## 🧬 Prisma Setup

### 5️⃣ Generate Prisma Client
```bash
npx prisma generate
```

### 6️⃣ Run Migration
```bash
npx prisma migrate dev --name init
```

---

## ▶️ Run Application

```bash
npm run start:dev
```

Server will run at:
```
http://localhost:3000
```

---

## 📚 API Endpoints

### 👤 Users

#### Create User
```http
POST /users
```
```json
{
  "name": "John",
  "email": "john@mail.com"
}
```

#### Get All Users
```http
GET /users
```

---

### 🧾 Records

#### Create Record
```http
POST /records
```
```json
{
  "title": "Lunch",
  "amount": 200,
  "userId": 1
}
```

#### Get Records By User
```http
GET /records?userId=1
```

---

## ✅ Validation Rules

- Email ต้องไม่ซ้ำ (unique)
- amount ต้องเป็น number
- userId ต้องมีอยู่จริง

---

## 🧪 Testing (Postman)

- ใช้ Postman ส่ง request
- ตรวจสอบ Response Status (200 / 201)

---

## 🛑 Stop PostgreSQL (Windows)

```bash
net stop postgresql-x64-15
```

---

## 📌 Notes

- ใช้ `ValidationPipe` (whitelist, transform)
- Prisma Service ถูก inject ผ่าน Module อย่างถูกต้อง
- รองรับ query params (`userId`)

---

## 👨‍💻 Author

Candidate Assignment – Back-end Developer

---

✅ **Project พร้อมใช้งานและผ่าน requirement พื้นฐานทั้งหมด**

