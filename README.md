# DevTrack

A web application for tracking development programs and events, helping organizations manage and monitor their development initiatives effectively.

## Overview

DevTrack provides a centralized platform for tracking development programs, events, and activities. Whether you're managing community development projects, educational programs, or organizational events, DevTrack helps you stay organized and informed.

## Features

- **Event Tracking**: Monitor development programs and events
- **Program Management**: Organize and categorize development initiatives
- **User-Friendly Interface**: Clean and intuitive design
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling
- **JavaScript** - Interactive functionality

## Project Structure

```
DevTrack/
├── devtrack_frontend_github/
│   ├── public/          # Static assets
│   └── README.md        # Frontend documentation
└── README.md            # This file
```

## Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/gimbagada/DevTrack.git
cd DevTrack
```

2. Open the application:

**Option 1: Direct File Access**
```bash
cd devtrack_frontend_github/public
# Open index.html in your browser
```

**Option 2: Local Server (Recommended)**
```bash
cd devtrack_frontend_github/public
# Using Python
python -m http.server 8000
# Or using Node.js
npx serve
```

Then navigate to `http://localhost:8000` in your browser.

## Usage

1. **Browse Programs**: View all development programs and events
2. **Track Progress**: Monitor the status of ongoing initiatives
3. **Manage Events**: Add, edit, or remove development events

## Deployment

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command**: (leave empty for static site)
   - **Publish directory**: `devtrack_frontend_github/public`
4. Deploy!

### Other Hosting Options

- **Vercel**: Connect GitHub repo and deploy
- **GitHub Pages**: Enable in repository settings
- **Traditional Hosting**: Upload files via FTP

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] Add backend API for data persistence
- [ ] Implement user authentication
- [ ] Add data visualization and analytics
- [ ] Create mobile application
- [ ] Add export functionality (PDF, CSV)
- [ ] Implement notifications system

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Developer**: Gimbo
- **Email**: gimbagada@gmail.com
- **Location**: Abuja, Nigeria
- **GitHub**: [@gimbagada](https://github.com/gimbagada)

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/gimbagada/DevTrack/issues) page
2. Create a new issue if your problem isn't already listed
3. Contact the developer directly

## Acknowledgments

- Thanks to all contributors who help improve DevTrack
- Inspired by the need for better development program tracking in Nigeria
