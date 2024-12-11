import React from 'react';
import './PeopleList.css';

const people = [
  {
    name: "ا.د/سلامة جمعة داوود",
    title: "رئيس جامعة الأزهر",
    imageUrl: "salama.jpg", // Add image paths here
  },
  {
    name: "ا.د/محمد عبد المالك",
    title: "ناءب رءيس الجامعة لشؤن البنات الوجة القبلى",
    imageUrl: "mohamed.jpg",
  },
  {
    name: "ا.د/خلود حسام حسانين",
    title: "عميدة كلية التجارة بنات باسيوط",
    imageUrl: "kholod.jpg",
  },
  {
    name: " د/ علياء عبد اللطيف",
    title: "وكيل الكلية لشؤن الدراسات العليا",
    imageUrl: "alyaa.jpg",
  }
];

const PeopleList = () => {
  return (
    <div className="people-container">
      <h3 className="people-title">تحت رعاية</h3>
      <div className="people-grid">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <img src={person.imageUrl} alt={person.name} className="person-image" />
            <div className="person-info">
              <h4 className="person-name">{person.name}</h4>
              <p className="person-title">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
