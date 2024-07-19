"# test-course"

Métodos comuns do React Testing Library:

render: Renderiza um componente React para o DOM em um container que é anexado ao documento.

screen: Uma forma conveniente de acessar os métodos de consulta (query) após renderizar um componente.

cleanup: Remove o conteúdo do DOM entre os testes para evitar vazamentos de memória e interferência de testes anteriores.

Métodos de Consulta (Query) do React Testing Library
getBy\*
getByRole: Obtém um elemento pelo seu papel (role) no sistema de acessibilidade.

Exemplo: getByRole('button') (Obtém um elemento do tipo botão).
getByLabelText: Obtém um elemento associado a um rótulo (label).

Exemplo: getByLabelText('Username') (Obtém um campo de entrada rotulado como 'Username').
getByPlaceholderText: Obtém um elemento pelo texto do placeholder.

Exemplo: getByPlaceholderText('Enter your name') (Obtém um campo de entrada com placeholder 'Enter your name').
getByText: Obtém um elemento pelo seu conteúdo de texto.

Exemplo: getByText('Submit') (Obtém um botão ou outro elemento com o texto 'Submit').
getByAltText: Obtém uma imagem pelo texto alternativo (alt).

Exemplo: getByAltText('Logo') (Obtém uma imagem com alt 'Logo').
getByTitle: Obtém um elemento pelo seu atributo title.

Exemplo: getByTitle('Close') (Obtém um elemento com title 'Close').
getByDisplayValue: Obtém um elemento pelo valor exibido (útil para campos de formulário).

Exemplo: getByDisplayValue('John Doe') (Obtém um campo de entrada com valor 'John Doe').
getByTestId: Obtém um elemento pelo atributo data-testid.

Exemplo: getByTestId('submit-button') (Obtém um elemento com data-testid='submit-button').
findBy\*
findByRole: Semelhante ao getByRole, mas retorna uma Promise que resolve quando o elemento é encontrado.

Exemplo: findByRole('button').
findByLabelText: Semelhante ao getByLabelText, mas retorna uma Promise.

Exemplo: findByLabelText('Username').
findByPlaceholderText: Semelhante ao getByPlaceholderText, mas retorna uma Promise.

Exemplo: findByPlaceholderText('Enter your name').
findByText: Semelhante ao getByText, mas retorna uma Promise.

Exemplo: findByText('Submit').
findByAltText: Semelhante ao getByAltText, mas retorna uma Promise.

Exemplo: findByAltText('Logo').
findByTitle: Semelhante ao getByTitle, mas retorna uma Promise.

Exemplo: findByTitle('Close').
findByDisplayValue: Semelhante ao getByDisplayValue, mas retorna uma Promise.

Exemplo: findByDisplayValue('John Doe').
findByTestId: Semelhante ao getByTestId, mas retorna uma Promise.

Exemplo: findByTestId('submit-button').
queryBy\*
queryByRole: Semelhante ao getByRole, mas retorna null se o elemento não for encontrado ao invés de lançar um erro.

Exemplo: queryByRole('button').
queryByLabelText: Semelhante ao getByLabelText, mas retorna null se o elemento não for encontrado.

Exemplo: queryByLabelText('Username').
queryByPlaceholderText: Semelhante ao getByPlaceholderText, mas retorna null se o elemento não for encontrado.

Exemplo: queryByPlaceholderText('Enter your name').
queryByText: Semelhante ao getByText, mas retorna null se o elemento não for encontrado.

Exemplo: queryByText('Submit').
queryByAltText: Semelhante ao getByAltText, mas retorna null se o elemento não for encontrado.

Exemplo: queryByAltText('Logo').
queryByTitle: Semelhante ao getByTitle, mas retorna null se o elemento não for encontrado.

Exemplo: queryByTitle('Close').
queryByDisplayValue: Semelhante ao getByDisplayValue, mas retorna null se o elemento não for encontrado.

Exemplo: queryByDisplayValue('John Doe').
queryByTestId: Semelhante ao getByTestId, mas retorna null se o elemento não for encontrado.

Exemplo: queryByTestId('submit-button').
getAllBy\*
getAllByRole: Semelhante ao getByRole, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByRole('button').
getAllByLabelText: Semelhante ao getByLabelText, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByLabelText('Username').
getAllByPlaceholderText: Semelhante ao getByPlaceholderText, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByPlaceholderText('Enter your name').
getAllByText: Semelhante ao getByText, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByText('Submit').
getAllByAltText: Semelhante ao getByAltText, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByAltText('Logo').
getAllByTitle: Semelhante ao getByTitle, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByTitle('Close').
getAllByDisplayValue: Semelhante ao getByDisplayValue, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByDisplayValue('John Doe').
getAllByTestId: Semelhante ao getByTestId, mas retorna uma array de todos os elementos correspondentes.

Exemplo: getAllByTestId('submit-button').
findAllBy\*
findAllByRole: Semelhante ao getAllByRole, mas retorna uma Promise que resolve quando todos os elementos correspondentes são encontrados.

Exemplo: findAllByRole('button').
findAllByLabelText: Semelhante ao getAllByLabelText, mas retorna uma Promise.

Exemplo: findAllByLabelText('Username').
findAllByPlaceholderText: Semelhante ao getAllByPlaceholderText, mas retorna uma Promise.

Exemplo: findAllByPlaceholderText('Enter your name').
findAllByText: Semelhante ao getAllByText, mas retorna uma Promise.

Exemplo: findAllByText('Submit').
findAllByAltText: Semelhante ao getAllByAltText, mas retorna uma Promise.

Exemplo: findAllByAltText('Logo').
findAllByTitle: Semelhante ao getAllByTitle, mas retorna uma Promise.

Exemplo: findAllByTitle('Close').
findAllByDisplayValue: Semelhante ao getAllByDisplayValue, mas retorna uma Promise.

Exemplo: findAllByDisplayValue('John Doe').
findAllByTestId: Semelhante ao getAllByTestId, mas retorna uma Promise.

Exemplo: findAllByTestId('submit-button').
queryAllBy\*
queryAllByRole: Semelhante ao getAllByRole, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByRole('button').
queryAllByLabelText: Semelhante ao getAllByLabelText, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByLabelText('Username').
queryAllByPlaceholderText: Semelhante ao getAllByPlaceholderText, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByPlaceholderText('Enter your name').
queryAllByText: Semelhante ao getAllByText, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByText('Submit').
queryAllByAltText: Semelhante ao getAllByAltText, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByAltText('Logo').
queryAllByTitle: Semelhante ao getAllByTitle, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByTitle('Close').
queryAllByDisplayValue: Semelhante ao getAllByDisplayValue, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByDisplayValue('John Doe').
queryAllByTestId: Semelhante ao getAllByTestId, mas retorna uma array vazia se nenhum elemento for encontrado.

Exemplo: queryAllByTestId('submit-button').
