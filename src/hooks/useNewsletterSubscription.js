import { useState } from "react";
import { isValidEmail } from "../utils/validateEmail.js";

const STORAGE_KEY = "subscribedEmail";

function readStoredEmail() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved && isValidEmail(saved) ? saved : "";
}

export function useNewsletterSubscription() {
  const [email, setEmail] = useState(readStoredEmail);
  const [status, setStatus] = useState(
    readStoredEmail() ? "subscribed" : "idle",
  );

  const subscribe = () => {
    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setStatus("invalid");
      return;
    }
    localStorage.setItem(STORAGE_KEY, trimmed);
    setEmail(trimmed);
    setStatus("subscribed");
  };

  const unsubscribe = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEmail("");
    setStatus("unsubscribed");
  };

  return { email, setEmail, status, subscribe, unsubscribe };
}
