function formatTitleCase(text: string): string {
  return text.charAt(0).toUpperCase()+text.slice(1);
}

function setRandomNumber(maxNumber: number): number {
  return Math.floor(Math.random() * maxNumber);
}

const helpers = {
  formatTitleCase,
  setRandomNumber
}

export default helpers;
