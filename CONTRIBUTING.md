# Contributing to DevTrack

Thank you for your interest in contributing to DevTrack! We welcome contributions that help improve development program tracking.

## How to Contribute

### Reporting Bugs

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

### Suggesting Features

We welcome feature suggestions! Please:

- Check if the feature has already been suggested
- Describe the feature and its benefits
- Explain the use case
- Provide examples if possible

### Submitting Changes

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Submit a pull request

## Development Setup

### Prerequisites

- A modern web browser
- Text editor or IDE
- Git
- Local web server (optional but recommended)

### Getting Started

1. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/DevTrack.git
cd DevTrack
```

2. Navigate to the frontend directory:
```bash
cd devtrack_frontend_github/public
```

3. Open in your browser or start a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Coding Standards

### HTML

- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include alt text for images
- Ensure accessibility

### CSS

- Keep styles organized
- Use meaningful class names
- Follow mobile-first approach
- Comment complex styles
- Maintain consistency with existing styles

### JavaScript

- Use modern ES6+ syntax
- Write clear, self-documenting code
- Add comments for complex logic
- Handle errors appropriately
- Test across browsers

## Testing

Before submitting a PR:

1. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test on different screen sizes
3. Verify all links work
4. Check for console errors
5. Validate HTML and CSS

## Commit Messages

Write clear, descriptive commit messages:

```
Add event filtering feature
Fix navigation menu on mobile
Update README with deployment instructions
Improve form validation
```

Format:
- Use present tense
- Start with a verb
- Keep first line under 72 characters
- Add details in body if needed

## Pull Request Guidelines

### Before Submitting

- Ensure your code follows the project style
- Test your changes thoroughly
- Update documentation if needed
- Rebase on latest main branch

### PR Description

Include:
- Summary of changes
- Related issue numbers
- Screenshots (if UI changes)
- Testing performed
- Any breaking changes

## Project Structure

```
DevTrack/
├── devtrack_frontend_github/
│   ├── public/          # Static files
│   └── README.md        # Frontend docs
└── README.md            # Main documentation
```

## Areas for Contribution

We especially welcome help with:

- **Backend Development**: Add API for data persistence
- **User Authentication**: Implement login system
- **Data Visualization**: Add charts and analytics
- **Mobile App**: Create mobile version
- **Testing**: Add automated tests
- **Documentation**: Improve guides and comments
- **UI/UX**: Enhance user interface
- **Accessibility**: Improve accessibility features

## Questions?

If you have questions:

- Check existing issues and documentation
- Open a new issue for discussion
- Contact: gimbagada@gmail.com

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Welcome newcomers
- Focus on the project goals

## Recognition

Contributors will be acknowledged in the project. Thank you for helping improve development program tracking!

## License

By contributing to DevTrack, you agree that your contributions will be licensed under the MIT License.
