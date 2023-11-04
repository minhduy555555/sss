
import './body.css'

// Dữ liệu danh sách sản phẩm (có thể lấy từ API hoặc truyền 
const products = [
    {
      id: 1,
      title: 'Product Title 1',
      price: 19.99,
      image: 'https://aeros.vn/upload/images/noi-that-chung-cu/mau-phoi-canh-can-ho-chung-cu-dep-1.jpg',
    },
    {
      id: 2,
      title: 'Product Title 2',
      price: 29.99,
      image: 'https://images.cenhomes.vn/2020/03/1585033152-can-ho-mau-eurowindow-river-park.jpg',
    },
    {
      id: 3,
      title: 'Product Title 2',
      price: 29.99,
      image: 'https://xaynhapho.com.vn/wp-content/uploads/2019/02/bung-sang-khong-gian-voi-noi-that-can-ho-chung-cu-80m2-dep-lung-linh-1.jpg',
    },
    {
      id: 4,
      title: 'Product Title 2',
      price: 29.99,
      image: 'https://homehome.vn/wp-content/uploads/thiet-ke-noi-that-can-ho-77-m2.png',
    },
    {
      id: 5,
      title: 'Product Title 2',
      price: 29.99,
      image: 'https://img.cand.com.vn/resize/800x800/NewFiles/Images/2021/10/15/image004-1634256720552.jpg',
    },
    {
      id: 6,
      title: 'Product Title 2',
      price: 29.99,
      image: 'https://sunshinecaf.com/wp-content/uploads/2023/08/thiet-ke-noi-that-chung-cu-100m2-7-1.jpg',
    },
    // Thêm các sản phẩm khác tương tự ở đây
  ];
  
  function ProductList() {
    return (
      <div className="container">
        <h1>Appertement for rend </h1>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductList;