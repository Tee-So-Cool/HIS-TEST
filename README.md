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
git clone https://github.com/Tee-So-Cool/HIS-TEST.git
cd HIS-TEST
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
