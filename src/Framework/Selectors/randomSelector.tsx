export const randomSelector = (implementations) => {
    const rndInt = Math.floor(Math.random() * implementations.length);
    return implementations[rndInt];
  };
  