FROM node:22-alpine
WORKDIR /app

COPY . .
RUN npm install

# Compila o frontend
RUN npx nx build frontend

# Vai para a pasta do frontend e serve o build
WORKDIR /app/apps/frontend
EXPOSE 4173

CMD ["npx", "vite", "preview", "--host", "--port", "4173"]
