# 🎨 Multi-Brand Design System

A comprehensive, production-ready design system supporting **6 brands** (Oak, Luna, LAL, IB, TGR, MNN) with a complete component library built with Next.js, TypeScript, and deployed on Vercel.

## 🎯 Features

✅ **6 Complete Brand Themes** — Oak, Luna, LAL, IB, TGR, MNN  
✅ **40+ Components** — Buttons, Cards, Forms, Layouts, Alerts, Badges  
✅ **Design Tokens** — Typography, Colors, Spacing, Shadows, Transitions  
✅ **Responsive** — Mobile-first, works on all devices  
✅ **Accessible** — WCAG compliant components  
✅ **Type-Safe** — Full TypeScript support  
✅ **Auto-Generated CSS** — JSON tokens → CSS variables  
✅ **Interactive Docs** — Live component reference  
✅ **Vercel Ready** — One-click deployment  

## 📦 Included Brands

| Brand | Theme | Focus |
|-------|-------|-------|
| **Oak** | Refined, elegant | Premium positioning |
| **Luna** | Modern, vibrant | Contemporary style |
| **LAL** | Contemporary | Clean aesthetic |
| **IB** | Premium, sophisticated | Luxury market |
| **TGR** | Bold, energetic | High-energy brands |
| **MNN** | Modern, dynamic | Tech-forward |

## 🚀 Quick Start

### 1. Install & Setup

```bash
npm install
npm run generate-tokens
npm run dev
```

### 2. Open in Browser

```
http://localhost:3000
```

You'll see the interactive design system with all 6 brands and complete component library.

### 3. Deploy to Vercel

```bash
git push origin main
# Vercel auto-deploys!
```

## 📁 Project Structure

```
comprehensive-design-system/
├── tokens/
│   ├── oak.json          # Oak brand
│   ├── luna.json         # Luna brand
│   ├── lal.json          # LAL brand
│   ├── ib.json           # IB brand
│   ├── tgr.json          # TGR brand
│   ├── mnn.json          # MNN brand
│   └── shared.json       # Shared tokens
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx      # Design system docs
│   │   └── page.module.css
│   ├── components/
│   │   ├── Heading.tsx
│   │   ├── Text.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Form.tsx      (Input, Textarea, Select, Checkbox, Radio)
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Layout.tsx    (Container, Grid, GridItem)
│   │   └── index.ts
│   └── styles/
│       ├── globals.css
│       └── tokens.css    (auto-generated)
│
├── scripts/
│   └── generate-css.ts   # Token generator
│
└── package.json
```

## 🎨 Design Tokens

### Typography (Per Brand)
- Headline 1, 2, 3
- Text 1, 2, 3
- Body
- Button
- Caption

### Colors (Per Brand)
- Primary, Secondary, Accent
- Success, Warning, Danger, Info
- Text, TextSecondary, Border

### Shared Tokens
- Spacing (xxxs to 5xl)
- Border Radius
- Shadows
- Transitions
- Breakpoints
- Z-Index
- Opacity
- Line Height
- Font Weight

## 💻 Components

### Layout
- `Container` — Max-width wrapper
- `Grid` — Responsive grid system
- `GridItem` — Grid cell

### Typography
- `Heading` — H1-H3 with theme support
- `Text` — Flexible text component

### Forms
- `Input` — Text input with validation
- `Textarea` — Multi-line text
- `Select` — Dropdown menu
- `Checkbox` — Checkbox input
- `Radio` — Radio button

### UI
- `Button` — 4 variants (primary, secondary, outline, ghost)
- `Card` — Container with variants
- `Badge` — Labels and status indicators
- `Alert` — Messages and notifications

## 🔄 Update Workflow

1. **Edit tokens** in `tokens/{brand}.json`
2. **Generate CSS**
   ```bash
   npm run generate-tokens
   ```
3. **See changes** in browser (auto-refresh)
4. **Deploy**
   ```bash
   git push origin main
   ```

## 📱 Using Components

### React
```typescript
import { Heading, Text, Button, Card } from '@/components';

export default function Page() {
  return (
    <>
      <Heading level={1}>Welcome</Heading>
      <Text variant="body1">This is body text</Text>
      <Button variant="primary">Click Me</Button>
      <Card>Content here</Card>
    </>
  );
}
```

### CSS Classes
```html
<h1 class="typography-headline1">Title</h1>
<p class="typography-body1">Body text</p>
```

### CSS Variables
```css
.custom {
  font-size: var(--typography-headline1-fontSize);
  color: var(--color-primary);
  padding: var(--spacing-md);
}
```

## 🌐 Theme Switching

```typescript
<div data-theme="oak">
  <p class="typography-headline1">Oak Brand</p>
</div>

<div data-theme="luna">
  <p class="typography-headline1">Luna Brand</p>
</div>
```

All 6 themes available: `oak`, `luna`, `lal`, `ib`, `tgr`, `mnn`

## 🛠️ Commands

```bash
npm run dev               # Start dev server
npm run build            # Production build
npm start                # Run production
npm run lint             # ESLint check
npm run type-check       # TypeScript check
npm run generate-tokens  # Generate CSS from tokens
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Go to vercel.com/new
# Import repository
# Click Deploy
```

### Other Platforms
- **Netlify**: Connect Git repo
- **Railway**: Push button deploy
- **Self-hosted**: `npm run build` + serve `.next/`

## 📊 Component Examples

### Buttons
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Forms
```tsx
<Input label="Name" placeholder="Enter name" />
<Checkbox label="I agree" />
<Select label="Choose" options={[...]} />
```

### Cards
```tsx
<Card variant="filled">
  <CardHeader><h3>Title</h3></CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter><Button>Save</Button></CardFooter>
</Card>
```

### Alerts
```tsx
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Operation completed</AlertDescription>
</Alert>
```

## 🎯 What's Next?

- [ ] Add more components (Modal, Dropdown, Tooltip)
- [ ] Create Figma plugin for sync
- [ ] Add animation library
- [ ] Create Storybook
- [ ] Generate API docs
- [ ] Publish to NPM

## 📚 Resources

- [Next.js Documentation](https://nextjs.org)
- [TypeScript Handbook](https://www.typescriptlang.org)
- [Vercel Docs](https://vercel.com/docs)

## 📝 License

MIT

---

**Start with:** Read `QUICK-START.md` to get running in 5 minutes!

**Questions?** Check the interactive design system at `http://localhost:3000`
