import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface CustomImageProps extends Omit<ImageProps, "loader"> {
  loader?: (props: { src: string; width: number; quality?: number }) => string;
}

const CustomImage: FC<CustomImageProps> = ({
  src,
  alt = "",
  width,
  height,
  className,
  loader,
  ...props
}) => {
  const myLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loader={loader || myLoader}
      {...props}
    />
  );
};

export default CustomImage;
