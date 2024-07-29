const Button = ({ btnTxt }) => {
  return (
    <div>
      <button class="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
        {btnTxt}
      </button>
    </div>
  );
};

export default Button;
