export default function CheckoutSuccessPage() {
  return (
    <div className="container-fluid">
      <div className="position-relative d-flex">
        <div
          className="container d-flex flex-column"
          style={{ minHeight: "100vh" }}
        >
          <div className="row my-auto pb-7">
            <div className="col-md-4 d-flex flex-column">
              <div className="my-auto">
                <h2>付款成功</h2>
                <p>
                  感謝您的預訂！我們已收到您的付款，期待為您帶來一段難忘的旅程。準備好探索新天地，享受每一刻的美好吧！祝您旅途愉快！ 🌏✈️
                </p>
                <a href="./index.html" className="btn btn-dark mt-4 px-5">
                  回到首頁
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-md-50 w-100 position-absolute opacity-1"
          style={{
            zIndex: -1,
            minHeight: "100vh",
            right: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1565658988326-ca4daa274497?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>
    </div>
  );
}
