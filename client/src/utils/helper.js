/* eslint import/prefer-default-export: 0 */

export function getImageSource(img) {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:8080${img}`;
  }
  return img;
}
