import { useForm } from "react-hook-form";
import validator from "validator";

import Form, { P } from "../styles/style";

function Formulario() {
  const {
    register, //register é uma biblioteca, registra/valida os inputs
    handleSubmit, //handleSubmit é uma função para ser executada quando um formulário é enviado
    formState: { errors },
    //watch, //funcionalidade que permite monitorar as mudanças em um ou mais campos de um formulário, exemplo validação de senha
  } = useForm({
    mode: "onSubmit", //a validação aconteça apenas quando o usuário clicar em Enviar
  });

  const onSubmit = () => {
    alert("Formulário enviado com sucesso!");
    // alert(JSON.stringify(data)); // Exibe os dados do formulário no console
  };

  // const watchPassword = watch("password");

  return (
    <section>
      <div className="block md:flex lg:gap-8 md:justify-evenly">
        <div className="block text-center  md:mr-7 lg:mt-8">
          <h1 className="text-[1.2em] mb-5 font-bold md:text-left md:mt-32 md:ml-2 ">
            FICOU COM DÚVIDA? <br />
            NOS MANDE UMA MENSAGEM!
          </h1>
          <p className="my-5 md:w-[300px]">
            Caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem
            e entraremos em contato assim que possível.
          </p>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
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
            {errors?.name?.type === "required" && <P>Nome é Obrigatório.</P>}

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
            {errors?.email?.type === "required" && <P>Email é Obrigatório.</P>}
            {errors?.email?.type === "validate" && <P>Email é inválido.</P>}

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
            {errors?.tel?.type === "required" && <P>Telefone é Obrigatório.</P>}

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
              <P>
                A senha deve contem no minimo 7 caracteres.
              </P>
            )}
            {errors?.password?.type === "required" && (
              <P>
                Senha é Obrigatório.
              </P>
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
              <P>
                {errors.passwordConfirmation.type === "required"
                  ? "Senha é obrigatória."
                  : errors.passwordConfirmation.message}
              </P>
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
            {errors?.msg?.type === "required" && <P>Mensagem é Obrigatório.</P>}

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
                <P>
                  Voce precisa concordar com os termos de privacidade.
                </P>
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
        </Form>
      </div>
    </section>
  );
}

export default Formulario;
