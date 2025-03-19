# Animal NGO Portal

A modern and responsive web application that connects animal lovers with NGOs making a difference in animal welfare and conservation around the world.

## Features

- **Homepage:** Showcasing featured NGOs, top-rated organizations, and a powerful search function
- **NGO Directory:** Browse and filter organizations by various criteria including cause, location, and rating
- **Detailed NGO Profiles:** Comprehensive information about each organization, including:
  - Services offered
  - Volunteer opportunities
  - Photo galleries and videos
  - Impact stories
  - Location information with maps
  - Donation links
- **Contact Form:** Get in touch with the portal administrators
- **Mobile Responsive:** Fully functional across all device sizes

## Technology Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **Icons:** Lucide React
- **Maps Integration:** Google Maps Embed API
- **State Management:** React Hooks
- **Images:** Unsplash free stock photos

## Image Credits

This project uses free images from Unsplash. All images are free to use under the Unsplash license. Here are some of the photographers whose work is featured:

- Hero images and animal photography from Unsplash.com
- Icons from Icons8

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/animal-ngo-portal.git
   cd animal-ngo-portal
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
animal-ngo-portal/
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── ngos/           # NGO listing and detail pages
│   │   ├── contact/        # Contact page
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── layout/         # Layout components (header, footer)
│   │   ├── ui/             # UI components from ShadCN
│   │   └── ...
│   ├── data/               # Mock data
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── ...
```

## Customization

### Adding New NGOs

To add new NGOs to the portal, edit the `src/data/ngos.ts` file following the existing structure.

### Theming

The color scheme can be customized by modifying the Tailwind configuration in `tailwind.config.js`.

## Deployment

This application can be easily deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or a traditional hosting provider.

## Future Enhancements

- User authentication and profiles
- NGO application system
- Donation processing
- Event calendar
- Messaging system between users and NGOs

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Designed and developed with ❤️ for animals worldwide.
