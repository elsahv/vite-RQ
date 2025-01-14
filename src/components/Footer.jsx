const today = new Date();

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="flex justify-center items-center gap-x-4 pt-1">
        <p className="text-black font-medium">
          Copyright &copy; {today.getFullYear()}
        </p>
        <p class="hover:underline">
          <a href="https://laughingcoyote.dev">
            designed by Laughing Coyote Dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
