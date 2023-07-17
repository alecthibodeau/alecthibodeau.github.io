function formatTitleCase(text: string): string {
  return text.charAt(0).toUpperCase()+text.slice(1);
}

const helpers = {
  formatTitleCase
}

export default helpers;
