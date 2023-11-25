import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThiagoZika';
  categoriaSelecionada: string = '';
  categorias: string[] = ['Ação', 'Romance', 'Comédia', 'Drama', 'Ficção Científica'];

  listaDeFilmes = [
    {categoria: 'Ação', titulo: 'Rambo',urlImagem:''},
    {categoria: 'Romance', titulo: 'Titanic',urlImagem:''},
    {categoria: 'Ação', titulo: 'Matrix', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ação', titulo: 'Duro de Matar', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ação', titulo: 'Vingadores: Ultimato', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ação', titulo: 'Mad Max: Estrada da Fúria', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ação', titulo: 'Velozes e Furiosos', urlImagem: 'URL_DA_IMAGEM'},

    {categoria: 'Romance', titulo: 'Orgulho e Preconceito', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Romance', titulo: 'A Culpa é das Estrelas', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Romance', titulo: 'Cidade dos Anjos', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Romance', titulo: 'Diário de uma Paixão', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Romance', titulo: 'La La Land', urlImagem: 'URL_DA_IMAGEM'},

    {categoria: 'Comédia', titulo: 'Se Beber, Não Case', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Comédia', titulo: 'Superbad', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Comédia', titulo: 'Esqueceram de Mim', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Comédia', titulo: 'As Branquelas', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Comédia', titulo: 'Ace Ventura: Pet Detective', urlImagem: 'URL_DA_IMAGEM'},

    {categoria: 'Drama', titulo: 'O Resgate do Soldado Ryan', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Drama', titulo: 'Clube da Luta', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Drama', titulo: 'Forrest Gump', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Drama', titulo: 'A Lista de Schindler', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Drama', titulo: 'O Pianista', urlImagem: 'URL_DA_IMAGEM'},


    {categoria: 'Ficção Científica', titulo: 'Blade Runner', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ficção Científica', titulo: 'Interstellar', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ficção Científica', titulo: 'O Quinto Elemento', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ficção Científica', titulo: 'De Volta para o Futuro', urlImagem: 'URL_DA_IMAGEM'},
    {categoria: 'Ficção Científica', titulo: 'Matrix Reloaded', urlImagem: 'URL_DA_IMAGEM'}

  ];

  get filmesFiltrados() {
    return this.listaDeFilmes.filter(filme => filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase());
  }

  atualizarCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
  }
}
