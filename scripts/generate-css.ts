import fs from 'fs';
import path from 'path';

interface Typography {
  [key: string]: Record<string, string>;
}

interface ColorPalette {
  [key: string]: string;
}

interface Theme {
  theme: string;
  typography: Typography;
  colors: ColorPalette;
}

interface SharedTokens {
  [key: string]: Record<string, string>;
}

// Helper to convert camelCase to kebab-case
function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

// Read tokens: every tokens/*.json except shared.json is a theme
function readTokens(): { themes: Theme[]; shared: SharedTokens } {
  const tokensDir = path.join(process.cwd(), 'tokens');
  const sharedPath = path.join(tokensDir, 'shared.json');
  const shared = JSON.parse(fs.readFileSync(sharedPath, 'utf8')) as SharedTokens;

  const themes: Theme[] = [];
  for (const name of fs.readdirSync(tokensDir)) {
    if (!name.endsWith('.json') || name === 'shared.json') continue;
    const filePath = path.join(tokensDir, name);
    if (!fs.statSync(filePath).isFile()) continue;
    themes.push(JSON.parse(fs.readFileSync(filePath, 'utf8')) as Theme);
  }

  return { themes, shared };
}

// Generate CSS for a theme
function generateThemeCss(theme: Theme): string {
  let css = `[data-theme="${theme.theme}"] {\n`;

  // Typography
  Object.entries(theme.typography).forEach(([typeName, styles]) => {
    Object.entries(styles).forEach(([prop, value]) => {
      if (prop !== 'description') {
        const kebabProp = toKebabCase(prop);
        const cssVar = `--typography-${typeName}-${kebabProp}`;
        css += `  ${cssVar}: ${value};\n`;
      }
    });
  });

  // Colors
  Object.entries(theme.colors).forEach(([colorName, colorValue]) => {
    const cssVar = `--color-${colorName}`;
    css += `  ${cssVar}: ${colorValue};\n`;
  });

  css += '}\n';
  return css;
}

// Generate shared CSS variables
function generateSharedCss(shared: SharedTokens): string {
  let css = ':root {\n';

  Object.entries(shared).forEach(([category, values]) => {
    Object.entries(values).forEach(([name, value]) => {
      const kebabName = toKebabCase(name);
      const cssVar = `--${category}-${kebabName}`;
      css += `  ${cssVar}: ${value};\n`;
    });
  });

  css += '}\n\n';
  return css;
}

// Main function
function generate(): void {
  const { themes, shared } = readTokens();

  // Generate CSS
  let output = generateSharedCss(shared);
  for (const theme of themes) {
    output += generateThemeCss(theme);
  }

  // Ensure directory exists
  const outputDir = path.join(process.cwd(), 'src', 'styles');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write to file
  const outputPath = path.join(outputDir, 'tokens.css');
  fs.writeFileSync(outputPath, output);

  console.log(`✓ Generated ${outputPath}`);
  for (const theme of themes) {
    console.log(
      `✓ ${theme.theme} theme with ${Object.keys(theme.typography).length} typography rules`
    );
  }
  console.log(`✓ Shared tokens: spacing, borderRadius, shadows, transitions`);
}

generate();
