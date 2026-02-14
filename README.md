# Nada Alshahrani - Personal Portfolio Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()

A modern, responsive personal portfolio website built as part of the Web Engineering & Development course at King Fahad University of Petroleum and Minerals. Features a beautiful moonstone blue theme with dark/light mode toggle.

## 🌟 Live Demo

> [Add your GitHub Pages or deployment link here]

## 📸 Preview

```
┌─────────────────────────────────────────┐
│  🎨 Moonstone Blue Theme Portfolio      │
│                                         │
│  ✨ Smooth Animations                   │
│  🌓 Dark/Light Mode Toggle              │
│  📱 Fully Responsive Design             │
│  ⚡ Fast & Accessible                   │
└─────────────────────────────────────────┘
```

## 🎯 Project Overview

This portfolio website showcases my skills, projects, and experience as a Software Engineering student. It demonstrates proficiency in:

- Modern web development practices
- Responsive design principles
- Interactive user interfaces
- Accessibility standards
- Performance optimization

## ✨ Features

### Core Features
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🌓 Dark/Light Theme** - Toggle between themes with preference persistence
- **⏰ Dynamic Greeting** - Time-based personalized welcome message
- **🎯 Smooth Navigation** - Animated scrolling to sections
- **📝 Contact Form** - Client-side validation with user feedback
- **🎨 Modern UI** - Clean, professional design with moonstone blue theme

