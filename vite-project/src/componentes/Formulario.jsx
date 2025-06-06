function Formulario() {
  return (
    <section>
      <div className="flex mt-20 gap-10 justify-evenly">
        <div className="text-center">
          <h1 className="text-[1em] w-[250px] text-wrap mt-32 mb-5">
            FICOU COM DÚVIDA? NOS MANDE UMA MENSAGEM!
          </h1>
          <p className="w-[250px]">
            Caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem
            e entraremos em contato em menos de 24h.
          </p>
        </div>

        <form className="border border-1 border-gray-800 bg-orange-50 rounded-xl p-5 mt-10">
          <div className="flex flex-col gap-2">
            <input
              className="p-2 rounded-sm"
              type="text"
              placeholder="Nome completo: *"
              required // para campo obrigatorio
            />
            <input
              className="p-2 rounded-sm"
              type="email"
              placeholder="Email: *"
              required
            />
            <input
              className="p-2 rounded-sm"
              type="tel"
              placeholder="Telefone: *"
              required
            />
            <textarea
              className="p-2 rounded-sm"
              name="msg"
              cols="30"
              rows="5"
              placeholder="Mensagem: *"
            ></textarea>
          </div>

          <div>
            <p className="my-4">* campos obrigatórios</p>
          </div>
          <input
            className="cursor-pointer px-5 py-1 mt-3 rounded-xl bg-green-500"
            type="button"
            value="Enviar"
          />
        </form>
      </div>
    </section>
  );
}

export default Formulario;
