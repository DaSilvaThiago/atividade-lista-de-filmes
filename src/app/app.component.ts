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
    {categoria: 'Ação', titulo: 'Rambo'},
    {categoria: 'Romance', titulo: 'Titanic'},
    {categoria: 'Ação', titulo: 'Matrix'},
    {categoria: 'Ação', titulo: 'Duro de Matar'},
    {categoria: 'Ação', titulo: 'Vingadores: Ultimato'},
    {categoria: 'Ação', titulo: 'Mad Max: Estrada da Fúria'},
    {categoria: 'Ação', titulo: 'Velozes e Furiosos'},

    {categoria: 'Romance', titulo: 'Orgulho e Preconceito'},
    {categoria: 'Romance', titulo: 'A Culpa é das Estrelas'},
    {categoria: 'Romance', titulo: 'Cidade dos Anjos'},
    {categoria: 'Romance', titulo: 'Diário de uma Paixão'},
    {categoria: 'Romance', titulo: 'La La Land'},

    {categoria: 'Comédia', titulo: 'Se Beber, Não Case'},
    {categoria: 'Comédia', titulo: 'Superbad'},
    {categoria: 'Comédia', titulo: 'Esqueceram de Mim'},
    {categoria: 'Comédia', titulo: 'As Branquelas'},
    {categoria: 'Comédia', titulo: 'Ace Ventura: Pet Detective'},

    {categoria: 'Drama', titulo: 'O Resgate do Soldado Ryan'},
    {categoria: 'Drama', titulo: 'Clube da Luta'},
    {categoria: 'Drama', titulo: 'Forrest Gump'},
    {categoria: 'Drama', titulo: 'A Lista de Schindler'},
    {categoria: 'Drama', titulo: 'O Pianista'},


    {categoria: 'Ficção Científica', titulo: 'Blade Runner'},
    {categoria: 'Ficção Científica', titulo: 'Interstellar'},
    {categoria: 'Ficção Científica', titulo: 'O Quinto Elemento'},
    {categoria: 'Ficção Científica', titulo: 'De Volta para o Futuro'},
    {categoria: 'Ficção Científica', titulo: 'Matrix Reloaded'}

  ];

  get filmesFiltrados() {
    return this.listaDeFilmes.filter(filme => filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase());
  }

  atualizarCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
  }
}
