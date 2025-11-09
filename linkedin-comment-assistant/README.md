# LinkedIn Comment Assistant

A production-grade web application that generates thoughtful, professional LinkedIn comments tailored to your preferred style. Built with Next.js 14, TypeScript, and modern best practices.

## Features

- **5 Comment Styles**: Professional, Engaging, Supportive, Insightful, and Question-based
- **Smart Analysis**: Automatically analyzes post content to generate contextually appropriate comments
- **Scratchpad Preview**: Shows the reasoning and strategy behind generated comments
- **Dark Mode**: Full dark mode support with smooth transitions
- **Accessibility**: WAI-ARIA compliant and fully keyboard navigable
- **Responsive Design**: Mobile-first design that works from 360px to desktop
- **Type-Safe**: Built with TypeScript for reliability
- **Client-Side Only**: No server calls, all processing happens locally

## Tech Stack

### Core

- **Next.js 14** (App Router)
- **TypeScript**
- **React 18**

### UI & Styling

- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Smooth micro-animations
- **lucide-react** - Beautiful icons
- **next-themes** - Dark mode support

### Forms & Validation

- **react-hook-form** - Performant form handling
- **zod** - Type-safe schema validation

### Quality Assurance

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit checks
- **Vitest** - Unit testing
- **@testing-library/react** - Component testing

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd linkedin-comment-assistant
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run typecheck` - Type-check TypeScript

## Project Structure

```
linkedin-comment-assistant/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Header with dark mode toggle
│   │   ├── Footer.tsx       # Footer with usage guidelines
│   │   ├── FormCard.tsx     # Input form component
│   │   ├── Scratchpad.tsx   # Analysis display
│   │   └── OutputCard.tsx   # Generated comment display
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── theme-provider.tsx   # Dark mode provider
├── lib/
│   ├── comment-generator.ts # Core logic for comment generation
│   ├── schemas.ts           # Zod validation schemas
│   ├── utils.ts             # Utility functions
│   └── __tests__/           # Unit tests
├── public/                  # Static assets
└── ...config files
```

## How It Works

1. **Input**: Paste LinkedIn post content and select a comment style
2. **Analysis**: The app analyzes the post to identify:
   - Topic type (product launch, achievement, insight, hiring, general)
   - Content signals (numbers, future plans, questions)
3. **Scratchpad**: Shows analysis and reasoning
4. **Generation**: Creates a 1-3 sentence comment matching your selected style
5. **Output**: Copy the comment or regenerate for the same inputs

## Comment Styles

### Professional

Measured, industry-focused language emphasizing outcomes and strategic focus.

### Engaging

Asks specific questions to drive conversation and show genuine curiosity.

### Supportive

Expresses enthusiasm and encouragement while acknowledging effort.

### Insightful

Provides strategic context and highlights patterns with added perspective.

### Question-based

Poses thought-provoking questions to explore implications and encourage reflection.

## Business Rules

- Comments are always 1-3 sentences
- No links, sales pitches, or controversial language
- Tone matches the selected style
- Output is read-only with copy and regenerate actions
- Pasted content is required (URL is optional, display-only)

## Testing

The project includes comprehensive unit tests for core functionality:

```bash
# Run all tests
npm run test:run

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui
```

Tests cover:

- Post analysis logic
- Comment generation for all styles and topics
- Scratchpad generation
- Edge cases and error conditions

## Accessibility

- Semantic HTML throughout
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and not licensed for public use.

## Contributing

This is a standalone project. For issues or suggestions, please contact the maintainer.

---

Built with care by the LinkedIn Comment Assistant team.
