const formatPrice = (price) => {
    const options = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    };
  
    const productPrice = new Intl.NumberFormat('pt-BR', options).format(price);
  
    return productPrice;
  };
  
  export default formatPrice;
  