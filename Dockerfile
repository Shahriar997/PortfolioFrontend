# Use Node.js 17 as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY ./package.json ./
COPY ./yarn.lock ./

# Install project dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY ./ ./

# Expose the port that Next.js runs on (usually 3000)
EXPOSE 3000

# Start the Next.js development server
CMD ["yarn", "dev"]
