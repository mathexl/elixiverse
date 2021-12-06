const FontLoader = () => {
  const LoadFont = (name, url) => {
    let myFont = new FontFace(name, url);
    myFont.load().then(
      (font) => {
        document.fonts.add(font);
      },
      (error) => {
        // your font could not be loaded.
        console.log(error);
      }
    );
  };

  LoadFont(
    "Bodoni72",
    "url(https://dl.dropbox.com/s/bvo7yh3qc4mquxy/Bodoni72-Book.ttf?raw=1)"
  );

  LoadFont(
    "Ibarra",
    "url(https://dl.dropbox.com/s/3mo9k6wcitnjalb/ibarra-normal.ttf?dl=0)"
  );

  LoadFont(
    "GilroyQ",
    "url(https://dl.dropbox.com/s/k35qsf8tjrau6hl/Radomir%20Tinkov%20-%20Gilroy-Regular.otf?dl=0)"
  );
};

export default FontLoader;
