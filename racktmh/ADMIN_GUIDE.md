# Rotaract Club Admin UI Documentation

## Overview
A complete club admin panel built for the `racktmh` (Rotaract Club of Kathmandu Height) web application. This system allows administrators to manage pages, content, navigation, and UI components from a centralized dashboard.

## Features

### 📊 Dashboard
- **Overview Statistics**: See key metrics at a glance
  - Total pages count
  - Published vs. draft pages
  - Total sections
  - Recent activity
- **Quick Actions**: Fast access to common tasks
- **Recent Pages**: View recently modified pages

### 📄 Pages Manager
- **Create Pages**: Add new pages to your website
- **Edit Pages**: Modify existing page content
- **Delete Pages**: Remove pages with confirmation
- **Search & Filter**: Find pages by title, slug, or status
- **Publish/Unpublish**: Control page visibility
- **Status Tracking**: See published vs. draft pages at a glance

### ✏️ Page Editor
Build pages by adding and managing sections:
- **Page Information**: Edit title, slug, description, and publication status
- **Sections Management**:
  - Add multiple section types (hero, content, gallery, team, CTA, testimonial, FAQ, form, stats)
  - Edit section content and properties
  - Reorder sections with drag capability
  - Toggle section visibility
  - Delete sections

### 🗂️ Navigation Manager
- **Navigation Items**: Create, edit, and delete navigation menu items
- **Reorder Menu**: Change the order of navigation items
- **Show/Hide Items**: Control which items appear in the menu
- **Site Configuration**: Manage site name, description, and branding colors

### 🎨 Component Library
- **Pre-built Components**: Browse categorized UI components
- **Code Snippets**: Copy component code with one click
- **Component Categories**:
  - Buttons
  - Cards
  - Sections
  - Headers
  - Footers
- **Preview**: See how components look before copying
- **Search & Filter**: Find components by category

### ⚙️ Settings
- **General Settings**: Site title, URL, admin email
- **SEO Configuration**: Meta descriptions, keywords, titles
- **Contact Information**: Email, phone, address
- **Social Media Links**: Facebook, Instagram, LinkedIn, Twitter
- **Feature Flags**: Enable/disable features like comments, newsletter, downloads
- **Maintenance Mode**: Enable maintenance page
- **Danger Zone**: Reset settings or clear cache

## File Structure

```
racktmh/
├── src/
│   ├── app/
│   │   └── admin/
│   │       ├── layout.tsx          # Admin layout wrapper
│   │       ├── page.tsx            # Dashboard
│   │       ├── pages/
│   │       │   ├── page.tsx        # Pages manager
│   │       │   └── [id]/
│   │       │       └── page.tsx    # Page editor
│   │       ├── navigation/
│   │       │   └── page.tsx        # Navigation manager
│   │       ├── components/
│   │       │   └── page.tsx        # Component library
│   │       └── settings/
│   │           └── page.tsx        # Site settings
│   ├── components/
│   │   ├── AdminShell.tsx          # Admin layout shell
│   │   └── PageEditor.tsx          # Page editing component
│   └── lib/
│       └── admin-data.ts           # Data types and mock data
```

## Key Components

### AdminShell
Main layout wrapper with:
- Responsive sidebar navigation
- Top navigation bar
- Mobile menu toggle
- Admin user info display
- Link to view live site

### PageEditor
Complete page editor with:
- Page information form
- Section management interface
- Reorder functionality
- Visibility controls
- Save/cancel actions

## Data Structures

### PageData
```typescript
interface PageData {
  id: string;
  slug: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  sections: PageSection[];
  seo?: SeoConfig;
}
```

### PageSection
```typescript
interface PageSection {
  id: string;
  type: "hero" | "content" | "gallery" | "team" | "cta" | "testimonial" | "faq" | "form" | "stats";
  title?: string;
  description?: string;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  order: number;
  isVisible: boolean;
}
```

### NavigationItem
```typescript
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  order: number;
  isVisible: boolean;
  children?: NavigationItem[];
}
```

## Accessing the Admin Panel

1. **Via URL**: Navigate to `http://localhost:3000/admin`
2. **Dashboard**: First page shows overview and quick actions
3. **Navigation**: Use sidebar to access different sections

## Styling

The admin panel uses:
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **CSS Variables** for theming (matches site theme)

## UI Theme
- **Primary Color**: Rotaract Pink (`#d91f63`)
- **Background**: Dark theme (`--background`)
- **Surface**: Elevated containers (`--surface`)
- **Text**: Foreground color (`--foreground`)

## Integration Notes

### Current State
- Uses **mock data** for demonstration
- All data updates are logged to console
- No backend integration yet

### Future Enhancements
1. **API Integration**: Connect to backend for data persistence
2. **Authentication**: Add admin login/session management
3. **Permissions**: Implement role-based access control
4. **Image Upload**: Add image/file upload capabilities
5. **Preview**: Real-time page preview before publishing
6. **Version History**: Track page changes and revisions
7. **Team Collaboration**: Multi-user support with locks
8. **Analytics**: View page statistics and traffic
9. **Themes**: Customize site appearance
10. **Plugins**: Extensible component system

## Responsive Design

The admin panel is fully responsive:
- **Mobile**: Collapsible sidebar, touch-friendly controls
- **Tablet**: Adjusted layout for medium screens
- **Desktop**: Full sidebar with expanded navigation

## Keyboard Shortcuts (Future)
- `Cmd/Ctrl + S`: Save current page
- `Cmd/Ctrl + /`: Open command palette
- `Esc`: Close modals and dropdowns

## Performance Optimizations
- Lazy loading sections
- Debounced search
- Optimized re-renders with React.memo
- Motion animations use GPU acceleration

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies
- `next`: ^16.3.0 - React framework
- `react`: 19.2.8 - UI library
- `framer-motion`: ^13.0.0 - Animations
- `lucide-react`: ^1.29.0 - Icons
- `react-hook-form`: ^7.84.0 - Form management
- `tailwindcss`: ^4 - Styling

## Getting Started

### Run Development Server
```bash
cd racktmh
npm run dev
```

### Access Admin Panel
```
http://localhost:3000/admin
```

### Build for Production
```bash
npm run build
npm start
```

## Troubleshooting

### Sidebar not appearing
- Check if AdminShell component is properly imported in layout

### Styling issues
- Ensure Tailwind CSS is configured correctly
- Check CSS variables in globals.css

### Component previews not showing
- Component code should be valid HTML/JSX
- Check browser console for errors

## Support
For issues or feature requests, contact the development team.

---
**Last Updated**: 2024
**Version**: 1.0.0
