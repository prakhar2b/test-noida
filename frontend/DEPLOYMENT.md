# InvestoXpert Noida - Docker Deployment Guide for Hostinger

## Quick Start

### Option 1: Using Docker Compose (Recommended)
```bash
docker-compose up -d --build
```

### Option 2: Manual Docker Build
```bash
# Build the image
docker build -t investoxpert-noida:latest .

# Run the container
docker run -d -p 80:80 --name investoxpert-noida investoxpert-noida:latest
```

## Files Required for Deployment

Make sure these files are in your project root:
- `Dockerfile` - Multi-stage build configuration
- `nginx.conf` - Nginx server configuration
- `.dockerignore` - Files to exclude from Docker build
- `docker-compose.yml` - Docker Compose configuration

## Hostinger Docker Manager Deployment

### Step 1: Prepare Your Repository
1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Make sure all Docker files are included

### Step 2: Connect to Hostinger
1. Log in to your Hostinger account
2. Go to **VPS** or **Cloud Hosting** section
3. Navigate to **Docker Manager**

### Step 3: Deploy via Hostinger Docker Manager

#### Method A: Using Git Repository
1. Click "Add New Container"
2. Select "From Git Repository"
3. Enter your repository URL
4. Hostinger will detect the Dockerfile automatically
5. Configure:
   - Container Name: `investoxpert-noida`
   - Port Mapping: `80:80`
   - Restart Policy: `unless-stopped`
6. Click "Deploy"

#### Method B: Using Docker Hub
1. First, push to Docker Hub:
```bash
# Login to Docker Hub
docker login

# Tag the image
docker tag investoxpert-noida:latest yourusername/investoxpert-noida:latest

# Push to Docker Hub
docker push yourusername/investoxpert-noida:latest
```

2. In Hostinger Docker Manager:
   - Click "Add New Container"
   - Select "From Docker Hub"
   - Enter: `yourusername/investoxpert-noida:latest`
   - Configure port mapping: `80:80`
   - Click "Deploy"

### Step 4: Configure Domain (Optional)
1. Go to DNS settings in Hostinger
2. Add an A record pointing to your VPS IP
3. Configure SSL certificate (Let's Encrypt recommended)

## Environment Variables (If Needed)

If you need to configure environment variables for production:

```bash
docker run -d -p 80:80 \
  -e REACT_APP_API_URL=https://api.yourdomain.com \
  --name investoxpert-noida \
  investoxpert-noida:latest
```

Or in docker-compose.yml:
```yaml
services:
  investoxpert-noida:
    environment:
      - REACT_APP_API_URL=https://api.yourdomain.com
```

## Container Management Commands

```bash
# View running containers
docker ps

# View logs
docker logs investoxpert-noida

# Stop container
docker stop investoxpert-noida

# Start container
docker start investoxpert-noida

# Restart container
docker restart investoxpert-noida

# Remove container
docker rm -f investoxpert-noida

# Update container (rebuild)
docker-compose down
docker-compose up -d --build
```

## Resource Requirements

- **Memory:** 128MB minimum, 256MB recommended
- **CPU:** 0.5 vCPU minimum
- **Storage:** 100MB for the image

## SSL/HTTPS Configuration

For production with HTTPS, update nginx.conf or use a reverse proxy like Traefik or Nginx Proxy Manager.

### Using Nginx Proxy Manager (Recommended for Hostinger)
1. Deploy Nginx Proxy Manager container
2. Add a new proxy host pointing to your app container
3. Enable SSL with Let's Encrypt

## Troubleshooting

### Container won't start
```bash
docker logs investoxpert-noida
```

### Port already in use
```bash
docker ps -a  # Check for existing containers
docker rm -f <container-id>
```

### Build fails
```bash
# Clean build cache
docker builder prune
docker build --no-cache -t investoxpert-noida:latest .
```

## Health Check

The container includes a health check that verifies the nginx server is responding:
```bash
docker inspect --format='{{.State.Health.Status}}' investoxpert-noida
```

---

## Contact

For issues or questions, please create an issue in the repository.
