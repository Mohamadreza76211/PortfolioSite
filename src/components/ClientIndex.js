import { useEffect, useState } from "react";

const ClientIndex = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  // فقط در مرورگر اجرا بشه
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isInStandaloneMode =
    typeof window !== "undefined" &&
    window.matchMedia("(display-mode: standalone)").matches;

  // چک کردن نصب قبلی
  useEffect(() => {
    if (typeof window !== "undefined") {
      const installed =
        localStorage.getItem("pwaInstalled") === "true" || isInStandaloneMode;
      setIsInstalled(installed);
    }
  }, [isInStandaloneMode]);

  // گرفتن رویداد beforeinstallprompt
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      return () => {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt
        );
      };
    }
  }, []);

  // نمایش popup
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isPopupClosedInSession = sessionStorage.getItem("pwaPopupClosed");
      if (
        !isInstalled &&
        !isInStandaloneMode &&
        (isIOS || deferredPrompt) &&
        !isPopupClosedInSession
      ) {
        setShowInstallPopup(true);
        setTimeout(() => setIsPopupVisible(true), 100);
      }
    }
  }, [deferredPrompt, isInstalled, isIOS, isInStandaloneMode]);

  // نصب PWA
  const installPWA = () => {
    if (deferredPrompt && !isInstalled && !isIOS && !isInStandaloneMode) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          setShowInstallPopup(false);
          localStorage.setItem("pwaInstalled", "true");
        } else {
          setShowInstallPopup(false);
        }
        setDeferredPrompt(null);
      });
    }
  };

  // بستن popup
  const closePopup = () => {
    setIsPopupVisible(false);
    setTimeout(() => {
      setShowInstallPopup(false);
      sessionStorage.setItem("pwaPopupClosed", "true");
    }, 300);
  };

  // رویداد appinstalled
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleAppInstalled = () => {
        setIsInstalled(true);
        localStorage.setItem("pwaInstalled", "true");
      };
      window.addEventListener("appinstalled", handleAppInstalled);
      return () =>
        window.removeEventListener("appinstalled", handleAppInstalled);
    }
  }, []);

  return <></>;
};

export default ClientIndex;
