import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.textarea = "";
    this.categoria = "Sem Categoria";
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount(){    
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }
  
  _handleMudancaTitulo(evento){

    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTextArea(evento) {
    evento.stopPropagation();
    this.textarea = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.textarea, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._criarNota.bind(this)}
      >
        <select className="form-cadastro_input" name="categoria"
          onChange={this._handleMudancaCategoria.bind(this)}>
            <option value="Sem Categoria">Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index} value={categoria}>{categoria}</option>
          })}
        </select>

        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTextArea.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
