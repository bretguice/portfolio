export const fileBase64 = (img) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(img);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = error => reject(error);
    })
  }