FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8080

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY endpoints.py ./endpoints.py
COPY artifacts/models/yarko_rf_model.pkl artifacts/models/yarko_calibration.npz ./

EXPOSE ${PORT}

CMD ["sh", "-c", "uvicorn endpoints:app --host 0.0.0.0 --port ${PORT}"]
