FROM node:18-bullseye AS builder

WORKDIR /app


# Install build essentials and required libraries
#RUN apt-get update && apt-get install -y \
#  libvips-dev \
#  python3 \
#  make \
#  g++ \
#  && rm -rf /var/lib/apt/lists/*
# Update package lists and install Redis server
RUN apt-get update
RUN apt-get install -y redis-server

# Copy package files and install dependencies
COPY package*.json ./
ENV npm_config_platform=linux
RUN npm install --cpu=x64 --os=linux sharp
RUN npm ci
RUN npm rebuild sharp

# Copy app code and build
COPY . .
RUN npm run build

# ---------- Stage 2: Production ----------
FROM node:18-bullseye-slim

WORKDIR /app
# Install runtime dependencies
RUN apt-get update && apt-get install -y \
  libvips \
  && rm -rf /var/lib/apt/lists/*

# Copy application files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/migrate.js ./
COPY --from=builder /app/database_reset.js ./
COPY --from=builder /app/migrations ./migrations
COPY --from=builder /app/our-compound-461022-a2-763699c56b4c.json ./

# Install production dependencies and ensure sharp compatibility
RUN npm ci --production && \
    npm rebuild sharp --build-from-source

# Optional: copy env file if needed
# COPY .env .env
ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001
CMD ["sh", "-c", "node migrate.js && npm start"]
