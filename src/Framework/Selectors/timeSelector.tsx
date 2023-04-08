export const timeSelector = (implementations) => {
    const minute = new Date().getMinutes();
    const rndInt = minute % 2 === 0 ? 0 : 1;
    if (implementations.length > 2) return;
  
    return implementations[rndInt];
  };
  