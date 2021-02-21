import { useEffect, useState } from "react";
import { getPartTslaNews } from "../networks/Network";
import Carousel from 'react-bootstrap/Carousel'
import Card from '../components/card';

export default function Sport() {
    
let [sportsNew , setSportNew]=useState([])

useEffect(()=>{


getPartTslaNews().then((data)=>{
setSportNew(data.data.articles)


})

},[])


        
    return (
      <>
        <section className="row">
          <div className="col-lg-2">
            {sportsNew.slice(6, 10).map((headline, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{headline.source.name}</h5>
                    <p className="card-text">{headline.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-7">
            <Carousel>
              {sportsNew.map((itemOfCarousel, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={itemOfCarousel.urlToImage}
                      alt="First slide"
                      style={{ height: "700px" }}
                    />
                    <Carousel.Caption
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.637)",
                        padding: "10px",
                      }}
                    >
                      <h3>{itemOfCarousel.title}</h3>
                      <p>{itemOfCarousel.content}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="col-lg-3">
            {sportsNew.slice(0, 6).map((headline, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{headline.source.name}</h5>
                    <p className="card-text">{headline.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="container-fluid">
          <div className="d-flex flex-wrap flex-row align-items-start">
            {sportsNew != "" ? (
              sportsNew.map((news, index) => {
                return (
                  <div key={index} data-aos="slide-up">
                    <Card articles={news}></Card>
                  </div>
                );
              })
            ) : (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    );   
   }