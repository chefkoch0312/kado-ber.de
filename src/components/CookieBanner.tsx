interface CookieBannerProps {
  isVisible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({
  isVisible,
  onAccept,
  onDecline,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-t border-purple-500/20 p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-300">
          Um dir ein optimales Erlebnis zu bieten, verwenden wir Cookies. Durch
          die Nutzung stimmst du dem zu.
        </p>
        <div className="flex gap-2">
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
          >
            Akzeptieren
          </button>
          <button
            onClick={onDecline}
            className="px-4 py-2 border border-slate-600 hover:border-slate-500 rounded-lg text-sm font-medium transition-colors"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};
export default CookieBanner;
