FROM node:20-alpine AS builder

# Enable pnpm
RUN corepack enable

# Go inside app directory
WORKDIR /builder

# Copy package.json and pnpm lock file into the WORKDIR
COPY package.json pnpm-lock.yaml ./

# Install all dependencies
RUN pnpm install

# Copy necessary files to the WORKDIR
COPY . .

# Build the project
RUN ADAPTER=node pnpm run build

# Remove all dev dependencies
RUN pnpm prune --prod

FROM node:20-alpine

# Go inside the app directory
WORKDIR /app

# Copy built files that are necessary
COPY --from=builder /builder/build ./build
COPY --from=builder /builder/node_modules ./node_modules
COPY package.json .

# Run the build
CMD [ "node", "build" ]