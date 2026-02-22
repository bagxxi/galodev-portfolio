import { colors } from "./colors";

// ==========================================
// PORTFOLIO DATA - GaloDev
// ==========================================

export interface PersonalInfo {
    name: string;
    displayName: string;
    title: string;
    bio: string;
    location: string;
    timezone: string;
    status: string;
    email: string;
    github: string;
    linkedin?: string;
    avatar?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string;
    cover: string;
    color: (typeof colors)[keyof typeof colors];
    featured: boolean;
}

export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number; // 1-5
    color: string;
}

// Personal Info
export const personalInfo: PersonalInfo = {
    name: "Gabriel",
    displayName: "GaloDev",
    title: "Desarrollador Full Stack",
    bio: "Desarrollador apasionado por crear experiencias web modernas y eficientes. Especializado en JavaScript, React y Python. Siempre aprendiendo y explorando nuevas tecnologías.",
    location: "Chile",
    timezone: "UTC -03:00",
    status: "Disponible para proyectos",
    email: "contacto@elgalo.me",
    github: "https://github.com/bagxxi",
    linkedin: "https://www.linkedin.com/in/galodev/",
    avatar: "/avatar.jpg"
};

// Translations
export const translations = {
    es: {
        projects: {
            featured: "Proyectos Destacados",
            viewAll: "Ver todos",
            description: "Una selección de mis mejores trabajos",
            description_long: "Una colección de proyectos personales y colaborativos. Cada uno representa un paso en mi camino como desarrollador.",
            viewSite: "Ver sitio →",
            more: "Más Proyectos",
            view_short: "Ver →"
        },
        greeting: {
            hello: "Hola, soy",
            morning: "Buenos días",
            afternoon: "Buenas tardes",
            evening: "Buenas noches"
        },
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            projects: "Proyectos",
            skills: "Skills",
            contact: "Contacto",
            music: "Música",
            discover: "Descubrir",
            genres: "Géneros",
            viewProjects: "Ver Proyectos"
        },
        about: {
            title: "Sobre mí",
            subtitle: "Mi camino en el desarrollo",
            description: "Soy un desarrollador full stack con pasión por crear soluciones elegantes y eficientes.",
            bio_full: "Desarrollador apasionado por crear experiencias web modernas y eficientes. Especializado en JavaScript, React y Python. Siempre aprendiendo y explorando nuevas tecnologías.",
            experience: "Años de experiencia",
            projects_count: "Proyectos completados",
            coffee: "Tazas de café",
            location: "Ubicación:",
            timezone: "Zona:",
            repos: "Repositorios",
            techs: "Tecnologías",
            github_status: "GitHub Status",
            years: "Años Dev",
            location_val: "Chile",
            timezone_val: "UTC -03:00"
        },
        info: {
            title: "Desarrollador Full Stack",
            status: "Disponible para proyectos"
        },
        project_details: {
            "hormiga-app": {
                title: "HormigaApp",
                description: "Aplicación de finanzas personales con seguimiento de gastos, presupuestos y ahorro mensual."
            },
            "it-inventory": {
                title: "IT Inventory",
                description: "Sistema de gestión de inventario para equipos de IT y recursos tecnológicos."
            },
            "inversiones-byg": {
                title: "Inversiones BYG",
                description: "Sitio web corporativo para empresa de inversiones inmobiliarias. Diseño profesional y optimizado para SEO."
            },
            "photography-portfolio": {
                title: "Portfolio de Fotografía",
                description: "Sitio de portafolio para fotografía profesional con galería interactiva y diseño moderno."
            }
        },
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Mi toolbox tecnológico",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Herramientas",
            data: "Análisis de Datos"
        },
        contact: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente?",
            form_name: "Nombre",
            form_email: "Email",
            form_message: "Mensaje",
            form_send: "Enviar Mensaje",
            success: "Mensaje enviado con éxito",
            email_label: "Email",
            location_label: "Ubicación",
            status_label: "Estado",
            github_label: "GitHub",
            response_time: "Respondo en < 24h"
        }
    },
    en: {
        projects: {
            featured: "Featured Projects",
            viewAll: "View all",
            description: "A selection of my best work",
            description_long: "A collection of personal and collaborative projects. Each one represents a step in my journey as a developer.",
            viewSite: "View site →",
            more: "More Projects",
            view_short: "View →"
        },
        greeting: {
            hello: "Hi, I'm",
            morning: "Good morning",
            afternoon: "Good afternoon",
            evening: "Good night"
        },
        nav: {
            home: "Home",
            about: "About me",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            music: "Music",
            discover: "Discover",
            genres: "Genres",
            viewProjects: "View Projects"
        },
        about: {
            title: "About Me",
            subtitle: "My journey in development",
            description: "I am a full stack developer passionate about creating elegant and efficient solutions.",
            bio_full: "Passionate developer focused on building modern and efficient web experiences. Specialized in JavaScript, React, and Python. Always learning and exploring new technologies.",
            experience: "Years of experience",
            projects_count: "Completed projects",
            coffee: "Coffee cups",
            location: "Location:",
            timezone: "Timezone:",
            repos: "Repositories",
            techs: "Technologies",
            github_status: "GitHub Status",
            years: "Years Dev",
            location_val: "Chile",
            timezone_val: "UTC -03:00"
        },
        info: {
            title: "Full Stack Developer",
            status: "Available for projects"
        },
        project_details: {
            "hormiga-app": {
                title: "HormigaApp",
                description: "Personal finance application with expense tracking, budgets, and monthly savings."
            },
            "it-inventory": {
                title: "IT Inventory",
                description: "Inventory management system for IT equipment and technological resources."
            },
            "inversiones-byg": {
                title: "Inversiones BYG",
                description: "Corporate website for a real estate investment company. Professional and SEO-optimized design."
            },
            "photography-portfolio": {
                title: "Photography Portfolio",
                description: "Professional photography portfolio site with interactive gallery and modern design."
            }
        },
        skills: {
            title: "Technical Skills",
            subtitle: "My technical toolbox",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools",
            data: "Data Analysis"
        },
        contact: {
            title: "Contact",
            subtitle: "Have a project in mind?",
            form_name: "Name",
            form_email: "Email",
            form_message: "Message",
            form_send: "Send Message",
            success: "Message sent successfully",
            email_label: "Email",
            location_label: "Location",
            status_label: "Status",
            github_label: "GitHub",
            response_time: "Response time < 24h"
        }
    }
};

