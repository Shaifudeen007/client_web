import { ReactNode, useState } from "react";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  images: ReactNode;
  isExternal?: boolean;
}

const ProjectCard = ({ 
  category, 
  title, 
  description, 
  link, 
  linkText, 
  images,
  isExternal = true 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="py-16 md:py-24 border-b border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="space-y-6">
          <h6 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {category}
          </h6>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            <a 
              href={link} 
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="hover:opacity-70 transition-opacity"
            >
              {title}
            </a>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            {description}
          </p>
          
          <a 
            href={link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-block text-foreground font-medium border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            {linkText}
          </a>
        </div>

        {/* Images */}
        <div className={`relative transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          {images}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
