# Use the official Node.js image as the base
FROM node:23-alpine

# Install PNPM globally
RUN npm install -g pnpm

# Create app directory
WORKDIR /usr/src/app

# Copy app files (assuming .dockerignore is set up to exclude unnecessary files)
COPY --chown=node:node . /usr/src/app

# Install dependencies using PNPM
RUN pnpm install && pnpm build

# Change to non-root user
USER node
