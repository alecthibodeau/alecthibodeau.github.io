function formatTitleCase(text: string): string {
  return text.charAt(0).toUpperCase()+text.slice(1);
}

function setRandomHexColor(): string {
  const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomHexColor}`;
}

function setRandomNumber(maxNumber: number): number {
  return Math.floor(Math.random() * maxNumber);
}

const helpers = {
  formatTitleCase,
  setRandomHexColor,
  setRandomNumber
}

export default helpers;
