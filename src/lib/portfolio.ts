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

// Projects
export const projects: Project[] = [
    {
        id: "hormiga-app",
        title: "HormigaApp",
        description: "Aplicación de finanzas personales con seguimiento de gastos, presupuestos y ahorro mensual.",
        tech: ["React", "Django", "PostgreSQL", "REST API"],
        github: "https://github.com/bagxxi/hormigapp_front",
        demo: "https://mintcream-oyster-711300.hostingersite.com/",
        cover: "/img/projects/hormiga-app.jpg",
        color: colors.green,
        featured: true
    },
    {
        id: "alejandra-balbontin",
        title: "Alejandra Balbontín",
        description: "Portafolio de fotografía documental y dirección de fotografía, con videos integrados y diseño minimalista.",
        tech: ["HTML", "CSS", "JavaScript", "Vimeo"],
        github: "",
        demo: "https://alejandrabalbontin.cl/",
        cover: "/img/projects/alejandra-balbontin.jpg",
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
        cover: "/img/projects/inversiones-byg.jpg",
        color: colors.emerald,
        featured: true
    },
    {
        id: "photography-portfolio",
        title: "Portfolio de Fotografía",
        description: "Sitio de portafolio para fotografía profesional con galería interactiva y diseño moderno.",
        tech: ["Astro", "React", "TypeScript"],
        github: "https://github.com/bagxxi/portafolio-foto",
        cover: "/img/projects/photography-portfolio.jpg",
        color: colors.pink,
        featured: false
    }
];

// Games
export interface Game {
    id: string;
    title: string;
    description: { es: string; en: string };
    src: string;
    tags: string[];
    controls: { es: string; en: string };
}

export const games: Game[] = [
    {
        id: "hospital-medianoche",
        title: "Hospital de Medianoche",
        description: {
            es: "Juego 3D de terror suave. Eres el interno del turno de noche: atiende a los animalitos enfermos, encuentra sus remedios y detecta a las anomalías antes de que entren al hospital.",
            en: "Cozy-horror 3D game. You are the night-shift intern: treat sick little animals, find their remedies and spot the anomalies before they sneak into the hospital."
        },
        src: "/games/hospital-medianoche.html",
        tags: ["JavaScript", "3D", "Desktop y móvil"],
        controls: {
            es: "WASD o flechas para caminar, arrastrar para mirar, E para usar. En celular: joystick y botón Usar.",
            en: "WASD or arrow keys to walk, drag to look, E to interact. On mobile: joystick and Use button."
        }
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
