import React, { FC, Suspense } from "react";

interface IconProps {
  name: string; // Name of the icon file (without extension)
  className?: string; // Optional Tailwind or custom CSS classes
  onClick?: () => void; // Optional click event handler
  [key: string]: unknown; // Allow any additional props with safer typing
}

const Icon: FC<IconProps> = ({
  name,
  className = "",
  onClick = () => null,
  ...props
}) => {
  if (!name) return null;

  try {
    // Lazy-load the icon component
    const LazyIcon = React.lazy(() => import(`./stock/${name}`));

    return (
      <Suspense
        fallback={<span className="w-5 h-5 bg-gray-200 animate-pulse" />}
      >
        <LazyIcon
          aria-label={name}
          className={`icon ${className}`}
          onClick={onClick}
          {...props}
        />
      </Suspense>
    );
  } catch (error) {
    console.error(`Error loading icon "${name}":`, error);
    return null;
  }
};

export default Icon;
