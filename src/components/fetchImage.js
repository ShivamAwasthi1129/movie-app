export function fetchImageURL() {
  const imgElement = document.querySelector('#imdbnext-vp-jw-inline > div.jw-wrapper.jw-reset > div.jw-preview.jw-reset');
  if (imgElement) {
    const imageUrl = imgElement.style.backgroundImage.slice(5, -2); // Assuming the image URL is in background-image style
    return imageUrl;
  }
  return null;
}
