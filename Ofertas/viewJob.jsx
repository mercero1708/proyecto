import React, { Component } from "react";
import NoticiasService from "../service/NoticiasService";
import { Link } from "react-router-dom";
import NotiForm from "./NotiForm";
import '../styles/noticias.css';

export default class viewJob extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveNoticias = this.retrieveNoticias.bind(this);
   
    this.setActiveNoticia = this.setActiveNoticia.bind(this);
   
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      noticias: [],
      currentNoticia: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveNoticias();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveNoticias() {
    NoticiasService.getAll()
      .then(response => {
        this.setState({
          noticias: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

 
  setActiveNoticia(noticia, index) {
    this.setState({
      currentNoticia: noticia,
      currentIndex: index
    });
  }

 

  searchTitle() {
    this.setState({
      currentNoticia: null,
      currentIndex: -1
    });

    NoticiasService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          noticias: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, noticias, currentNoticia, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>

       
        <div className="col-md-6">
          <h4>Detalle de la noticia</h4>

          <ul className="list-group">
            {noticias &&
              noticias.map((noticia, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveNoticia(noticia, index)}
                  key={index}
                >
                  {noticia.title}
                </li>
              ))}
          </ul>

        
        </div>
        <div className="col-md-6">
          {currentNoticia ? (
            <div>
              <h4>Noticias</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                <h3>    {currentNoticia.title}</h3>
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
               <h3> {currentNoticia.description}</h3>
              </div>
             

            <div className="noticias">  <br />
                <NotiForm /></div>
         
            </div>
            
          ) : (
            <div>
           
              <br />
              <p>Haz click para ver el detalle de la noticia...</p>
            
            </div>
            
          )}
        </div>
        
      </div>
      
    );
  }
  
}
