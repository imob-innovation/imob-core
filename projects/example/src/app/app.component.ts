import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example';

  dataTitle = ['id', 'Proprietário', 'Endereço', 'Valor', 'Tipo', 'Ações'];

  dataSource = [
    {
      id: '1',
      owner: 'Danilo Ferreira Alves',
      address: 'Avenida Presidente Costa e Silva, 779, Vila Atlântica',
      value: '1000',
      type: 'Venda',
    },
    {
      id: '2',
      owner: 'Danilo Ferreira Alves',
      address: 'Avenida Presidente Costa e Silva, 779, Vila Atlântica',
      value: '1000',
      type: 'Venda',
    },
    {
      id: '3',
      owner: 'Danilo Ferreira Alves',
      address: 'Avenida Presidente Costa e Silva, 779, Vila Atlântica',
      value: '1000',
      type: 'Venda',
    },
    {
      id: '4',
      owner: 'Danilo Ferreira Alves',
      address: 'Avenida Presidente Costa e Silva, 779, Vila Atlântica',
      value: '1000',
      type: 'Venda',
    },
    {
      id: '5',
      owner: 'Danilo Ferreira Alves',
      address: 'Avenida Presidente Costa e Silva, 779, Vila Atlântica',
      value: '1000',
      type: 'Venda',
    },
    {
      id: '6',
      owner: 'Danilo Ferreira Alves',
      address: 'Avenida Presidente Costa e Silva, 779, Vila Atlântica',
      value: '1000',
      type: 'Venda',
    },
  ];

  deleteItem = function () {
    console.log('Deletado com sucesso!');
  };

  editItem = function () {
    console.log('Editar ');
  };
}
