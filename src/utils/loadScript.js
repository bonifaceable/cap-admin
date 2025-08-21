// utils/loadScript.js
export const loadScript = (src, options = {}) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(options.id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = src;
    if (options.id) {
      script.id = options.id;
    }

    if (options.parent) {
      const parentElement = document.getElementById(options.parent);
      if (parentElement) {
        parentElement.appendChild(script);
      } else {
        reject(new Error(`Parent element with ID ${options.parent} not found`));
      }
    } else {
      document.body.appendChild(script);
    }

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
  });
};
