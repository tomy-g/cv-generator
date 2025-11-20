"# 📄 CV Generator

A modern, web-based CV/Resume generator built with Astro and Tailwind CSS. This project enables rapid CV customization and deployment, making it easy to tailor your resume for different job applications.

## 🎯 Purpose

This project solves a common problem when applying for jobs: **quickly adapting your CV to match specific job offers**. 

### Why This Project?

- **Fast Editing**: Web-based format allows instant updates without dealing with Word/PDF editors
- **Version Control**: Track all CV changes through Git
- **AI-Powered Customization**: Use LLMs (ChatGPT, Claude, etc.) to quickly adapt your CV content to specific job descriptions
- **Always Accessible**: Host it online and access/share your CV from anywhere
- **Print-Ready**: Optimized for A4 printing while maintaining web responsiveness

## 🤖 AI-Powered Workflow

The structured JSON format (`src/data/resume.json`) makes it perfect for AI assistance:

### Example Workflow:
1. **Find a job offer** you want to apply to
2. **Use an LLM** (ChatGPT, Claude, etc.) with a prompt like:
   ```
   Here's my CV data (paste resume.json) and here's the job offer (paste job description).
   Tailor my CV to highlight relevant experience and skills for this position.
   Update the summary and reorder skills to match job requirements.
   ```
3. **Copy the updated JSON** back to `resume.json`
4. **Deploy instantly** - Your customized CV is live!

This workflow lets you create targeted CVs in minutes instead of hours.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tomy-g/cv-generator.git
   cd cv-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your contact information:
   ```env
   PUBLIC_EMAIL=your.email@example.com
   PUBLIC_PHONE=Your Phone Number
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:4321](http://localhost:4321) to see your CV.

## 📝 Customizing Your CV

### Edit Content

All CV content is in `src/data/resume.json`. Update:

- **Personal Info**: Name, job title, summary, location
- **Work Experience**: Companies, positions, dates, descriptions
- **Education**: Degrees, institutions, dates
- **Skills**: Technical skills, frameworks, tools
- **Languages**: Language proficiency levels

### Example Structure:
```json
{
  "basics": {
    "name": "Your Name",
    "label": "Your Job Title",
    "summary": "Your professional summary..."
  },
  "work": [
    {
      "name": "Company",
      "position": "Your Position",
      "startDate": "2023",
      "endDate": "2024",
      "summary": "Description of your work"
    }
  ]
}
```

### Styling

Customize the appearance:
- **Colors**: Edit `tailwind.config.mjs` and component files
- **Layout**: Modify components in `src/components/cv/`
- **Typography**: Update font settings in `src/layouts/Layout.astro`

## 🔒 Privacy & Security

Sensitive contact information (email and phone) is stored in environment variables:
- **`.env`** contains your actual data (never committed to Git)
- **`.env.example`** is a template (safe to commit)
- **`.gitignore`** already protects your `.env` file

This keeps your personal contact info secure when sharing the repository.



**Don't forget to set your environment variables** (`PUBLIC_EMAIL`, `PUBLIC_PHONE`) in your deployment platform!

## �️ Tech Stack

- **[Astro](https://astro.build/)** - Fast, content-focused web framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icons
- **TypeScript** - Type-safe development


## 🎨 Features

- ✅ **Responsive Design** - Looks great on desktop and mobile
- ✅ **Print Optimized** - Perfect A4 formatting for PDF export
- ✅ **Dark Theme** - Professional dark blue design
- ✅ **Fast Loading** - Optimized static site generation
- ✅ **SEO Ready** - Proper meta tags and structure
- ✅ **Type Safe** - TypeScript for reliability
- ✅ **Git Friendly** - JSON format is easy to diff and merge


**Made with ❤️ using Astro and Tailwind CSS**" 
