import React, { Component } from 'react';

class Box extends Component {
  render () {
    return (
      <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  render () {
    return (
      <section>
        <h2>{this.props.puesto}</h2>
        <p><em>Bienvenido {this.props.author}</em></p>
        <Box>dd{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
}

class Children extends Component {
  render () {
    return (
      <div className="App">
        <h4>Oportunidades Laborale</h4>
        <Article
          Departamento='Desarrollo'
          date={new Date().toLocaleDateString()}
          puesto='Programador'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <Article
          Departamento='Tecnico'
          date={new Date().toLocaleTimeString()}
          puesto='Tecnico'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <Article
          author='Miguel'
          date={new Date().toLocaleDateString()}
          puesto='Team Leader'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
      </div>
    );
  }
}

export default Children;
