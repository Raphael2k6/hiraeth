import React, { FC } from "react";

interface IconProps {
  name: string; // Name of the icon file (without extension)
  className?: string; // Optional Tailwind or custom CSS classes
  onClick?: () => void; // Optional click event handler
  [key: string]: unknown; // Allow any additional props with safer typing
}

/**
 * Icon component to dynamically import and render app icons
 * @param {IconProps} props - Component properties
 * @returns {JSX.Element | null}
 */
const Icon: FC<IconProps> = ({
  name,
  className = "",
  onClick = () => null,
  ...props
}) => {
  if (!name) return null;

  try {
    // Dynamically import the image
    const Image = React.lazy(() => import(`./stock/${name}`));

    if (Image) {
      return (
        <Image
          aria-label={name}
          className={`icon ${className}`}
          onClick={onClick}
          {...props}
        />
      );
    }

    return null;
  } catch (error) {
    console.error(`Error loading icon "${name}":`, error);
    return null;
  }
};

export default Icon;
