import React from "react";
import "./rules.css";

const ResearchGuidelines = () => {
  return (
    <div className="research-guidelines">
      <h2 className="guidelines-title">شروط قبول الأبحاث</h2>
      <ul className="guidelines-list">
      <li>
          يكتب المُلخص ببرنامج Microsoft Word، على أن يكون نمط الكتابة{" "}
          <strong>Times New Roman</strong> وحجم الخط <strong>14</strong> للغة
          العربية و<strong>12</strong> للغة الإنجليزية، أما العنوان فيكتب بخط
          ثقيل وحجم <strong>14</strong>، وأسماء المؤلفين بحجم <strong>12</strong>.
        </li>
        <li>
          أن يكون ملخص البحث في حدود <strong>150 – 250</strong> كلمة، وألا
          يتجاوز البحث <strong>15</strong> صفحة.
        </li>
        <li>أن يملا الطالب استمارة التسجيل في المؤتمر إلكترونيا.</li>
        <li>ترسل المشاركات على البريد الإلكتروني الخاص بالمؤتمر.</li>
        <li>
          يتم إرسال خطاب قبول البحث بعد التحكيم من قبل المتخصصين باللجنة
          العلمية خلال أسبوع من تاريخ استلام البحث.
        </li>
        <li>
          آخر موعد لإرسال البحث كامل: <strong>2024 مارس</strong>.
        </li>
        <li>المؤتمر يقبل نشر البحوث المقدمة من جميع فئات أعضاء هيئة التدريس.</li>
        <li>
          سوف يتم نشر كافة البحوث وأوراق العمل بالمجلة العلمية لكلية التجارة
          جامعة الأزهر.
        </li>
        <li>
          سوف يحصل المشترك على شهادة بالبحث أو ورقة العمل أو الحضور.
        </li>

      </ul>
      <div className="conference-location">
        <h3>مقر انعقاد المؤتمر</h3>
        <p>قاعة كلية اللغة العربية و اونلاين</p>
      </div>
      <div className="conference-coordinator">
        <h3>منسق المؤتمر</h3>
        <p>أ.د/ ...</p>
      </div>
    </div>
  );
};

export default ResearchGuidelines;
