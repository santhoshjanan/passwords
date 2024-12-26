# ------------------------
# 1) Build Stage
# ------------------------
FROM node:18 AS builder
LABEL authors="santhoshj"

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock/pnpm-lock.yaml)
COPY package*.json ./

# Install dependencies for building
RUN npm install

# Copy the rest of the application files
COPY . .

# Build your SvelteKit application
RUN npm run build

EXPOSE 3000

# Command to run the server
CMD ["node", "build"]