### Technical Features
- Semantic HTML5 structure
- CSS Grid and Flexbox layouts
- CSS Custom Properties for theming
- Intersection Observer API for scroll animations
- LocalStorage for user preferences
- Performance-optimized animations

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for modifications)
- Git (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yourrepo-assignment1.git
   cd yourrepo-assignment1
   ```

2. **Open in browser**
   ```bash
   # Option 1: Open directly
   open index.html
   
   # Option 2: Use a local server (recommended)
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or simply open `index.html` in your browser

### File Structure

```
assignment-1/
│
├── index.html              # Main HTML file
│
├── css/
│   └── styles.css         # All styles and responsive design
│
├── js/
│   └── script.js          # JavaScript functionality
│
├── assets/
│   └── images/            # Images folder (placeholder)
│
├── docs/
│   ├── ai-usage-report.md           # AI tool usage documentation
│   └── technical-documentation.md   # Comprehensive technical docs
│
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🎨 Customization

### Changing the Color Theme

The entire color scheme is controlled by CSS variables in `css/styles.css`:

```css
:root {
    /* Moonstone Blue Theme */
    --color-primary: #73A5C6;
    --color-primary-light: #8BB8D8;
    --color-primary-dark: #5B8FA3;
    --color-accent: #4A90A4;
    --color-secondary: #B8D4E3;
}
```

Simply modify these values to change the entire theme!

### Adding Your Own Content

1. **Update About Section**: Edit the content in `index.html` at the `#about` section
2. **Add Projects**: Duplicate a `.project-card` div and modify the content
3. **Update Experience**: Add new `.timeline-item` elements in the experience section
4. **Modify Contact Info**: Update your email, phone, and LinkedIn in the contact section

### Adding Images

Place your images in the `assets/images/` folder and reference them:

```html
<img src="assets/images/your-image.jpg" alt="Description">
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, animations, and responsive design
  - CSS Grid & Flexbox
  - CSS Custom Properties
  - CSS Animations & Transitions
- **JavaScript (ES6+)** - Interactivity and dynamic features
  - Intersection Observer API
  - LocalStorage API
  - DOM Manipulation
- **Google Fonts** - Typography (Playfair Display & Work Sans)

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[AI Usage Report](docs/ai-usage-report.md)** - Detailed documentation of AI tool usage, benefits, challenges, and responsible use
- **[Technical Documentation](docs/technical-documentation.md)** - Complete technical specifications, architecture, and implementation details

## 🤖 AI Integration

This project was developed with assistance from Claude AI (Anthropic). AI was used for:

- Code generation and structure
- Design consultation
- Documentation writing
- Best practices guidance

**Important**: All AI-generated code was reviewed, understood, and modified to ensure:
- Correctness and functionality
- Personalization and originality
- Learning and comprehension
- Academic integrity

For complete details on AI usage, see [AI Usage Report](docs/ai-usage-report.md).

## 🎓 Assignment Requirements

This project fulfills all requirements for Assignment 1:

### ✅ Repository Setup
- [x] Public GitHub repository
- [x] Clear folder structure
- [x] Meaningful commit history
- [x] Well-written README

### ✅ Content Requirements
- [x] About Me section
- [x] Projects section (2+ projects)
- [x] Contact form
- [x] Additional sections (Experience, Skills)

### ✅ Responsive Design
- [x] Desktop, tablet, mobile support
- [x] CSS Grid/Flexbox implementation
- [x] DevTools testing

### ✅ Interactivity
- [x] Smooth scrolling
- [x] Dark/light theme toggle
- [x] Dynamic greeting
- [x] Form validation

### ✅ AI Integration
- [x] Used Claude AI for development
- [x] Documented in ai-usage-report.md
- [x] Responsible use demonstrated

### ✅ Code Quality
- [x] Clean, consistent code
- [x] Organized file structure
- [x] Commented code
- [x] No broken links or errors

### ✅ Documentation
- [x] Comprehensive README
- [x] Setup instructions
- [x] AI usage summary
- [x] Technical documentation

## 🚀 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select main branch as source
4. Save and wait for deployment
5. Your site will be available at: `https://yourusername.github.io/yourrepo-assignment1/`

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Click "Deploy site"

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Click "Deploy"

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🔧 Troubleshooting

### Common Issues

**Issue**: Styles not loading
- **Solution**: Check that `css/styles.css` path is correct in `index.html`
- Clear browser cache

**Issue**: JavaScript not working
- **Solution**: Check browser console for errors
- Ensure `js/script.js` is properly linked

**Issue**: Theme not persisting
- **Solution**: Check if LocalStorage is enabled in browser
- Try different browser

**Issue**: Form not submitting
- **Solution**: This is normal - no backend is configured
- Check console.log for form data

## 📈 Future Enhancements

Planned improvements for future versions:

- [ ] Add actual project screenshots
- [ ] Implement backend for contact form
- [ ] Add blog section
- [ ] Include downloadable resume
- [ ] Add project detail pages
- [ ] Implement i18n (Arabic/English)
- [ ] Add animations library (GSAP)
- [ ] Create admin panel for content management
- [ ] Implement analytics
- [ ] Add PWA features

## 🤝 Contributing

While this is a personal portfolio project for academic purposes, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes as part of coursework at King Fahad University of Petroleum and Minerals.

## 👤 Author

**Nada Alshahrani**

- 🎓 BSc Software Engineering Student
- 🏫 King Fahad University of Petroleum and Minerals
- 📧 Email: thenada4@gmail.com
- 💼 LinkedIn: [Nada Alshahrani](https://linkedin.com/in/nada-alshahrani)
- 📍 Location: Dhahran, Saudi Arabia

## 🙏 Acknowledgments

- **KFUPM** - For the Web Engineering & Development course
- **Claude AI (Anthropic)** - For development assistance
- **Google Fonts** - For typography resources
- **MDN Web Docs** - For technical reference
- **My Instructors** - For guidance and support

## 📞 Contact

For questions, feedback, or collaboration opportunities:

- **Email**: thenada4@gmail.com
- **Phone**: (966) 553-903-812
- **LinkedIn**: [Connect with me](https://linkedin.com/in/nada-alshahrani)
- **GitHub Issues**: Use the Issues tab for bug reports or feature requests

---

<div align="center">

**Built with ❤️ and code**

*Assignment 1 - Web Engineering & Development*  
*King Fahad University of Petroleum and Minerals*  
*February 2025*

⭐ Star this repo if you find it helpful!

</div>
