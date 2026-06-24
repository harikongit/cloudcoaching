# CloudCoaching - DevOps Learning Platform

A modern educational platform for DevOps professionals featuring interactive roadmaps, tool libraries, certifications, bootcamps, and AI-powered learning assistance.

## Tech Stack

- **Frontend:** React 18 with functional components and hooks
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **State Management:** React Context API
- **Data Storage:** Local JSON files + localStorage

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js

To verify your installations:

```bash
node --version
npm --version
```

## Installation

1. **Navigate to the frontend directory:**

```bash
cd code/frontend
```

2. **Install dependencies:**

```bash
npm install
```

## Running the Application

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at: **http://localhost:5173**

### Production Build

Create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder with optimized static files.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

The preview will be available at: **http://localhost:4173**

## Project Structure

```
code/frontend/
├── public/
│   └── data/
│       ├── tools.json          # DevOps tools data
│       ├── roadmaps.json       # Learning roadmaps
│       ├── certifications.json # Cloud certifications
│       └── bootcamps.json      # Bootcamp programs
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx     # Landing hero with navigation
│   │   ├── RoadmapViewer.jsx   # Interactive roadmap display
│   │   ├── ToolLibrary.jsx     # DevOps tools listing
│   │   └── FeedbackForm.jsx    # User feedback collection
│   ├── pages/
│   │   ├── HomePage.jsx        # Main landing page
│   │   ├── RoadmapsPage.jsx    # All roadmaps listing
│   │   ├── ToolsPage.jsx       # All tools listing
│   │   ├── CertificationsPage.jsx  # Cloud certifications
│   │   ├── BootcampsPage.jsx   # Bootcamp programs
│   │   └── AIImplementationPage.jsx # AI-powered learning
│   ├── lib/
│   │   └── supabase.js         # Supabase client (optional)
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 5173 |
| `npm run build` | Create production build in `dist` folder |
| `npm run preview` | Preview production build on port 4173 |
| `npm run lint` | Run ESLint for code quality checks |

## Features

### 1. Interactive Roadmaps
- AWS DevOps Engineer Path
- Azure DevOps Path
- GCP DevOps Path
- Terraform Mastery
- Kubernetes Administrator
- CI/CD Pipeline Mastery

### 2. DevOps Tools Library
- Infrastructure as Code (Terraform, CloudFormation, ARM, Pulumi)
- Container Orchestration (Kubernetes, Docker)
- Configuration Management (Ansible)
- CI/CD (Jenkins, GitHub Actions, GitLab CI)
- Monitoring (Prometheus, Grafana)

### 3. Cloud Certifications
- AWS Solutions Architect
- AWS DevOps Engineer Professional
- Azure Administrator
- Azure DevOps Engineer Expert
- GCP Professional Cloud Architect
- Terraform Associate
- Certified Kubernetes Administrator (CKA)

### 4. Bootcamp Programs
- AWS Cloud Engineering Bootcamp
- Azure DevOps Bootcamp
- GCP Cloud Architect Bootcamp
- Kubernetes & Container Orchestration
- Multi-Cloud DevOps Bootcamp

### 5. AI Implementation
- AI-powered code generation
- Infrastructure templates
- Learning assistance

## Environment Variables (Optional)

For Supabase integration, create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Kill the process using the port (Linux/Mac)
lsof -ti:5173 | xargs kill -9

# Or specify a different port
npm run dev -- --port 3000
```

### Node Modules Issues

If you encounter dependency issues:

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

If the build fails:

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

## Deployment

### Static Hosting (Vercel, Netlify, etc.)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

### Docker (Optional)

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t cloudcoaching .
docker run -p 80:80 cloudcoaching
```

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.
