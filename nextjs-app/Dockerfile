FROM node:latest
WORKDIR /app
COPY . . 
LABEL description="projet avec nextjs"
RUN apt update -y && apt upgrade -y
EXPOSE 3000
CMD ["npm","run","dev"]  