# Stage 1: Builder
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runner
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
# No CMD needed here because Nginx has its own default CMD to start the server!