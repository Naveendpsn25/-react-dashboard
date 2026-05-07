const colorsList = [
  "#000000", "#ffffff", "#ff0000", "#0000ff",
  "#00ff00", "#ff9900", "#333333", "#00ffcc",
  "#cccccc", "#111111", "#ff6600"
];

const tags = ["SALE", "NEW"];

function getRandomColors() {
  const count = Math.floor(Math.random() * 3) + 1
  const shuffled = [...colorsList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getRandomPrice() {
  return (Math.random() * 80 + 20).toFixed(2)}

export const productsData = Array.from({ length: 240 }, (_, index) => ({
  id: index + 1,
  name: `Nike Product ${index + 1}`,
  image: `https://picsum.photos/300/300?random=${index + 1}`, 
  price: Number(getRandomPrice()),
  colors: getRandomColors(),
  tag: tags[Math.floor(Math.random() * tags.length)],
}))