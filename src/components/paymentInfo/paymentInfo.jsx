import React from 'react';
import './PaymentInfo.css';

const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <h1>معلومات الدفع </h1>
      <div className="payment-card">
        <h2>:للمصريين</h2>
        <ul>
          <li> LE <strong>1500</strong> المشاركة بورقة بحثية<span className="dot">•</span></li>
          <li> LE <strong>1000</strong> المشاركة بورقة عمل<span className="dot">•</span></li>
          <li> LE <strong>400</strong> المشاركة كمستمع<span className="dot">•</span></li>
        </ul>
      </div>
      <div className="payment-card">
        <h2>:لغير المصريين</h2>
        <ul>
          <li> USD <strong>300</strong> المشاركة بورقة بحثية<span className="dot">•</span></li>
          <li> USD <strong>200</strong> المشاركة بورقة عمل<span className="dot">•</span></li>
          <li> USD <strong>100</strong> للوافدين<span className="dot">•</span></li>
        </ul>
      </div>
    </div>
  );
}

export default PaymentInfo;
