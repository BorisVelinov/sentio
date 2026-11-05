"use client";

import { Minus, Plus, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useCart } from "./CartContext";
import { useLanguage } from "./LanguageContext";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();
  const { t } = useLanguage();
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [isOpen, closeCart]);

  return (
    <>
      <div
        aria-hidden
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t("Your cart")}
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-[61] flex w-full max-w-md flex-col bg-graphite text-paper transition-transform duration-500 ease-[var(--ease-terrain)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-14 shrink-0 items-center justify-between px-5">
          <h2 className="text-lg tracking-tight">
            {t("Your cart")} ({cartCount})
          </h2>
          <button
            ref={closeButton}
            type="button"
            onClick={closeCart}
            aria-label={t("Close cart")}
            className="-mr-2 grid size-11 place-items-center"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {cart.length === 0 ? (
            <div className="rule pt-6">
              <p className="statement">{t("Your cart is empty.")}</p>
              <p className="body-copy mt-2 text-stone">{t("Choose your terrain and it will wait for you here.")}</p>
            </div>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="rule grid grid-cols-[6rem_1fr] gap-4 py-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" className="w-24 self-center" />
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="tracking-tight">{item.name}</p>
                        <p className="hud-label mt-0.5 text-stone">{t(item.edition)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`${t("Remove")} ${item.name}`}
                        className="-mr-2 -mt-2 grid size-9 shrink-0 place-items-center text-stone"
                      >
                        <X size={15} strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="-ml-2 flex items-center">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={t("One fewer")}
                          className="grid size-9 place-items-center"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="w-6 text-center text-[0.9375rem]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={t("One more")}
                          className="grid size-9 place-items-center"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="tracking-tight">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="rule mx-5 shrink-0 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
            <div className="flex items-baseline justify-between">
              <span className="body-copy">{t("Total")}</span>
              <span className="text-2xl tracking-tight">${cartTotal}</span>
            </div>
            <a href="#updates" onClick={closeCart} className="btn mt-4 w-full bg-amber !text-[#0E0F11]">
              {t("Reserve my pre-order")}
            </a>
            <p className="hud-label mt-3 text-center text-stone">{t("Free shipping worldwide · 30-day returns")}</p>
          </div>
        )}
      </aside>
    </>
  );
}
