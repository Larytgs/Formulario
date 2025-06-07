function Foorm(props) {
  return (
    <form
      onSubmit={props.onSubmit} // necessário para funcionar corretamente o envio do formulario, pois ele foi customizado
      className="border-2 border-gray-800 bg-[#bcc7f0] lg:mt-4 rounded-xl p-4 m-0 lg:mr-5"
    >
      {props.children}
    </form>
  );
}
function P(props) {
  return (
    <p className="text-red-500 -mt-4 -mb-3 text-[0.7em] text-left">
      {props.children}
    </p>
  );
}

export default Foorm;
export { P };
