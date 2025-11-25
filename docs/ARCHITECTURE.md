# Architecture Overview
**Date:** November 17, 2025

## 1. Backend Framework
The backend is built using NestJS, which provides:
- Modular architecture for separation of concerns
- Built-in dependency injection
- TypeScript support
- Strong conventions for controllers, services, and providers
- Easy integration with ORMs and PostgreSQL

### Architecture Style
- Monolithic Modular Architecture
- Each domain represented as a standalone NestJS module

### API Style
- REST API with JSON responses
- GraphQL may be considered in future

## 2. Tech Stack
- Runtime: Node.js (LTS)
- Framework: NestJS
- Language: TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Authentication: OAuth
- Code Execution: Local Docker Sandbox
- Testing: Jest

## 3. Core Backend Modules
Modules are placed under `/src/modules`

### 3.1 Authentication & Authorization Module (`auth/`)
- GitHub OAuth login
- JWT token generation
- Roles (LECTURER / STUDENT)
- Route guards
- Token validation

### 3.2 User Management Module (`users/`)
- Manage user profiles
- Store GitHub identifiers
- Role management
- Logging user activity

### 3.3 Assignment Management Module (`assignments/`)
- Create/edit/delete assignments
- Track deadlines and metadata
- Attach starter code references

### 3.4 GitHub Integration Module (`github/`)
- Clone template repos
- Commit student submissions
- Create/manage student repos
- Fetch commit history

### 3.5 Code Execution Service Module (`code-runner/`)
- Execute student code in secure Docker sandbox

### 3.6 AI Evaluation Service Module (`ai-evaluator/`)
- Evaluate submissions
- Generate feedback and score breakdown

### 3.7 Authentication Flow (OAuth)
1. User clicks “Log in with GitHub”
2. GitHub returns temporary code
3. Backend exchanges code for access token
4. Fetch GitHub profile
5. Create/update user in DB
6. Return JWT to frontend

## 4. Layer Interactions
- **Controller Layer**: handles HTTP requests, input validation, calls services  
- **Service Layer**: business logic, calls repositories  
- **Repository Layer**: abstracts DB operations via Prisma  
- **Database Layer**: PostgreSQL, accessed only via repositories

Example: Student submits coding challenge → Controller → Service → Repository → DB → Response