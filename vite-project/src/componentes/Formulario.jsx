import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit", //a validação aconteça apenas quando o usuário clicar em Enviar
  });
  //register é uma biblioteca, registra/valida os inputs
  //handleSubmit é uma função para ser executada quando um formulário é enviado
  //formState: {errors}

  const onSubmit = (data) => {
    console.log(data); // Exibe os dados do formulário no console
  };

  // const onError = (errors) => {
  //   console.log("Form errors:", errors);
  // };

  return (
    <section>
      <div
        className="block md:flex  lg:gap-8 justify-evenly"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <div className="flex flex-col gap-5">
            {/* nome */}
            <input
              className={`p-2 border-2 rounded-sm ${
                errors?.name
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              type="text"
              placeholder="*Nome completo:"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Nome é Obrigatório.
              </p>
            )}

            {/* email */}
            <input
              className={`p-2 border-2 rounded-sm ${
                errors?.email
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              type="email"
              placeholder="*Email:"
              {...register("email", { required: true })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Email é Obrigatório.
              </p>
            )}

            {/* telefone */}
            <input
              className={`p-2 border-2 rounded-sm ${
                errors?.tel
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              type="tel"
              placeholder="*Telefone:"
              {...register("tel", { required: true })}
            />
            {errors?.tel?.type === "required" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Telefone é Obrigatório.
              </p>
            )}

            {/* senha */}
            <input
              className={`p-2 border-2 rounded-sm ${
                errors?.tel
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              type="password"
              placeholder="*Senha :"
              {...register("password", { required: true, minLength: 7 })}
            />
            {errors?.tel?.type === "minLength" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                A senha deve contem no minimo 7 caracteres.
              </p>
            )}
            {errors?.tel?.type === "required" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Senha é Obrigatório.
              </p>
            )}

            {/* profissão */}
            <div className="text-left flex items-center">
              <label>Profissão:</label>
              <select
                {...register("profession", {
                  validate: (value) => {
                    return value !== "0";
                  },
                })}
                className={`ml-3 p-2 border-2 rounded-sm ${
                  errors?.profession
                    ? "border-red-500 focus:border-red-500 focus:outline-none"
                    : "border-gray-500"
                }`}
              >
                <option value="0">Selecione sua profissão</option>
                <option value="Desenvolvedor Front-end">
                  Desenvolvedor Front-end
                </option>
                <option value="Desenvolvedor Back-end">
                  Desenvolvedor Back-end
                </option>
                <option value="Desenvolvidor Fullstak">
                  Desenvolvidor Fullstak
                </option>
                <option value="Design">Design</option>
                <option value="others">Outro</option>
              </select>

              {errors?.profession?.type === "validate" && (
                <p className="text-red-500 flex ml-2 mt-4 text-[0.7em] text-left">
                  Proffição é Obrigatório.
                </p>
              )}
            </div>

            {/* msg */}
            <textarea
              className={`md:w-[500px] lg:w-[600px] p-2 border-2 rounded-sm ${
                errors?.msg
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              name="msg"
              // cols="40"
              rows="5"
              placeholder="*Mensagem:"
              {...register("msg", { required: true })}
            ></textarea>
            {errors?.msg?.type === "required" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Mensagem é Obrigatório.
              </p>
            )}

            <div>
              <div className="text-gray-500 text-sm">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  {...register("privacyTerms", { required: true })}
                />
                <label>Concordo com os termos de privacidade.</label>
                {errors?.privacyTerms?.type === "required" && (
                  <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left"></p>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="my-4">* campos obrigatórios</p>
          </div>

          <div className="cursor-pointer px-5 py-1 mt-3 rounded-xl bg-green-500">
            {/* <button onClick={() => handleSubmit(onSubmit())}>Enviar</button> */}
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
