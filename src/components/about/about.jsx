import React from "react";
import "./about.css";

const ConferenceIntro = () => {
  return (
    <div className="conference-intro">
      <h1 className="conference-title">
        المؤتمر العلمي الدولي الأول لكلية التجارة جامعة الأزهر بنات بأسيوط
      </h1>
      <h2 className="conference-subtitle">
        بعنوان "مثلث نيكسز و التحديات المعاصره وانعكاساتها على مؤسسات الاعمال
        لتحقيق التنمية المستدامة"
      </h2>
      <p className="conference-text">
        يرحب المؤتمر بدعوة السادة الأساتذة والباحثين والعاملين في مجالات
        التجارة، البيئة، الزراعة، الصناعة، المياه، الطاقة، البحث العلمي،
        المحاسبة، الاقتصاد، إدارة الأعمال، التأمين، الإحصاء، والهيئات الحكومية
        والخاصة.
      </p>
      <p className="conference-text">
        سيُعقد المؤتمر يوم السبت الموافق <strong>10 مايو 2025</strong> بمقر كلية
        التجارة بنات جامعة الأزهر بأسيوط - جمهورية مصر العربية. يشمل المؤتمر
        أوراق بحثية، ندوات، وأوراق عمل متخصصة لتحليل وربط أبعاد مثلث Nexus
        (الماء – الطاقة – الغذاء) بالتحديات المعاصرة وانعكاساتها على مؤسسات
        الأعمال لتحقيق التنمية المستدامة.
      </p>
      <h3 className="conference-highlight">فرصة مميزة</h3>
      <p className="conference-text">
        تعد هذه فرصة استثنائية للوصول إلى أكبر تجمع للمشاركين في مجالات الطاقة،
        الماء، الغذاء، ومؤسسات الأعمال، بما يتماشى مع رؤية مصر 2030.
      </p>
      <h3 className="conference-vision">رؤية مصر 2030</h3>
      <p className="conference-text">
        رؤية مصر 2030 هي أجندة وطنية أطلقت في فبراير 2016 تعكس الخطة
        الاستراتيجية طويلة المدى للدولة لتحقيق مبادئ وأهداف التنمية المستدامة
        في المجالات المختلفة.
      </p>
      <p className="conference-text">
        تم تحديث الرؤية في 2018 بمشاركة كافة أصحاب المصلحة، وتهدف إلى تناول كافة
        القضايا من منظور الأبعاد الثلاثة للتنمية المستدامة: البيئي، الاقتصادي،
        والاجتماعي.
      </p>
      <h3 className="conference-initiative">مبادرات رئاسية</h3>
      <p className="conference-text">
        يأتي هذا الحدث على ضوء المبادرات الرئاسية ورؤية مصر 2023، حيث تساهم
        الجامعة في تسخير العلوم لخدمة المجتمع من خلال تقديم موضوعات بحثية قادرة
        على تذليل التحديات لتحقيق التنمية المستدامة على كافة الأصعدة.
      </p>
    </div>
  );
};

export default ConferenceIntro;
