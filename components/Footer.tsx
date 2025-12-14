export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm">
            &copy; {currentYear} Capstone Project
          </p>
          <p className="text-xs mt-2 text-slate-400">
            
          </p>
        </div>
      </div>
    </footer>
  );
}
