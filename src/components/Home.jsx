import React from "react";

function Home() {
  return (
    <div className="home">
        <div className="hero">
          <h1 className="hero__title">Adrian Żołnierczyk</h1>
          <p className="hero__caption">Games, HTML, CSS, JavaScript - Only passion</p>
      </div>
      <section className="about">
        <h1 className="about__title">O mnie</h1>
        <p className="about__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img className="about__image" src="/images/profile image.jpg" alt=""/>
        <div className="about__icons">
          <a href="https://www.facebook.com/profile.php?id=100013908152117" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="mailto:adrian.mamyto@gmail.com"><i className="fas fa-envelope" target="_blank" rel="noreferrer"></i></a>
          <a href="https://github.com/Kiczu" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <p className="about__caption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit iste eum dignissimos, in veniam perferendis quas, neque consequatur est perspiciatis reprehenderit doloremque libero minima explicabo porro corporis. Quisquam, sed neque.
        Rem ab deleniti consequatur dicta, assumenda sed dignissimos vitae autem nobis possimus, ut delectus in tempore doloribus minus reiciendis. Mollitia sunt atque maiores sapiente qui vel perspiciatis itaque neque magni.</p>
      </section>
      <section className="categories">
        <div className="categories__games"></div>
        <div className="categories__html"></div>
        <div className="categories__css"></div>
        <div className="categories__js"></div>
      </section>
    </div>
  );
}

export default Home;