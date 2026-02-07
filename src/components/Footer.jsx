const Footer = () => {
  return (
    <footer className="bg-fuchsia-100 text-gray-300">
      {/* Bottom */}
      <div className="border-t border-gray-400 text-center text-black py-4 text-sm">
        © {new Date().getFullYear()} Renta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;