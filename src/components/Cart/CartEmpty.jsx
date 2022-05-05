const CartEmptyText = () => {
  return (
    <div className="cartEmptyTextWrapper my-3">
      <h3 className="my-5 d-flex ai-c jc-c">
        <i className="fas fa-times me-3" />
        Your cart is empty.
      </h3>
    </div>
  );
};

export default CartEmptyText;
