import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div
        className="position-absolute"
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1674343001705-40a1a7b80e44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center center",
          opacity: 0.1,
          zIndex: -1,
        }}
      ></div>
      <div
        className="container d-flex flex-column"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="row justify-content-center my-auto">
          <div className="col-md-4 text-center">
            <h2>星旅無限</h2>
            <p className="text-muted mb-0">
              星旅無限，以「探索世界，無限可能」為核心理念，致力於為每位旅行者打造獨一無二的旅遊體驗。不論是迷人的自然景觀、深度文化探索，還是豪華放鬆的度假之旅，我們的專業團隊都能根據您的需求量身打造行程。讓我們一起在旅途中發現未知的美好，書寫屬於您的冒險故事！
            </p>
            <button className="btn btn-dark rounded-0 mt-6">
              <Link 
                  className="text-white" 
                  to="/products"
                  style={{ textDecoration: 'none' }}
                >
                  <h6>開始旅程</h6>
                </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mt-md-3">
            <div className="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top rounded-0"
                alt=""
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <Link 
                  className="text-muted" 
                  to="/products"
                  style={{ textDecoration: 'none' }}
                >
                  <h4>日本</h4>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-md-3">
            <div className="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top rounded-0"
                alt=""
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4>韓國</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light mt-7">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center py-7">
                  <div className="col-md-6 text-center">
                    <h3>探索未知的旅程，從這裡開始！</h3>
                    <p className="my-5">
                      無論是陽光灑滿的海灘、歷史悠久的古城，還是充滿活力的都市夜景，世界的每個角落都在等你發現。現在加入我們的特別促銷活動，享受高達50%折扣的限時優惠，讓你的夢想旅行觸手可及！
                    </p>
                    <p>
                      <small>—你的故事，值得最美的風景—</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-7">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img-fluid"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4 m-auto text-center">
            <h5 className="mt-4">日本：千年古韻與現代科技的交響</h5>
            <p className="text-muted">
              探索日本，您將穿越千年的文化與歷史。京都的金閣寺與清水寺見證了古代的優雅，東京的霓虹燈與秋葉原則展現了科技與創意的前沿。無論是富士山下的壯麗景致、北海道的純淨自然，還是大阪的熱鬧商業街與美食文化，每個角落都有專屬的魅力。來日本，體驗茶道的靜謐、溫泉的放鬆，以及四季分明的自然景觀，為您的旅程留下深刻的和風印象。
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse justify-content-between mt-4">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1602479185195-32f5cd203559?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img-fluid"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-4 m-auto text-center">
            <h5 className="mt-4">韓國：傳統文化與韓流潮流的碰撞</h5>
            <p className="text-muted">
              韓國是古典與現代的完美結合地。漫步於景福宮，追溯朝鮮王朝的輝煌歷史；在明洞或弘大，沉浸於韓流音樂、時尚與美食的魅力。從釜山的迷人海岸線到濟州島的壯麗自然，韓國為旅行者提供了豐富多彩的體驗。不要錯過韓國烤肉、泡菜與街頭小吃的味蕾盛宴，更可以親臨韓劇場景，感受螢幕外的真實浪漫。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
