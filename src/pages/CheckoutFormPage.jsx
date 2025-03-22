import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function CheckoutFormPage() {
  
  const [cart, setCart] = useState({});

  // 表單資料
  const {
    register,
    formState: { errors },
  } = useForm()

  // 取得購物車列表
  const getCart = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/cart`);

      setCart(res.data.data);
      } catch (error) {
      alert('取得購物車列表失敗')
      }
  }

  // 取得產品資料
  useEffect(() => {
    getCart();
    
    // 滾動到頂部
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            <a className="navbar-brand" href="./index.html">
              即將完成訂單...
            </a>
            <ul className="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4">
              <li className="me-md-6 me-6 position-relative custom-step-line">
                <i className="fas fa-check-circle d-md-inline d-block text-center"></i>
                <span className="text-nowrap">選擇行程</span>
              </li>
              <li className="me-md-6 me-6 position-relative custom-step-line">
                <i className="fas fa-dot-circle d-md-inline d-block text-center"></i>
                <span className="text-nowrap">立即付款</span>
              </li>
              <li>
                <i className="fas fa-dot-circle d-md-inline d-block text-center"></i>
                <span className="text-nowrap">享受旅程</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h3 className="fw-bold mb-4 pt-3">填寫結帳資訊</h3>
        </div>
      </div>
      <div className="row flex-row-reverse justify-content-center pb-5">
        <div className="col-md-4">
          <div className="border p-4 mb-4">
          {cart.carts?.map((cartItem) => (
            <div key={cartItem.id} className="d-flex">
              <img
                src={cartItem.product.imageUrl}
                alt=""
                className="me-2"
                style={{ width: "48px", height: "48px", objectFit: "cover" }}
              />
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <p className="mb-0 fw-bold">{cartItem.product.title}</p>
                  <p className="mb-0">NT${cartItem.final_total?.toLocaleString()}</p>
                </div>
                <p className="mb-0 fw-bold">x{cartItem.qty}</p>
              </div>
            </div>
          ))}

            <table className="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="border-0 px-0 pt-4 font-weight-normal"
                  >
                    小計
                  </th>
                  <td className="text-end border-0 px-0 pt-4">NT${cart.total?.toLocaleString()}</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    付款方式
                  </th>
                  <td className="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-between mt-4">
              <p className="mb-0 h4 fw-bold">總計</p>
              <p className="mb-0 h4 fw-bold">NT${cart.final_total?.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <form>
            <p>訂購人資料</p>
            
            <div className="mb-2">
              <label for="ContactName" className="text-muted mb-0">
                姓名
              </label>
              <input
                {...register('name',{
                required: '姓名欄位必填'
                })}
                className={`form-control ${errors.name && 'is-invalid'}`}
                type="text"
                id="ContactName"
                placeholder="請輸入姓名"
              />
              
              {errors.name && <p className="text-danger my-2">{errors.name.message}</p>}
            </div>
            <div className="mb-0">
              <label for="ContactMail" className="text-muted mb-0">
                E-mail
              </label>
              <input
                {...register('email',{
                  required: 'Email 欄位必填',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email 格式錯誤'
                }
                })}
                type="email"
                className={`form-control ${errors.email && 'is-invalid'}`}
                id="ContactMail"
                aria-describedby="emailHelp"
                placeholder="請輸入 Email"
              />

              {errors.email && <p className="text-danger my-2">{errors.email.message}</p>}
            </div>
            <div className="mb-2">
              <label for="ContactPhone" className="text-muted mb-0">
                手機號碼
              </label>
              <input
                {...register('tel',{
                  required: '電話欄位必填',
                  pattern: {
                    value: /^(0[2-8]\d{7}|09\d{8})$/,
                    message: '電話格式錯誤'
                }
                })}
                type="tel"
                className={`form-control ${errors.tel && 'is-invalid'}`}
                id="ContactPhone"
                placeholder="請輸入手機號碼"
              />
              
              {errors.tel && <p className="text-danger my-2">{errors.tel.message}</p>}
            </div>
            <div className="mb-2">
              <label for="ContactAddress" className="text-muted mb-0">
                地址
              </label>
              <input
                {...register('address',{
                  required: '地址欄位必填'
                })}
                type="text"
                className={`form-control ${errors.address && 'is-invalid'}`}
                id="ContactAddress"
                placeholder="請輸入地址"
              />

              {errors.address && <p className="text-danger my-2">{errors.address.message}</p>}
            </div>
            <div className="mb-2">
              <label for="ContactMessage" className="text-muted mb-0">
                備註欄
              </label>
              <textarea
                {...register('message')}
                className="form-control"
                rows="3"
                id="ContactMessage"
                placeholder="若您有任何需註明的內容，都可以在這邊告訴我們！"
              ></textarea>
            </div>
          </form>
          <div className="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
            <Link to="/cart" className="text-dark mt-md-0 mt-3">
              <i className="fas fa-chevron-left me-2"></i> 回上一步
            </Link>
            <Link to="/checkout-payment" className="btn btn-dark py-3 px-7">
              下一步
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
