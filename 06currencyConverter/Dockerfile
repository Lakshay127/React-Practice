# Use Node 20.19.0 image
FROM node:20.19.0

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port Vite runs on
EXPOSE 5173

# Start the dev server
CMD ["npm", "run", "dev"]
