import { useEffect, useState } from "react";

const PWARegistration = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }

    // Handle PWA install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    });

    // Handle successful installation
    window.addEventListener("appinstalled", () => {
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      console.log("PWA was installed");
    });
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      }
    }
  };

  if (!showInstallPrompt) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        className="pwa-install-prompt"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "92%",
          height: "6rem",
          position: "fixed",
          bottom: "10px",
          right: "20px",
          background:
            "linear-gradient(135deg, rgba(0,123,255,0.9), rgba(0,200,255,0.9))",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 1000,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <strong>🚀 Install Portfolio App</strong>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setShowInstallPrompt(false)}
            style={{
              padding: "8px 16px",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer",
              borderBottom: "unset",
            }}
          >
            Not now
          </button>
          <button
            onClick={handleInstallClick}
            style={{
              padding: "8px 16px",
              backgroundColor: "white",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWARegistration;
