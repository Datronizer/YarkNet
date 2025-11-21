# BramHacks-2025
YarkNet is a research dashboard that predicts how the Yarkovsky effect subtly alters an asteroid’s orbit and reports the expected drift with an honest uncertainty band. It also ranks targets for follow-up by combining prediction confidence, close-approach risk (MOID), and size, and visualizes how the drift would change their paths over time.

## Running Development App Locally

Prereq: Node.js, python3, pip

From root dir of repo, install all python dependencies:

```sh
pip install -r requirements.txt
```

Start backend server:

```sh
uvicorn endpoints:app --reload --port 8080
```

In a new terminal, go to frontend dir and install dependencies:

```sh
cd frontend/
npm install
```

Start frontend live server in frontend dir:

```sh
npm start
```

## Containerized Deployments

### Backend (FastAPI + model) for ECS
Build and run locally:
```sh
docker build -t yarknet-backend .
docker run -p 8080:8080 -e PORT=8080 yarknet-backend
```

ECS/ECR quick notes:
- Push `yarknet-backend` to your ECR repo (`aws ecr create-repository ...`, `docker tag`, `docker push`).
- Use the image in an ECS task definition exposing container port 8080; service listener should map to that port.
- No extra volumes are needed—the model artifacts (`yarko_rf_model.pkl`, `yarko_calibration.npz`) are baked into the image.

### Frontend on Netlify
- Netlify reads `netlify.toml` and builds from the `vite-frontend/` folder (`npm install && npm run build`, publish `dist/`).
- Set `VITE_API_BASE_URL` in Netlify environment variables to your ECS backend URL (e.g., `https://api.example.com`). Optional: override `VITE_API_HOST`/`VITE_API_PORT` for local dev.
- After deploy, the app will call the backend at that URL.
