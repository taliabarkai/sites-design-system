'use client';

import { useState } from 'react';
import { Heading, Text, Button, Card, CardHeader, CardBody, Input, Checkbox, Badge, Alert, AlertTitle, AlertDescription } from '@/components';
import styles from './page.module.css';

type Theme = 'oak' | 'luna' | 'lal' | 'ib' | 'tgr' | 'mnn';

const brands = [
  { value: 'oak', label: 'Oak', description: 'Refined & elegant' },
  { value: 'luna', label: 'Luna', description: 'Modern & vibrant' },
  { value: 'lal', label: 'LAL', description: 'Contemporary' },
  { value: 'ib', label: 'IB', description: 'Premium & sophisticated' },
  { value: 'tgr', label: 'TGR', description: 'Bold & energetic' },
  { value: 'mnn', label: 'MNN', description: 'Modern & dynamic' },
];

export default function DesignSystemPage() {
  const [theme, setTheme] = useState<Theme>('oak');
  const [activeTab, setActiveTab] = useState('typography');

  return (
    <div className={styles.container} data-theme={theme}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <Heading level={1}>Multi-Brand Design System</Heading>
          <Text variant="body1">Complete design system for 6 brands: Oak, Luna, LAL, IB, TGR, MNN</Text>
        </div>

        {/* Brand Selector */}
        <div className={styles.brandSelector}>
          {brands.map((brand) => (
            <button
              key={brand.value}
              onClick={() => setTheme(brand.value as Theme)}
              className={`${styles.brandButton} ${theme === brand.value ? styles.active : ''}`}
            >
              <div className={styles.brandName}>{brand.label}</div>
              <div className={styles.brandDesc}>{brand.description}</div>
            </button>
          ))}
        </div>
      </header>

      {/* Navigation */}
      <nav className={styles.nav}>
        {['typography', 'components', 'colors', 'spacing'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.navButton} ${activeTab === tab ? styles.navActive : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Typography Section */}
        {activeTab === 'typography' && (
          <section className={styles.section}>
            <Heading level={2}>Typography</Heading>
            <Text variant="body1">All typography styles for {theme.toUpperCase()} brand</Text>

            <div className={styles.typographyGrid}>
              {['headline1', 'headline2', 'headline3', 'text1', 'body1', 'caption1'].map((variant) => (
                <Card key={variant} variant="outline" padding="md">
                  <CardHeader>
                    <h3 className={styles.cardTitle}>{variant}</h3>
                  </CardHeader>
                  <CardBody>
                    <div className={`typography-${variant}`} style={{ marginBottom: '1rem' }}>
                      Preview text in {variant}
                    </div>
                    <code className={styles.code}>.typography-{variant}</code>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Components Section */}
        {activeTab === 'components' && (
          <section className={styles.section}>
            <Heading level={2}>Components</Heading>
            <Text variant="body1">Interactive components from the design system</Text>

            {/* Buttons */}
            <div className={styles.componentGroup}>
              <Heading level={3}>Buttons</Heading>
              <div className={styles.componentDemo}>
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            {/* Badges */}
            <div className={styles.componentGroup}>
              <Heading level={3}>Badges</Heading>
              <div className={styles.componentDemo}>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            {/* Alerts */}
            <div className={styles.componentGroup}>
              <Heading level={3}>Alerts</Heading>
              <div className={styles.componentDemo}>
                <Alert variant="info">
                  <AlertTitle>Info Alert</AlertTitle>
                  <AlertDescription>This is an informational message.</AlertDescription>
                </Alert>
                <Alert variant="success">
                  <AlertTitle>Success Alert</AlertTitle>
                  <AlertDescription>Operation completed successfully.</AlertDescription>
                </Alert>
                <Alert variant="warning">
                  <AlertTitle>Warning Alert</AlertTitle>
                  <AlertDescription>Please be careful with this action.</AlertDescription>
                </Alert>
                <Alert variant="danger">
                  <AlertTitle>Danger Alert</AlertTitle>
                  <AlertDescription>Something went wrong.</AlertDescription>
                </Alert>
              </div>
            </div>

            {/* Forms */}
            <div className={styles.componentGroup}>
              <Heading level={3}>Form Elements</Heading>
              <div className={styles.formDemo}>
                <Input
                  label="Text Input"
                  placeholder="Enter text"
                  defaultValue="Sample input"
                />
                <Input
                  label="Input with Error"
                  placeholder="This has an error"
                  error="This field is required"
                />
                <Checkbox label="Accept terms and conditions" defaultChecked />
              </div>
            </div>

            {/* Cards */}
            <div className={styles.componentGroup}>
              <Heading level={3}>Cards</Heading>
              <div className={styles.cardDemo}>
                <Card variant="filled">
                  <CardHeader>
                    <h4>Card Title</h4>
                  </CardHeader>
                  <CardBody>
                    <Text variant="body1">This is card content with a filled background.</Text>
                  </CardBody>
                </Card>

                <Card variant="outline">
                  <CardHeader>
                    <h4>Card Title</h4>
                  </CardHeader>
                  <CardBody>
                    <Text variant="body1">This is card content with an outline style.</Text>
                  </CardBody>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <h4>Card Title</h4>
                  </CardHeader>
                  <CardBody>
                    <Text variant="body1">This is card content with elevation and shadow.</Text>
                  </CardBody>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Colors Section */}
        {activeTab === 'colors' && (
          <section className={styles.section}>
            <Heading level={2}>Color Palette</Heading>
            <Text variant="body1">Theme colors for {theme.toUpperCase()}</Text>

            <div className={styles.colorGrid}>
              {['primary', 'secondary', 'accent', 'success', 'warning', 'danger', 'info'].map((color) => (
                <div key={color} className={styles.colorItem}>
                  <div
                    className={styles.colorSwatch}
                    style={{ backgroundColor: `var(--color-${color})` }}
                  />
                  <Text variant="caption1" className={styles.colorName}>
                    <strong>{color}</strong>
                  </Text>
                  <code className={styles.colorCode}>--color-{color}</code>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Spacing Section */}
        {activeTab === 'spacing' && (
          <section className={styles.section}>
            <Heading level={2}>Spacing Scale</Heading>
            <Text variant="body1">Consistent spacing tokens used throughout the design system</Text>

            <div className={styles.spacingList}>
              {[
                'xxxs',
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                'xxl',
                'xxxl',
                '4xl',
                '5xl',
              ].map((size) => (
                <div key={size} className={styles.spacingItem}>
                  <div className={styles.spacingVisual}>
                    <div
                      style={{
                        width: `var(--spacing-${size})`,
                        height: '24px',
                        background: 'var(--color-accent)',
                        borderRadius: 'var(--border-radius-md)',
                      }}
                    />
                  </div>
                  <Text variant="caption1" className={styles.spacingLabel}>
                    <code>--spacing-{size}</code>
                  </Text>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <Text variant="caption1">
          © 2024 Multi-Brand Design System. All brands supported: Oak, Luna, LAL, IB, TGR, MNN
        </Text>
      </footer>
    </div>
  );
}
