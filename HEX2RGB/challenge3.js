// **Question 3**: Write a function that converts HEX to RGB. 
// Then Make that function autodect the formats so that if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX. 
// Bonus: Release this tool as a npm package.

const hexColor = '#00939d';
const rgbColor = 'rgb(255, 0, 0)';

export function convertColor(color) {
    if (isHexColor(color)) {
      return hexToRgb(color);
    } else if (isRgbColor(color)) {
      return rgbToHex(color);
    } else {
      return 'Invalid color format';
    }
}
  
function isHexColor(color) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}
  
function isRgbColor(color) {
    return /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.test(color);
}
  
function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}
  
function rgbToHex(rgb) {
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) {
      return 'Invalid RGB format';
    }
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}
  