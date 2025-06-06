function Formulario() {
  return (
    <section>
      <div>
        <h1 className="size-">Titulo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          illo fugit iusto commodi, soluta veniam eligendi ducimus delectus,
          dolor enim animi unde vero ut, neque id repellendus error? Soluta,
          provident!
        </p>
      </div>
      <div>
        <div>
          <h1>Formulário</h1>
          <input type="text" value="name" placeholder="Nome completo: *" />
          <input type="email" value="email" placeholder="Email: *" />
          <input type="number" valur="number" placeholder="Telefone: *" />
          <input type="text" value="test" placeholder="Mensagem: *" />
        </div>
        <div>
          <p>* campos obrigatórios</p>
        </div>
        <input type="button" value="Enviar" />
      </div>
    </section>
  );
}

export default Formulario;
