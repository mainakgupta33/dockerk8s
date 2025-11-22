# Stage 1: Build assets
FROM node:alpine AS builder

WORKDIR /app

# Copy source files
COPY index.html style.css script.js ./

# "Build" the application (in a real app, this would be a webpack/parcel build)
RUN mkdir -p dist
RUN cp index.html style.css script.js dist/

# Stage 2: Production server
FROM nginx:alpine

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
