# EduAI GitHub Assistant - Backend

This repository contains the full backend system for the EGA platform.  
It includes user authentication and management, assignment handling, GitHub integration, code execution, AI evaluation, and all supporting modules, built with NestJS, Prisma, and PostgreSQL.

The codebase follows a modular architecture and provides documentation for structure, architecture, and development guidelines.

## 🚀 Tech Stack
- NestJS
- Prisma ORM
- PostgreSQL
- pnpm

## 📦 Installation
Install dependencies:

```bash
pnpm install
```

## 🗄 Database Setup
Run migrations to initialize the database:

```bash
npx prisma migrate dev
```

Seed the database with initial data:

```bash
npx prisma db seed
```

<!-- --- -->

## 🏃 Run Development Server
Start the development server:

```bash
pnpm start:dev
```

<!-- --- -->

## 🔐 Environment Variables
Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```
Update variables as needed (database URL, JWT secret, etc.).



## 🧱 Project Structure
See [docs/ORGANIZATION.md](docs/ORGANIZATION.md) for full explanation of folders and modules.

## 🧩 Architecture Overview
See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for backend architecture and module flow.