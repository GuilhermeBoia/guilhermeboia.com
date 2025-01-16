import React from "react";

interface GradientTitleProps {
  title?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  size?: "big" | "medium";
}

const titleSizes = {
  big: "text-5xl md:text-5xl lg:text-6xl",
  medium: "text-4xl md:text-4xl lg:text-5xl",
};

const GradientTitle = ({
  title = "Guilherme Boia",
  fromColor = "#4338ca",
  viaColor = "#60A5FA",
  toColor = "#93C5FD",
  size = "big",
}: GradientTitleProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
  };

  return (
    <>
      <h1 className={`font-sans ${titleSizes[size]} font-medium`}>
        <span
          className="gradient-title inline-block text-transparent bg-clip-text py-3"
          style={gradientStyle}
        >
          {title}
        </span>
      </h1>
    </>
  );
};

export const GradientTitleBig = (props: Omit<GradientTitleProps, "size">) => (
  <GradientTitle {...props} size="big" />
);

export const GradientTitleMedium = (
  props: Omit<GradientTitleProps, "size">
) => <GradientTitle {...props} size="medium" />;

export { GradientTitle };
