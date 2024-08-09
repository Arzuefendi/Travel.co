import React from "react";
import Card from "./Card";
const Journey = () => {
  return (
    <div>
      <section id="1">
        <div className="header text-center p-5">
          <h1 className="mt-5"> Start Your Journey</h1>
          <p>The most searched countries in March</p>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 m-5 mt-0">
            <Card img={'https://images01.nicepage.com/28/58/2858f3748a025304669419b5dbd89dd3.jpeg'}
            name = {" Santorini, Greece"}/>
             <Card img={'https://images01.nicepage.com/9e/af/9eaf6a4d06c28cd9596d0b792f4780b5.jpeg'}
            name = {"  Vernazza, Italy"}/>
             <Card img={'https://images01.nicepage.com/2f/c9/2fc963db2b8f554519a2b21cc60d75a3.jpeg'}
            name = {"   San Francisco"}/>
             <Card img={'https://images01.nicepage.com/ef/2a/ef2a13068362a84ceee3efa5eaab583b.jpeg'}
            name = {"   Navagio, Greece"}/>
             <Card img={'https://images01.nicepage.com/29/8d/298d0a5cd8893ec3a947289a7347c9f0.jpeg'}
            name = {"   Ao Nang, Thailand"}/>
             <Card img={'https://images01.nicepage.com/6e/8c/6e8c81f6a006352a225d163d742b148c.jpeg'}
            name = {"  Phi Phi Islands, Thailand"}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
