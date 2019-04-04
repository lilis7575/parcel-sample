import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.66,
  googleFonts: [
    {
      name: "Motserrat",
      styles: ["700"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Motserrat", "Helvetica Neue", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"]
});

typography.injectStyles();

export default typography;
