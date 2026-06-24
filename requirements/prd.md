# Product Requirements Document (PRD) for CloudCoaching

## 1. Introduction
CloudCoaching is an educational platform designed to provide users with access to a variety of coaching tools and roadmaps. The platform aims to enhance learning experiences by integrating interactive 2D and 3D animations, making the content more engaging and visually appealing. Target users include students, educators, and professionals seeking to improve their skills through structured learning paths. The key value proposition of CloudCoaching is to offer a dynamic and interactive learning environment that leverages modern web technologies.

## 2. Features

### Core Features:
- **Interactive Roadmaps**: Users can explore educational roadmaps with integrated 2D and 3D animations.
- **Tool Library**: Access a comprehensive library of tools categorized by subject and skill level.
- **Responsive Design**: Ensures optimal viewing experience across all devices.
- **Search and Filter**: Users can search and filter tools and roadmaps based on their interests and needs.

### Additional Features:
- **User Feedback**: Collect user feedback on tools and roadmaps to improve content quality.
- **Bookmarking**: Users can bookmark their favorite tools and roadmaps for easy access.

## 3. User Stories
- As a student, I want to explore interactive roadmaps so that I can visualize my learning path.
- As an educator, I want to access a library of tools to enhance my teaching materials.
- As a professional, I want to filter tools by skill level so that I can find resources that match my expertise.
- As a user, I want to provide feedback on tools so that I can contribute to content improvement.
- As a user, I want to bookmark my favorite resources so that I can easily revisit them.

## 3.5. Interactive Elements

**Button Specifications:**
- **Explore Roadmaps**: Opens roadmap viewer with 2D/3D animations → Allows navigation through roadmap steps → On success: Displays detailed step information → On error: Shows "Unable to load roadmap" error message.
- **Search Tools**: Triggers search function → Filters tools based on input criteria → On success: Displays filtered results → On error: Shows "No tools found" message.
- **Bookmark Tool**: Adds tool to user's bookmarks → Confirms action with "Tool bookmarked" toast → On error: Shows "Bookmark failed" error message.

**Form Specifications:**
- **Feedback Form**: Fields [Name, Email, Feedback] → Validation [Email format, Feedback length] → Submit action [Saves feedback to local JSON] → Success state [Shows "Feedback submitted" message] → Error handling [Shows "Submission failed" message].

**Modal Specifications:**
- **Tool Details**: Triggered by clicking on a tool → Displays tool information and user reviews → User actions [Bookmark, Share] → Close behavior [Click outside or close button] → Data flow [Loads tool data from JSON].

## 4. Design & Styling

### 4.1 Color Palette
- Primary Color: #1E3A8A (Indigo)
- Secondary Color: #10B981 (Emerald)
- Accent Color: #F59E0B (Amber)
- Background Color: #F3F4F6 (Gray)
- Text Color: #111827 (Gray)

### 4.2 Typography
- Font Family: 'Roboto', sans-serif
- Headings: H1: 32px, H2: 24px, H3: 18px
- Body Text: 16px
- Font Weights: Regular (400), Medium (500), Bold (700)

### 4.3 Visual Style
The platform will feature a modern and clean aesthetic with smooth animations and transitions. The use of 2D and 3D animations will enhance the interactive experience, making learning more engaging.

### 4.4 Hero Section
**Full-Screen Hero Background:**
- Use the FIRST image from Section 6 as full-screen background covering entire viewport.
- Hero section height: 100vh (full viewport height).
- Background image covers header area with navigation overlaid on top.
- Header navigation: transparent/glass effect with backdrop-blur.
- Dark overlay: rgba(0,0,0,0.4) over background image for text readability.
- Content: Compelling headline, subtitle, and dual CTA buttons centered.
- Modern design: Netflix-style hero with professional look and feel.

### 4.5 Key Design Elements
- Full-width hero banner with background image.
- Transparent navigation overlaid on hero.
- High-quality product images.
- Interactive elements with hover effects.
- Smooth animations and transitions.

## 5. Technical Implementation

### 5.1 Directory Structure
```
/src
  - App.jsx
  - main.jsx
  - index.css
  - components/
    - HeroSection.jsx
    - RoadmapViewer.jsx
    - ToolLibrary.jsx
    - FeedbackForm.jsx
  - pages/
    - HomePage.jsx
    - RoadmapsPage.jsx
    - ToolsPage.jsx
  - hooks/
    - useSupabase.js (ONLY if app needs data layer)
/public/
  - data/
    - tools.json
    - roadmaps.json
/index.html
```

### 5.2 Data Persistence

**Unified Data Layer with Local Storage and Supabase Integration:**

- **Data Layer Detection:**
  - IF app needs data storage (cart, orders, user data, etc.) → Create `/src/hooks/useSupabase.js` with unified hooks
  - IF app is static/display-only → Skip Supabase integration entirely

