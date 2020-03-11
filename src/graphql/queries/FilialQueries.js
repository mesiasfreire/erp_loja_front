import gql from 'graphql-tag';

export const getFilialDetails = gql`
  query useFilial {
    useFilial {
      recnum
      filial
      nomeFantasia
      razaoSocial
      endereco
      bairro
      estado
      cep
      cnpj
      ddd
      telefone
      inscricao
      inscricaoMunicipal
      cadastroCliente
      codigoEmpresa
   }
  }
  `;