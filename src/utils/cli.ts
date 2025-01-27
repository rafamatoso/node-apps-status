export function showLoadingAnimation() {
  const frames = ["Carregando.", "Carregando..", "Carregando..."];
  let index = 0;
  const interval = setInterval(() => {
    process.stdout.write("\r" + frames[index] + " ");
    index = (index + 1) % frames.length;
  }, 500);
  return interval;
}
