# Project Organization

## Folder Structure

``` 
src/
├── app.module.ts
├── main.ts
├── common/
│ ├── decorators/
│ ├── filters/
│ ├── guards/
│ ├── interceptors/
│ └── pipes/
├── config/
├── modules/
│ ├── users/
│ │ ├── dto/
│ │ ├── entities/
│ │ ├── users.controller.ts
│ │ ├── users.service.ts
│ │ └── users.module.ts
│ ├── auth/
│ │ ├── auth.controller.ts
│ │ ├── auth.service.ts
│ │ └── auth.module.ts
│ └── ...
└── prisma/
├── schema.prisma
└── prisma.service.ts
```

## Folder Descriptions
- **modules/**: Each domain feature  
- **common/**: Reusable utilities (guards, filters, interceptors)  
- **config/**: Configuration logic and environment validation  
- **prisma/**: Database schema and Prisma service  
- **app.module.ts**: Root NestJS module  
- **main.ts**: Application entry point

## Coding Conventions
- TypeScript strict mode  
- DTOs for every input  
- Services contain business logic  
- Filenames: kebab-case, classes PascalCase, functions/variables camelCase  
- File naming:
  - `*.module.ts` → module  
  - `*.controller.ts` → controller  
  - `*.service.ts` → service  
  - `*.dto.ts` → DTO  
  - `*.model.ts` → entity/model  
  - `*.interface.ts` → interface  
  - `*.guard.ts` → guard  
  - `*.middleware.ts` → middleware  
  - `*.interceptor.ts` → interceptor  
  - `*.pipe.ts` → pipe  
  - `*.strategy.ts` → strategy  
  - `*.spec.ts` → test file  

## Error Handling
Use NestJS built-in exceptions:

```json
{
  "statusCode": number,
  "message": string,
  "error": string
}
```

## Development Environment (VS Code)

### Recommended Extensions
- Prettier
- Prisma
- NestJS Snippets
- Docker
- ESLint

### Optional Tools
- Postman / Insomnia
- Docker Desktop
- Database client

---