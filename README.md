# React Web Page

A comprehensive React web application, featuring a modern UI with documentation, features showcase, and previews sections.

## Quick Start

> **Note**: This is a complete React project, no need to run `create-react-app`.

1. Clone the repository:
```bash
git clone https://github.com/yourusername/webpage.git
cd webpage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).


## Available Routes

- `/` - Homepage/Main section
- `/features` - Features showcase
- `/documentation` - Documentation homepage
- `/documentation/:topic` - Individual documentation pages
- `/previews` - Preview section


## Documentation

The documentation system supports markdown files placed in `src/docs/`:
- Use `.md` extension
- Currently includes:
  - `installation.md`
  - `security.md`
- Add new documentation by creating additional markdown files

## Configuration

The `configs` directory contains configuration files for different sections:
- `Home.js` - Homepage configuration
- `documentation.js` - Documentation section settings
- `features.js` - Features section content
- `previews.js` - Preview section configuration

## Deploying to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/webpage",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Update Router in `src/App.js`:
```javascript
import { HashRouter as Router } from 'react-router-dom';
// Replace BrowserRouter with HashRouter
```

4. Deploy:
```bash
npm run deploy
```

Your site will be available at `https://yourusername.github.io/webpage`

## Development

1. Make changes to components in `src/components`
2. Update configurations in `src/configs`
3. Add documentation in `src/docs`
4. Test locally using `npm start`

## Troubleshooting

1. Component Issues:
   - Check component imports in App.js
   - Verify route paths
   - Check configuration files in configs directory

2. Documentation Issues:
   - Ensure markdown files exist in src/docs
   - Verify file names match routes
   - Check markdown syntax

3. Deployment Issues:
   - Verify repository name in package.json homepage
   - Check GitHub repository permissions
   - Ensure GitHub Pages is enabled

## Support

For issues and questions, please open an issue in the repository.