// Projects
export const projects: Project[] = [
    {
        id: "hormiga-app",
        title: "HormigaApp",
        description: "Aplicación de finanzas personales con seguimiento de gastos, presupuestos y ahorro mensual.",
        tech: ["React", "Django", "PostgreSQL", "REST API"],
        github: "https://github.com/bagxxi/hormigapp_front",
        demo: "https://mintcream-oyster-711300.hostingersite.com/",
        cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop",
        color: colors.green,
        featured: true
    },
    {
        id: "it-inventory",
        title: "IT Inventory",
        description: "Sistema de gestión de inventario para equipos de IT y recursos tecnológicos.",
        tech: ["React", "Node.js", "Cloudflare Pages"],
        github: "https://github.com/bagxxi/it-inventory", // Privado
        demo: "https://it-inventory-25p.pages.dev/",
        cover: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
        color: colors.blue,
        featured: true
    },
    {
        id: "inversiones-byg",
        title: "Inversiones BYG",
        description: "Sitio web corporativo para empresa de inversiones inmobiliarias. Diseño profesional y optimizado para SEO.",
        tech: ["HTML", "CSS", "JavaScript", "SEO"],
        github: "",
        demo: "https://inversionesbyg.cl/",
        cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
        color: colors.emerald,
        featured: true
    },
    {
        id: "photography-portfolio",
        title: "Portfolio de Fotografía",
        description: "Sitio de portafolio para fotografía profesional con galería interactiva y diseño moderno.",
        tech: ["Astro", "React", "TypeScript"],
        github: "https://github.com/bagxxi/portafolio-foto",
        cover: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=400&fit=crop",
        color: colors.pink,
        featured: false
    }
];

// Skills Categories
export const skillCategories: SkillCategory[] = [
    {
        id: "frontend",
        name: "Frontend",
        icon: "💻",
        skills: [
            { name: "JavaScript", level: 5, color: "#f7df1e" },
            { name: "React", level: 4, color: "#61dafb" },
            { name: "HTML5", level: 5, color: "#e34f26" },
            { name: "CSS3", level: 5, color: "#1572b6" },
            { name: "Tailwind CSS", level: 4, color: "#06b6d4" },
            { name: "Astro", level: 3, color: "#ff5d01" },
            { name: "Svelte", level: 3, color: "#ff3e00" }
        ]
    },
    {
        id: "backend",
        name: "Backend",
        icon: "⚙️",
        skills: [
            { name: "Python", level: 4, color: "#3776ab" },
            { name: "Django", level: 4, color: "#092e20" },
            { name: "REST APIs", level: 4, color: "#7dcfff" },
            { name: "PostgreSQL", level: 3, color: "#4169e1" },
            { name: "Node.js", level: 3, color: "#339933" }
        ]
    },
    {
        id: "tools",
        name: "Herramientas",
        icon: "🛠️",
        skills: [
            { name: "Git", level: 5, color: "#f05032" },
            { name: "GitHub", level: 5, color: "#181717" },
            { name: "VS Code", level: 5, color: "#007acc" },
            { name: "GitHub Actions", level: 3, color: "#2088ff" },
            { name: "Bootstrap", level: 4, color: "#7952b3" },
            { name: "Jupyter", level: 3, color: "#f37626" }
        ]
    },
    {
        id: "data",
        name: "Análisis de Datos",
        icon: "📊",
        skills: [
            { name: "Pandas", level: 3, color: "#150458" },
            { name: "Data Analysis", level: 3, color: "#9ece6a" },
            { name: "Visualización", level: 3, color: "#bb9af7" }
        ]
    }
];

// Social Links for Contact
export const socialLinks = [
    { name: "GitHub", url: "https://github.com/bagxxi", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/galodev/", icon: "linkedin" },
    { name: "Email", url: "mailto:contacto@elgalo.me", icon: "mail" }
];
