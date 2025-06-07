import { useForm } from "react-hook-form";
import validator from "validator";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    //watch, //funcionalidade que permite monitorar as mudanças em um ou mais campos de um formulário, exemplo validação de senha
  } = useForm({
    mode: "onSubmit", //a validação aconteça apenas quando o usuário clicar em Enviar
  });
  //register é uma biblioteca, registra/valida os inputs
  //handleSubmit é uma função para ser executada quando um formulário é enviado
  //formState: {errors}

  const onSubmit = (data) => {
    alert(JSON.stringify(data)); // Exibe os dados do formulário no console
  };

  // const watchPassword = watch("password");

  return (
    <section>
      <div
        className="block md:flex lg:gap-8 md:justify-evenly"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="block text-center -ml-7 lg:mt-8">
          <h1 className="text-[1em] mb-5 font-bold md:text-[1.2em] md:text-left md:mt-32 md:ml-8 ">
            FICOU COM DÚVIDA? <br />
            NOS MANDE UMA MENSAGEM!
          </h1>
          <p className="m-5 md:w-[300px]">
            Caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem
            e entraremos em contato assim que possível.
          </p>
        </div>

        <form className="border-2 border-gray-800 bg-[#bcc7f0] lg:mt-4 rounded-xl p-4 m-0 sm:mr-5">
          <div className="flex flex-col gap-4">
            {/* nome */}
            <input
              className={`p-1 border-2 rounded-sm ${
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
              className={`p-1 border-2 rounded-sm ${
                errors?.email
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              type="email"
              placeholder="*Email:"
              {...register("email", {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Email é Obrigatório.
              </p>
            )}
            {errors?.email?.type === "validate" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Email é inválido.
              </p>
            )}

            {/* telefone */}
            <input
              className={`p-1 border-2 rounded-sm ${
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
            {/* <input
              className={`p-1 border-2 rounded-sm ${
                errors?.password
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              type="password"
              autoComplete="new-password"
              placeholder="*Senha :"
              {...register("password", { required: true, minLength: 7 })}
            />
            {errors?.password?.type === "minLength" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                A senha deve contem no minimo 7 caracteres.
              </p>
            )}
            {errors?.password?.type === "required" && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                Senha é Obrigatório.
              </p>
            )} */}

            {/* Validação de senha */}
            {/* <input
              className={`p-1 border-2 rounded-sm ${
                errors?.passwordConfirmation
                  ? "border-red-500 focus:border-red-500 focus:outline-none"
                  : "border-gray-500"
              }`}
              type="password"
              autoComplete="new-password"
              placeholder="*Digite sua senha novamente:"
              {...register("passwordConfirmation", {
                required: true,
                minLength: 7,
                validate: (value) =>
                  value === watchPassword || "As senhas não conferem.",
              })}
            />

            {errors?.passwordConfirmation && (
              <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                {errors.passwordConfirmation.type === "required"
                  ? "Senha é obrigatória."
                  : errors.passwordConfirmation.message}
              </p>
            )} */}

            {/* profissão */}
            <div className="text-left sm:flex items-center">
              <label>Profissão:</label>
              <select
                {...register("profession", {
                  validate: (value) => {
                    return value !== "0";
                  },
                })}
                className={`ml-2 p-1 border-2 rounded-sm ${
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

              {/* {errors?.profession?.type === "validate" && (
                <p className="text-red-500 flex  ml-2 sm:-mt-1 md:-mt-0 text-[0.7em] text-left">
                  Profissão é Obrigatório.
                </p>
              )} */}
            </div>

            {/* msg */}
            <textarea
              className={`md:w-[400px] lg:w-[500px] p-1 border-2 rounded-sm ${
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

            <div className="text-left mb-4">
              <div className="text-black text-sm">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  {...register("privacyTerms", { required: true })}
                />
                <label
                  className={`ml-2 ${
                    errors?.privacyTerms?.type === "required"
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  {errors?.privacyTerms?.type === "required"
                    ? "Você precisa concordar com os termos."
                    : "Concordo com os termos de privacidade."}
                </label>
              </div>
              {/* {errors?.privacyTerms?.type === "required" && (
                <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
                  Voce precisa concordar com os termos de privacidade.
                </p>
              )} */}
            </div>
          </div>

          <div>
            <p className="mb-5 text-left">* campos obrigatórios</p>
          </div>

          <div className="cursor-pointer px-5 py-1 mt-3 w-24 m-auto rounded-xl bg-blue-600 font-bold">
            {/* <button onClick={() => handleSubmit(onSubmit())}>Enviar</button> */}
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
