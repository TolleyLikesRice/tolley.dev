# Install dependencies only when needed
FROM node:alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build && npm install --production --ignore-scripts --prefer-offline

ENV NODE_ENV production

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

# CMD ["yarn", "start"]
CMD ["npm", "run", "start"]