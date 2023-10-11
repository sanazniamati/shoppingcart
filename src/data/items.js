const productList = [
  {
    id: "1",
    title: "Product",
    price: "99",
    image: "/images/watch.jpg",
  },
  {
    id: "2",
    title: "Product",
    price: "99",
    image: "/images/watch.jpg",
  },
  {
    id: "3",
    title: "Product",
    price: "99",
    image: "/images/watch.jpg",
  },
  {
    id: "4",
    title: "Product",
    price: "99",
    image: "/images/watch.jpg",
  },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);
  return productData;
}
export { productList, getProductData };