- **Authentication Detection:**
  - IF app has login/signup/auth features → Use Supabase Auth with unified hooks
  - IF no auth mentioned → Use localStorage-only pattern

- **Baseline Files (auto-generated by system):**
  - `/src/lib/supabase.js` - Generic Supabase client (no imports until configured)
  - `/supabase/config.toml` - Generic Supabase configuration

- **Unified Pattern (when Supabase configured):**
  - All hooks check `isSupabaseConfigured()` and fallback to localStorage
  - Use separate queries + JavaScript merging (NO foreign key queries)
  - Graceful degradation when Supabase unavailable
  - NO Supabase imports until user enables Supabase integration

- **useSupabase.js Implementation Rules:**
  - MUST import `isSupabaseConfigured` from '../lib/supabase.js'
  - DO NOT create hardcoded `isSupabaseConfigured` function in useSupabase.js
  - All hooks use the imported function to check Supabase availability
  - Example: `import { isSupabaseConfigured } from '../lib/supabase.js';`

- **LocalStorage Keys:**
  - `bookmarkedTools`: Stores user bookmarked tools
  - `userFeedback`: Stores user feedback submissions

- **JSON File Locations:**
  - `/public/data/tools.json`: Contains tool data
  - `/public/data/roadmaps.json`: Contains roadmap data

- **Requires Database:** false (client-side Supabase when configured)

### 5.3 State Management
- Use React Context API for global state
- **Global State Structure:**
  - `bookmarkedTools`: Array of tool IDs bookmarked by the user
  - `userFeedback`: Array of feedback objects submitted by users

- **Component Access:**
  Components access state via React Context API, using context providers and consumers.

### 5.4 Component Architecture

**Icons:** Use lucide-react for all icons (NO emojis). Import: `import { Home, User } from 'lucide-react'`

**Data Fields:** Use camelCase field names for data fields/columns that work with Supabase: e.g. `name`, `description`, `mainImage`, `parentId` (NOT snake_case like main_image, parent_id).

**Example Data Structure:**
```javascript
// Generic tool object
{ id: "1", name: "Tool Name", description: "Tool description", mainImage: "url", categories: [] }
```

**Hero Section Implementation:**
- Create HeroSection component with 100vh height and background image.
- Use first image from Section 6 as background: `backgroundImage: 'url(IMAGE_URL)'`
- Add dark overlay: `background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(IMAGE_URL)'`
- Position navigation with absolute positioning, backdrop-blur, and transparent background.
- Navigation background: transparent or rgba(255,255,255,0.1) maximum - NEVER use opaque backgrounds that block the hero image.
- Glass effect means: backdrop-filter: blur(10px) + transparent/minimal background (NOT white frosted glass).
- Center content vertically and horizontally.
- Include compelling headline, subtitle, and CTA buttons.

**Key Components:**
- **HeroSection**: Full-screen landing section with background image from Section 6 (first image).
- **RoadmapViewer**: Displays interactive roadmaps with animations.
- **ToolLibrary**: Lists and filters available tools.
- **FeedbackForm**: Collects user feedback.

**Component Hierarchy:**
```
App
 ├─ HeroSection
 ├─ RoadmapViewer
 ├─ ToolLibrary
 └─ FeedbackForm
```

## 6. Images & Assets
IMAGE_SEARCH_CRITERIA: [Educational Platform Context], [Roadmap], [Tool], [Feedback], [Bookmark]

1. [Educational Platform Context](https://images.unsplash.com/photo-1712903911060-9ee57b3fad0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk3Nzh8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHBsYXRmb3JtJTIwY29udGV4dHxlbnwwfDB8fHwxNzgyMDkzMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080)
2. [Roadmap](https://images.unsplash.com/photo-1712903911060-9ee57b3fad0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk3Nzh8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHBsYXRmb3JtJTIwY29udGV4dHxlbnwwfDB8fHwxNzgyMDkzMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080)
3. [Tool](https://images.unsplash.com/photo-1471958680802-1345a694ba6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk3Nzh8MHwxfHNlYXJjaHwxfHxyb2FkbWFwfGVufDB8MHx8fDE3ODIwOTMzODh8MA&ixlib=rb-4.1.0&q=80&w=1080)
4. [Feedback](https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk3Nzh8MHwxfHNlYXJjaHwxfHx0b29sfGVufDB8MHx8fDE3ODIwOTMzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080)
5. [Bookmark](https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk3Nzh8MHwxfHNlYXJjaHwxfHxmZWVkYmFja3xlbnwwfDB8fHwxNzgyMDkzMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080)

**MINIMUM 5 IMAGES REQUIRED** - First image is hero/banner, remaining are for products/content

## 7. Conclusion
This PRD outlines the development of CloudCoaching, an educational platform that integrates interactive 2D and 3D animations to enhance learning experiences. The next steps involve setting up the project structure, implementing the core features, and ensuring a seamless user experience through responsive design and interactive elements. The development team should focus on creating a visually appealing and engaging platform that meets the needs of its target users.