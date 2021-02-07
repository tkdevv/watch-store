export const scrollToTop = () => {
  let stopAnimationId = null;
  const scrollHandler = () => {
    if (window.scrollY > 0) {
      console.log("RUNNING ANIM");
      stopAnimationId = window.requestAnimationFrame(scrollHandler);
      window.scrollBy(0, -30);
    } else if (stopAnimationId) {
      console.log("STOPPING ANIM");
      cancelAnimationFrame(stopAnimationId);
    }
  };
  scrollHandler();
};

export const totalCartValue = (cart) => {
  let total = 0;
  const prices = cart.map((item) => {
    const index = Number(item.id.slice(item.length - 2, item.length - 1));
    console.log(console.log(index));
    console.log(item);
    const priceStr = item.watch.options[index].price;
    return parseInt(
      priceStr
        .split(" ")
        .join("")
        .slice(1, priceStr.length - 1) * item.quantity
    );
  });
  prices.forEach((price) => {
    total += price;
  });
  return total;
};
