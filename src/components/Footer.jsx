const today = new Date();

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="flex justify-center">
        <span className="text-black pt-3">
          Copyright &copy; {today.getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
