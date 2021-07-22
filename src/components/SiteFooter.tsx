interface OwnProps {}

export const SiteFooter = ({}: OwnProps) => {
  return (
    <footer className="bg-gray-100 shadow-lg w-screen">
      <div className="max-w-screen-xl m-auto px-4 py-2 flex justify-end">
        <div className="text-primary-600 text-xs font-light">
          © 2021 jcmtallon
        </div>
      </div>
    </footer>
  );
};
