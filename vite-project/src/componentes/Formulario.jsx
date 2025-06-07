import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //register é uma biblioteca, registra/valida os inputs
  //handleSubmit é uma função para ser executada quando um formulário é enviado
  //formState: {errors}

  const onSubmit = (data) => {
    console.log(data); // Exibe os dados do formulário no console
  };

  return (
    <section>
      <div className="block md:flex md:mt-10 lg:mt-20 lg:gap-8 justify-evenly">
        <div className="block text-center -ml-7">
          <h1 className="text-[1em] mb-5 font-bold md:text-[1.2em] md:text-left md:mt-32 md:ml-6 ">
            FICOU COM DÚVIDA? <br />
            NOS MANDE UMA MENSAGEM!
          </h1>
          <p className="m-5 md:w-[300px]">
            Caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem
            e entraremos em contato assim que possível.
          </p>
        </div>

        <form className="border-2 border-gray-800 bg-orange-50 rounded-xl p-5 mr-5">
          <div className="flex flex-col gap-2">
            <input
              className="p-2 border-2 border-gray-500 rounded-sm"
              type="text"
              placeholder="Nome completo: *"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p className="text-red-500 border-2 border-red-500">
                Nome é Obrigatório
              </p>
            )}
            <input
              className="p-2 border-2 border-gray-500 rounded-sm"
              type="email"
              placeholder="Email: *"
              {...register("email", { required: true })}
            />
            <input
              className="p-2 border-2 border-gray-500 rounded-sm"
              type="tel"
              placeholder="Telefone: *"
              {...register("tel", { required: true })}
            />
            <textarea
              className="p-2 border-2 border-gray-500 rounded-sm"
              name="msg"
              cols="40"
              rows="5"
              placeholder="Mensagem: *"
              {...register("msg", { required: true })}
            ></textarea>

            <div>
              <div className="text-gray-500 text-sm">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  {...register("privacyTerms", { required: true })}
                />
                <label>Concordo com os termos de privacidade.</label>
              </div>
            </div>
          </div>

          <div>
            <p className="my-4">* campos obrigatórios</p>
          </div>

          <div className="cursor-pointer px-5 py-1 mt-3 rounded-xl bg-green-500">
            <button onClick={() => handleSubmit(onSubmit())}>Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
