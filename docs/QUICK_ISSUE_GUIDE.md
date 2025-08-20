# 🚀 Quick Issue Creation Guide

This guide provides a quick reference for creating the identified issues in the S2Mangas UI Kit repository.

## 📋 Issue Creation Checklist

### Critical Issues (Create First)

#### 🔴 Issue #1: React Version Mismatch
```
Title: 🐛 Fix React/React-DOM version mismatch causing test failures
Labels: bug, testing, dependencies, react, high-priority
Assignee: (assign to maintainer)
```

#### 🔴 Issue #2: ESLint Configuration
```
Title: 🔧 Fix ESLint configuration issues with deprecated --ext flag  
Labels: bug, tooling, eslint, configuration
Assignee: (assign to maintainer)
```

### Medium Priority Issues

#### 🟡 Issue #3: Storybook Upgrade
```
Title: ⬆️ Upgrade Storybook from 7.x to 8.x for React 19 compatibility
Labels: enhancement, dependencies, storybook, react
```

#### 🟡 Issue #4: Versioning Strategy
```
Title: 🏗️ Establish consistent versioning strategy across packages
Labels: enhancement, maintenance, versioning, documentation
```

#### 🟡 Issue #5: Dependency Automation
```
Title: 🔧 Add automated dependency update workflow
Labels: automation, dependencies, security, maintenance
```

### Feature Development Issues

#### ✨ Issue #6: Date Picker
```
Title: ✨ Implement Date Picker component
Labels: enhancement, component, date-picker
```

#### ✨ Issue #7: File Upload
```
Title: ✨ Implement File Upload component
Labels: enhancement, component, file-upload
```

#### ✨ Issue #8: Data Grid
```
Title: ✨ Implement Data Grid component
Labels: enhancement, component, data-grid, complex
```

#### ✨ Issue #9: Charts
```
Title: ✨ Implement Charts and visualization components
Labels: enhancement, component, charts, visualization, complex
```

#### ✨ Issue #10: Calendar
```
Title: ✨ Implement Calendar component
Labels: enhancement, component, calendar
```

### Documentation Issues

#### 📚 Issue #11: Development Guidelines
```
Title: 📚 Create component development guidelines
Labels: documentation, guidelines, developer-experience
```

### Low Priority Issues

#### 🟢 Issue #12: Mock Files
```
Title: 🐛 Remove duplicate expo-image mock files in native package
Labels: bug, testing, build, native
```

## 🏷️ Label Setup

Before creating issues, ensure these labels exist in the repository:

### Priority Labels
- `high-priority` (color: #d93f0b)
- `medium-priority` (color: #fbca04)  
- `low-priority` (color: #0e8a16)

### Type Labels
- `bug` (color: #d73a49)
- `enhancement` (color: #a2eeef)
- `component` (color: #7057ff)
- `documentation` (color: #0075ca)
- `tooling` (color: #5319e7)
- `maintenance` (color: #f9d0c4)

### Package Labels
- `react` (color: #61dafb)
- `native` (color: #20232a)
- `core` (color: #ffd43b)

### Technology Labels
- `typescript` (color: #3178c6)
- `testing` (color: #c5f015)
- `storybook` (color: #ff4785)
- `eslint` (color: #4b32c3)
- `dependencies` (color: #e99695)

## 🛠️ Automated Creation

Use the script at `scripts/create-issues.js` for automated creation:

```bash
# Install dependencies (if using programmatic creation)
npm install @octokit/rest

# Set environment variable
export GITHUB_TOKEN="your_github_token"

# Run script (modify to actually create issues)
node scripts/create-issues.js
```

## 📱 Manual Creation

1. Go to https://github.com/JohnnyBoySou/kit_s2mangas/issues/new
2. Copy issue content from `scripts/create-issues.js`
3. Add appropriate labels
4. Assign if needed
5. Create issue

## 🎯 Milestones

Consider creating these milestones:

1. **v1.1.0 - Critical Fixes** (Issues #1, #2)
2. **v1.2.0 - Infrastructure** (Issues #3, #4, #5, #11)  
3. **v1.3.0 - Core Components** (Issues #6, #7)
4. **v1.4.0 - Advanced Components** (Issues #8, #9, #10)

## ✅ Completion Tracking

Track issue creation progress:

- [ ] Created critical issues (#1, #2)
- [ ] Created medium priority issues (#3, #4, #5)
- [ ] Created feature issues (#6, #7, #8, #9, #10)
- [ ] Created documentation issues (#11)
- [ ] Created low priority issues (#12)
- [ ] Set up labels
- [ ] Created milestones
- [ ] Assigned issues to team members

---

**Note**: Issue templates have been created in `.github/ISSUE_TEMPLATE/` to standardize future issue creation.