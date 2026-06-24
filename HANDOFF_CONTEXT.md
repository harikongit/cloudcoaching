# CloudCoaching - Project Handoff Context

## Project Overview
CloudCoaching is a DevOps learning platform built with React, Tailwind CSS, and Vite. It provides interactive roadmaps, tool libraries, certifications, bootcamps, and AI-powered learning assistance for cloud engineers.

## Tech Stack
- **Frontend:** React 18 (functional components + hooks)
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **State Management:** React Context API
- **Data Storage:** Local JSON files + localStorage

## Project Structure
```
code/frontend/
├── public/data/           # JSON data files
│   ├── tools.json         # 10 DevOps tools
│   ├── roadmaps.json      # 6 learning roadmaps
│   ├── certifications.json # Cloud certifications
│   └── bootcamps.json     # Bootcamp programs
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Fixed navigation with scroll effects
│   │   ├── HeroSection.jsx    # Full-screen hero with background
│   │   ├── RoadmapViewer.jsx  # Interactive roadmap display
│   │   ├── ToolLibrary.jsx    # Tools with search/filter/bookmark
│   │   └── FeedbackForm.jsx   # User feedback collection
│   ├── pages/
│   │   ├── HomePage.jsx           # Main landing page
│   │   ├── RoadmapsPage.jsx       # All roadmaps listing
│   │   ├── ToolsPage.jsx          # All tools listing
│   │   ├── CertificationsPage.jsx # Cloud certifications
│   │   ├── BootcampsPage.jsx      # Bootcamp programs
│   │   └── AIImplementationPage.jsx # AI code generation demo
│   ├── lib/supabase.js    # Supabase client (optional)
│   ├── App.jsx            # Main app with Context + Routes
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles + Tailwind
```

## Color Palette
- **Primary:** #1E3A8A (Indigo)
- **Secondary:** #10B981 (Emerald)
- **Accent:** #F59E0B (Amber)
- **Background:** #F3F4F6 (Gray)
- **Text:** #111827 (Dark Gray)
- **Cloud Provider Colors:**
  - AWS: #FF9900
  - Azure: #0078D4
  - GCP: #4285F4
  - Terraform: #7B42BC
  - Kubernetes: #326CE5

## Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Landing page with hero, features, roadmaps preview |
| `/roadmaps` | RoadmapsPage | Full roadmaps listing |
| `/tools` | ToolsPage | Full tools library |
| `/certifications` | CertificationsPage | Cloud certifications catalog |
| `/bootcamps` | BootcampsPage | Bootcamp programs |
| `/ai-implementation` | AIImplementationPage | AI code generation demo |

## Global State (AppContext)
```javascript
{
  bookmarkedTools: [],      // Array of tool IDs
  toggleBookmark: (toolId), // Function to toggle bookmark
  userFeedback: [],         // Array of feedback objects
  addFeedback: (feedback),  // Function to add feedback
  tools: [],                // Tools from JSON
  roadmaps: [],             // Roadmaps from JSON
  certifications: [],       // Certifications from JSON
  bootcamps: [],            // Bootcamps from JSON
  loading: boolean          // Loading state
}
```

## Key Features Implemented

### 1. Interactive Roadmaps (RoadmapViewer.jsx)
- 6 roadmaps: AWS, Azure, GCP, Terraform, Kubernetes, CI/CD
- Each roadmap has multiple steps with duration, tools, resources
- Expandable step details with timeline visualization
- "Official Docs" button linking to documentation URLs
- Roadmap fields: `id`, `name`, `description`, `category`, `duration`, `difficulty`, `mainImage`, `documentationUrl`, `certifications`, `steps[]`

### 2. Tool Library (ToolLibrary.jsx)
- 10 DevOps tools with search, category filter, skill level filter
- Bookmark functionality with localStorage persistence
- Tool detail modal with share functionality
- Toast notifications for bookmark actions
- Tool fields: `id`, `name`, `description`, `skillLevel`, `cloudProvider`, `mainImage`, `categories[]`, `features[]`, `useCases[]`, `certifications[]`, `rating`, `reviews`

### 3. Certifications Page (CertificationsPage.jsx)
- Filterable by category (AWS, Azure, GCP, etc.) and difficulty
- Search functionality
- Cards with duration, cost, provider, topics
- External links to certification resources

### 4. Bootcamps Page (BootcampsPage.jsx)
- Filterable by category
- Cards with duration, start date, price, format
- Highlights list and certification info
- Enroll/Learn More buttons

### 5. AI Implementation Page (AIImplementationPage.jsx)
- Demo of AI code generation (simulated)
- 6 use case templates: Terraform, Kubernetes, CI/CD, Azure ARM, GCP Cloud Build, Ansible
- Click-to-generate functionality with loading state
- Displays generated code in terminal-style output

### 6. Feedback Form (FeedbackForm.jsx)
- Fields: Name, Email, Feedback
- Validation: Required fields, email format, min 10 chars for feedback
- Success/error states with toast messages
- Saves to localStorage via Context

### 7. Header (Header.jsx)
- Fixed position with scroll-based transparency
- Transparent on homepage hero, solid on scroll/other pages
- Mobile responsive with hamburger menu
- Active link highlighting

## Data Files Summary

### roadmaps.json (6 roadmaps)
1. AWS DevOps Engineer Path (16 weeks)
2. Azure DevOps Engineer Path (14 weeks)
3. GCP DevOps Engineer Path (14 weeks)
4. Terraform Mastery (10 weeks)
5. Kubernetes Administrator Path (12 weeks)
6. CI/CD Pipeline Mastery (8 weeks)

Each has `documentationUrl` linking to official docs.

### tools.json (10 tools)
1. Terraform - Multi-Cloud IaC
2. AWS CloudFormation - AWS IaC
3. Azure Resource Manager - Azure IaC
4. Google Cloud Deployment Manager - GCP IaC
5. Kubernetes - Container Orchestration
6. Docker - Containerization
7. Ansible - Configuration Management
8. Jenkins - CI/CD
9. GitHub Actions - CI/CD
10. Prometheus & Grafana - Monitoring

### certifications.json
AWS, Azure, GCP, Terraform, Kubernetes certifications with difficulty levels (Associate, Professional, Expert).

### bootcamps.json
Intensive training programs for AWS, Azure, GCP, Kubernetes, Multi-Cloud.

## localStorage Keys
- `bookmarkedTools`: Array of bookmarked tool IDs
- `userFeedback`: Array of feedback submissions

## Styling Notes
- Uses Tailwind utility classes throughout
- Custom animations: `animate-fadeIn`, `animate-slideIn`
- Card hover effects: `card-hover` class
- Gradient backgrounds for hero sections
- Glass effect header with `backdrop-blur`

## Running the Project
```bash
cd code/frontend
npm install
npm run dev
```
Development server: http://localhost:5173

## Supabase (Optional)
Supabase client is configured but not actively used. The app currently uses localStorage for persistence. To enable Supabase:
1. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`
2. The `isSupabaseConfigured()` function in `lib/supabase.js` checks availability

## Known Coverage
- **GitHub:** Covered in CI/CD Pipeline Mastery roadmap (steps 6-3, 6-4)
- **Docker:** Covered in AWS, Azure, GCP roadmaps + Kubernetes Administrator (step 5-1)
- **Kubernetes:** Dedicated roadmap + cloud-specific coverage (EKS, AKS, GKE)

## Future Enhancement Ideas
- User authentication with Supabase Auth
- Progress tracking for roadmaps
- Community features (comments, discussions)
- Real AI integration for code generation
- Quiz/assessment features for certifications
