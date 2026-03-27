interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  accentSubtitle?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false, accentSubtitle = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className={`font-bold text-3xl md:text-4xl mb-4 ${light ? 'text-white' : 'text-[#1A3A8F]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${accentSubtitle ? 'text-[#E8931A] font-medium' : light ? 'text-white/80' : 'text-[#555555]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
