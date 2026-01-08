export const basePalettes = {
  "github-light": {
    colorBackground: "#ffffff",
    colorDotBorder: "transparent",
    colorDots: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    colorEmpty: "#ebedf0",
    colorSnake: "purple",
  },
  "github-dark": {
    colorBackground: "#0c1116",
    colorDotBorder: "transparent",
    colorEmpty: "#1D1F1E",
    colorDots: ["#1D1F1E", "#01311f", "#034525", "#0f6d31", "#00c647"],
    colorSnake: "purple",
  },
};

// aliases
export const palettes = {
  ...basePalettes,

  // aliases
  github: basePalettes["github-light"],
  default: basePalettes["github-light"],
};
