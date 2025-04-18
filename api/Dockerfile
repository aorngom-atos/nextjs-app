FROM debian:latest
WORKDIR /app
COPY . . 
LABEL description="projet avec python"
RUN apt update && apt upgrade -y
RUN apt install python3 -y
RUN apt install python3-pip -y
RUN pip3 install -r requirements.txt --break-system-packages
EXPOSE 8000
COPY wait-for-it.sh /wait-for-it.sh
CMD ["/wait-for-it.sh", "postgres:5432", "--", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
