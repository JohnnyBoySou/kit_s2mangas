#!/usr/bin/env node

/**
 * Script to create GitHub issues for identified repository problems
 * Run with: node scripts/create-issues.js
 * 
 * Note: This script requires a GitHub token with repo permissions
 * Set the GITHUB_TOKEN environment variable before running
 */

const issues = [
  {
    title: "🐛 Fix React/React-DOM version mismatch causing test failures",
    body: `## Description
Tests in the \`@s2mangas/react\` package are failing due to a version mismatch between React and React-DOM packages.

## Current Error
\`\`\`
Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
- react:      19.0.0
- react-dom:  19.1.1
\`\`\`

## Impact
- All tests in the React package are failing (24/24 test suites)
- CI/CD pipeline is broken
- Development workflow is impacted

## Expected Behavior
- React and React-DOM should have matching versions
- All tests should pass successfully

## Proposed Solution
1. Update React to v19.1.1 to match React-DOM
2. Or downgrade React-DOM to v19.0.0 to match React
3. Add version constraints in package.json to prevent future mismatches

## Acceptance Criteria
- [ ] React and React-DOM versions match
- [ ] All existing tests pass
- [ ] No version mismatch errors in CI

## Priority
**High** - Blocking development and testing`,
    labels: ["bug", "testing", "dependencies", "react", "high-priority"]
  },
  {
    title: "🔧 Fix ESLint configuration issues with deprecated --ext flag",
    body: `## Description
The React package ESLint script is using the deprecated \`--ext\` flag which is no longer available in the new flat config system.

## Current Error
\`\`\`
Invalid option '--ext' - perhaps you meant '-c'?
You're using eslint.config.js, some command line flags are no longer available.
\`\`\`

## Impact
- Linting command fails
- Code quality checks are not running
- CI/CD pipeline affected

## Current Configuration
\`\`\`json
"lint": "eslint src --ext .ts,.tsx"
\`\`\`

## Proposed Solution
Update the lint script to use the new ESLint flat config pattern:
\`\`\`json
"lint": "eslint src/**/*.{ts,tsx}"
\`\`\`

## Additional Changes Needed
- Review \`eslint.config.js\` file to ensure proper flat config setup
- Update any other ESLint-related scripts if needed
- Update documentation if necessary

## Acceptance Criteria
- [ ] Lint command runs without errors
- [ ] TypeScript and TSX files are properly linted
- [ ] CI pipeline passes linting checks

## Priority
**Medium** - Blocking code quality checks`,
    labels: ["bug", "tooling", "eslint", "configuration"]
  },
  {
    title: "⬆️ Upgrade Storybook from 7.x to 8.x for React 19 compatibility",
    body: `## Description
The project is using Storybook 7.x which has multiple peer dependency warnings with React 19. Storybook 8.x provides better React 19 support.

## Current Issues
- Multiple peer dependency warnings for React 16-18 support
- Deprecated @storybook/testing-library package
- Potential compatibility issues with React 19 features

## Current Storybook Version
- Storybook: 7.6.17 - 9.1.1 (mixed versions)
- @storybook/testing-library: 0.2.2 (deprecated)

## Proposed Upgrade
- Upgrade to Storybook 8.x (latest stable)
- Replace @storybook/testing-library with @storybook/test
- Update all Storybook addons to compatible versions

## Benefits
- Full React 19 compatibility
- Better performance and features
- Modern testing utilities
- Reduced peer dependency warnings

## Migration Tasks
- [ ] Update Storybook core packages
- [ ] Replace deprecated testing-library with @storybook/test  
- [ ] Update addon packages
- [ ] Test existing stories for compatibility
- [ ] Update Storybook configuration if needed
- [ ] Update documentation

## Acceptance Criteria
- [ ] Storybook 8.x running without peer dependency warnings
- [ ] All existing stories working correctly
- [ ] React 19 features supported
- [ ] CI/CD pipeline updated

## Priority
**Medium** - Improves developer experience and removes warnings`,
    labels: ["enhancement", "dependencies", "storybook", "react"]
  },
  {
    title: "🐛 Remove duplicate expo-image mock files in native package",
    body: `## Description
The native package has duplicate manual mock files for expo-image causing Jest warnings during test execution.

## Current Warning
\`\`\`
jest-haste-map: duplicate manual mock found: expo-image
The following files share their name; please delete one of them:
  * <rootDir>/lib/typescript/commonjs/src/__mocks__/expo-image.d.ts
  * <rootDir>/lib/typescript/module/src/__mocks__/expo-image.d.ts
\`\`\`

## Impact
- Jest warnings during test runs
- Potential confusion about which mock is being used
- Build artifacts pollution

## Root Cause
The build process is generating TypeScript declaration files in both CommonJS and ES Module formats for the mock files, causing duplication in the lib directory.

## Proposed Solution
1. Exclude \`__mocks__\` directories from TypeScript compilation
2. Update \`tsconfig.build.json\` to prevent declaration file generation for mocks
3. Clean up existing duplicate files in lib directory

## Files to Update
- \`tsconfig.build.json\` - Add exclude pattern for mocks
- Build scripts - Ensure proper cleanup
- \`.gitignore\` - Ensure lib directory is properly ignored

## Acceptance Criteria
- [ ] No duplicate mock warnings during tests
- [ ] Mock files only exist in source directory
- [ ] TypeScript declarations not generated for mocks
- [ ] Tests continue to work correctly

## Priority
**Low** - Warning only, doesn't break functionality`,
    labels: ["bug", "testing", "build", "native"]
  },
  {
    title: "🏗️ Establish consistent versioning strategy across packages",
    body: `## Description
The packages currently have inconsistent versioning which can cause confusion and dependency management issues.

## Current Versions
- \`@s2mangas/core\`: 1.0.3
- \`@s2mangas/react\`: 0.0.2  
- \`@s2mangas/native\`: 0.0.14

## Issues
- Large version gaps between packages
- No clear versioning strategy documented
- Potential breaking changes not properly communicated
- Dependency references may become outdated

## Proposed Strategy Options

### Option 1: Independent Versioning
- Each package maintains its own version
- Use semantic versioning strictly
- Document breaking changes clearly
- Benefits: Flexibility for different maturity levels

### Option 2: Synchronized Versioning
- All packages share the same major.minor version
- Patch versions can differ
- Easier dependency management
- Benefits: Simpler to understand compatibility

### Option 3: Monorepo Unified Versioning
- All packages always have identical versions
- Release all packages together
- Benefits: Guaranteed compatibility

## Recommended Approach
**Option 2: Synchronized Versioning**
- Align all packages to v1.x.x (core package level)
- Use changesets for automatic versioning
- Document version compatibility matrix

## Implementation Tasks
- [ ] Choose versioning strategy
- [ ] Update package versions to align
- [ ] Document versioning policy
- [ ] Update changesets configuration
- [ ] Create version compatibility documentation
- [ ] Add automated checks for version alignment

## Acceptance Criteria
- [ ] Clear versioning strategy documented
- [ ] Package versions aligned according to strategy
- [ ] Automated tooling supports chosen strategy
- [ ] Developer documentation updated

## Priority
**Medium** - Important for maintainability`,
    labels: ["enhancement", "maintenance", "versioning", "documentation"]
  },
  {
    title: "✨ Implement Date Picker component",
    body: `## Description
Implement a Date Picker component as listed in the development roadmap in the README.

## Target Platforms
- [ ] React Web (@s2mangas/react)
- [ ] React Native (@s2mangas/native)

## Features Required
- Single date selection
- Date range selection (optional)
- Custom date formats
- Min/max date constraints
- Disabled dates support
- Internationalization support

## API Design
\`\`\`typescript
interface DatePickerProps {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  format?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  locale?: string;
  disabled?: boolean;
}
\`\`\`

## Acceptance Criteria
- [ ] Component implemented for both platforms
- [ ] Proper TypeScript types
- [ ] Unit tests with >80% coverage
- [ ] Storybook stories
- [ ] Accessibility compliance
- [ ] Documentation
- [ ] Design tokens integration`,
    labels: ["enhancement", "component", "date-picker"]
  },
  {
    title: "✨ Implement File Upload component",
    body: `## Description
Implement a File Upload component as listed in the development roadmap in the README.

## Target Platforms
- [ ] React Web (@s2mangas/react)
- [ ] React Native (@s2mangas/native)

## Features Required
- Single and multiple file selection
- Drag and drop support (web)
- File type restrictions
- File size limits
- Upload progress indication
- Preview for image files
- Error handling

## API Design
\`\`\`typescript
interface FileUploadProps {
  accept?: string[];
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  onFileSelect: (files: File[]) => void;
  onUpload?: (files: File[]) => Promise<void>;
  disabled?: boolean;
  children?: React.ReactNode;
}
\`\`\`

## Acceptance Criteria
- [ ] Component implemented for both platforms
- [ ] Proper TypeScript types
- [ ] Unit tests with >80% coverage
- [ ] Storybook stories
- [ ] Accessibility compliance
- [ ] Documentation
- [ ] Design tokens integration`,
    labels: ["enhancement", "component", "file-upload"]
  },
  {
    title: "✨ Implement Data Grid component",
    body: `## Description
Implement a Data Grid component as listed in the development roadmap in the README.

## Target Platforms
- [ ] React Web (@s2mangas/react)
- [ ] React Native (@s2mangas/native) - with FlatList optimization

## Features Required
- Column configuration
- Sorting and filtering
- Pagination
- Row selection
- Virtualization for large datasets
- Custom cell renderers
- Export functionality
- Responsive design

## API Design
\`\`\`typescript
interface Column<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, record: T) => React.ReactNode;
  width?: number;
}

interface DataGridProps<T> {
  data: T[];
  columns: Column<T>[];
  pagination?: PaginationConfig;
  selection?: SelectionConfig;
  onSort?: (key: keyof T, direction: 'asc' | 'desc') => void;
  onFilter?: (filters: Record<keyof T, any>) => void;
  loading?: boolean;
}
\`\`\`

## Acceptance Criteria
- [ ] Component implemented for both platforms
- [ ] Proper TypeScript types
- [ ] Unit tests with >80% coverage
- [ ] Storybook stories
- [ ] Accessibility compliance
- [ ] Documentation
- [ ] Performance optimization
- [ ] Design tokens integration`,
    labels: ["enhancement", "component", "data-grid", "complex"]
  },
  {
    title: "✨ Implement Charts and visualization components",
    body: `## Description
Implement Charts and visualization components as listed in the development roadmap in the README.

## Target Platforms
- [ ] React Web (@s2mangas/react)
- [ ] React Native (@s2mangas/native)

## Chart Types Required
- Line Chart
- Bar Chart
- Pie Chart
- Area Chart
- Scatter Plot (optional)

## Features Required
- Responsive design
- Customizable colors using design tokens
- Animations and transitions
- Tooltips and legends
- Data labels
- Accessibility support

## Technology Considerations
- **Web**: Consider recharts, d3, or chart.js integration
- **Native**: Consider react-native-chart-kit or react-native-svg

## API Design
\`\`\`typescript
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
  }[];
}

interface ChartProps {
  data: ChartData;
  type: 'line' | 'bar' | 'pie' | 'area';
  width?: number;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  animated?: boolean;
}
\`\`\`

## Acceptance Criteria
- [ ] Chart components implemented for both platforms
- [ ] Proper TypeScript types
- [ ] Unit tests with >80% coverage
- [ ] Storybook stories
- [ ] Accessibility compliance
- [ ] Documentation
- [ ] Performance optimization
- [ ] Design tokens integration`,
    labels: ["enhancement", "component", "charts", "visualization", "complex"]
  },
  {
    title: "✨ Implement Calendar component",
    body: `## Description
Implement a Calendar component as listed in the development roadmap in the README.

## Target Platforms
- [ ] React Web (@s2mangas/react)
- [ ] React Native (@s2mangas/native)

## Features Required
- Month/Year navigation
- Date selection (single/multiple/range)
- Event indicators
- Custom date rendering
- Disabled dates
- Internationalization
- Different view modes (month, year)

## API Design
\`\`\`typescript
interface CalendarEvent {
  date: Date;
  title: string;
  color?: string;
}

interface CalendarProps {
  value?: Date | Date[] | [Date, Date];
  onChange: (date: Date | Date[] | [Date, Date]) => void;
  mode: 'single' | 'multiple' | 'range';
  events?: CalendarEvent[];
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  locale?: string;
  showWeekNumbers?: boolean;
}
\`\`\`

## Acceptance Criteria
- [ ] Component implemented for both platforms
- [ ] Proper TypeScript types
- [ ] Unit tests with >80% coverage
- [ ] Storybook stories
- [ ] Accessibility compliance
- [ ] Documentation
- [ ] Design tokens integration
- [ ] Mobile-friendly navigation`,
    labels: ["enhancement", "component", "calendar"]
  },
  {
    title: "📚 Create component development guidelines",
    body: `## Description
Create comprehensive guidelines for developing new components in the S2Mangas UI Kit to ensure consistency and quality.

## Guidelines Needed

### 1. Component Structure
- File organization patterns
- Naming conventions
- Export patterns
- Component composition guidelines

### 2. TypeScript Standards
- Props interface patterns
- Generic type usage
- Ref forwarding
- Event handler typing

### 3. Styling Guidelines
- Design token usage
- Theme integration
- Responsive design patterns
- Animation guidelines

### 4. Testing Standards
- Test file organization
- Coverage requirements
- Testing utilities
- Snapshot testing guidelines

### 5. Documentation Requirements
- JSDoc standards
- Storybook story patterns
- Usage examples
- API documentation format

### 6. Accessibility Standards
- ARIA attributes
- Keyboard navigation
- Screen reader support
- Color contrast requirements

### 7. Cross-Platform Considerations
- Platform-specific implementations
- Shared logic patterns
- API consistency requirements

## Deliverables
- [ ] \`CONTRIBUTING.md\` with component guidelines
- [ ] \`docs/component-development.md\` detailed guide
- [ ] Component template files
- [ ] Test template files
- [ ] Storybook story templates
- [ ] Linting rules for component development
- [ ] Examples of well-implemented components

## Acceptance Criteria
- [ ] Guidelines cover all aspects of component development
- [ ] Templates are provided for quick setup
- [ ] Guidelines are enforced through tooling
- [ ] Documentation is clear and actionable`,
    labels: ["documentation", "guidelines", "developer-experience"]
  },
  {
    title: "🔧 Add automated dependency update workflow",
    body: `## Description
Create an automated workflow to keep dependencies up to date and prevent version mismatch issues like the current React/React-DOM problem.

## Current Issues
- Manual dependency updates are error-prone
- Version mismatches between packages
- Security vulnerabilities in outdated dependencies
- No automated testing of dependency updates

## Proposed Solution
Implement Dependabot or Renovate for automated dependency updates with proper testing.

## Features Needed
- [ ] Automated dependency updates
- [ ] Grouped updates for related packages
- [ ] Automated testing of updates
- [ ] Security vulnerability alerts
- [ ] Version conflict detection
- [ ] Rollback mechanism for failed updates

## Configuration Requirements

### Dependabot Configuration
\`\`\`yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    groups:
      react:
        patterns:
          - "react*"
          - "@types/react*"
      storybook:
        patterns:
          - "@storybook/*"
      testing:
        patterns:
          - "jest"
          - "@testing-library/*"
\`\`\`

### Testing Integration
- Run full test suite on dependency updates
- Check for peer dependency conflicts
- Validate Storybook builds
- Check bundle size impacts

## Acceptance Criteria
- [ ] Automated dependency updates configured
- [ ] Updates are properly tested before merge
- [ ] Security vulnerabilities are addressed promptly
- [ ] Version conflicts are detected early
- [ ] Documentation updated with update process`,
    labels: ["automation", "dependencies", "security", "maintenance"]
  }
];

console.log('GitHub Issues Creation Script');
console.log('============================');
console.log();
console.log(\`This script would create \${issues.length} issues in the repository.\`);
console.log();
console.log('Issues to be created:');
issues.forEach((issue, index) => {
  console.log(\`\${index + 1}. \${issue.title}\`);
});
console.log();
console.log('To create these issues, you would need to:');
console.log('1. Set GITHUB_TOKEN environment variable');
console.log('2. Install github API client (e.g., @octokit/rest)');
console.log('3. Run the actual creation logic');
console.log();
console.log('Manual alternative:');
console.log('Copy each issue from the issues array above and create manually in GitHub.');