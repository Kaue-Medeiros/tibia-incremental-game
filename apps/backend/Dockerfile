# Imagem base: node22 com a distro linux alpine
FROM node:22-alpine

# Pasta de trabalho dentro do container
WORKDIR /app


# Copia TODO o Monorepo ( filtrado pelo .dockerignore )
COPY . .


# Instala as dependencias dos workspaces
RUN npm install

# Gera o Prisma Client dentro da imagem
RUN npm exec -w backend -- prisma generate

# Entra na pasta do backend e expoe a porta da API
WORKDIR /app/apps/backend
EXPOSE 3333


# Comando que roda quando o container sobe
CMD ["npx", "tsx", "src/main.ts"]