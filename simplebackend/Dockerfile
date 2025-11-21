# Stage 1: Build Environment
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package definitions
COPY package*.json ./

# Install all dependencies (including devDependencies if you had any)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# ---

# Stage 2: Production Environment
FROM node:22-alpine
WORKDIR /app

# Copy only the production dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy the application code and package definitions
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/index.js ./index.js

# Create a directory for persistent data
VOLUME /data

# Expose the port and run the application
EXPOSE 3000
CMD [ "npm", "start" ]
