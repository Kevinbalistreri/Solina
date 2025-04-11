import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function SolinaApp() {
  const [stage, setStage] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ passions: "", period: "", dates: "", age: "", budget: "" });
  const [packageData, setPackageData] = useState({
    destination: "Tokyo",
    flight: "Volo diretto da Milano - 5 settembre",
    stay: "Capsule hotel tech con domotica avanzata",
    experience: "Tour guidato AI in Akihabara",
    transport: "Transfer privato da/per aeroporto incluso"
  });
  const [editField, setEditField] = useState(null);
  const [paymentData, setPaymentData] = useState({ cardNumber: "", holder: "", expiry: "", cvv: "" });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (stage === "neural") {
      const timer = setTimeout(() => setStage("generated"), 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    setTimeout(() => {
      if (document && typeof document.activeElement?.blur === 'function') {
        document.activeElement.blur();
      }
      window.getSelection()?.removeAllRanges();
      window.dispatchEvent(new Event('resize'));
    }, 50);
  }, [stage]);

  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleLogin = (e) => {
    e.preventDefault();
    setStage("initial");
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handlePaymentChange = (e) => setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStage("neural");
  };
  const handleFieldUpdate = (field, value) => {
    setPackageData({ ...packageData, [field]: value });
    setEditField(null);
  };
  const handleConfirmation = () => setStage("summary");
  const handlePayment = () => {
    setTimeout(() => {
      setStage("checkout");
      setPaymentSuccess(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen text-white p-6 flex flex-col items-center justify-center overflow-hidden bg-[#0f0f1b]">
      <img src="/solina-bg2.png" alt="Solina background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" />

      <AnimatePresence mode="wait">
        {stage === "login" && (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 flex flex-col items-center justify-center space-y-6">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 animate-glow">
              SOLINA
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="text-cyan-300 text-sm italic tracking-widest mb-4">
              Solina is watching and learning you
            </motion.p>
            <motion.form onSubmit={handleLogin} className="w-full max-w-sm space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
              <Input label="Email" name="email" type="email" value={loginData.email} onChange={handleLoginChange} placeholder="you@email.com" />
              <Input label="Password" name="password" type="password" value={loginData.password} onChange={handleLoginChange} placeholder="••••••••" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-lg font-bold shadow-xl transition">Accedi / Registrati</button>
            </motion.form>
          </motion.div>
        )}

        {stage === "initial" && (
          <motion.div key="initial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 w-full max-w-2xl mt-12 space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400 text-center">Aiutaci a conoscerti meglio</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Le tue passioni" name="passions" value={formData.passions} onChange={handleChange} placeholder="Es. arte, tecnologia, cibo" />
              <Input label="Periodo desiderato" name="period" value={formData.period} onChange={handleChange} placeholder="Primavera, estate, ecc" />
              <Input label="Date flessibili?" name="dates" value={formData.dates} onChange={handleChange} placeholder="Dal 10 al 20 agosto" />
              <Input label="Età" name="age" value={formData.age} onChange={handleChange} placeholder="Es. 22" />
              <Input label="Budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Es. 1000€" />
              <button type="submit" className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg shadow-lg hover:scale-105 transition-all">
                Genera il mio viaggio
              </button>
            </form>
          </motion.div>
        )}

        {stage === "neural" && (
          <motion.div key="neural" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 mt-12 text-center">
            <h2 className="text-3xl font-semibold text-blue-400">Analisi neurale in corso...</h2>
          </motion.div>
        )}

        {stage === "generated" && (
          <motion.div key="generated" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 w-full max-w-3xl mt-12 space-y-6">
            <h2 className="text-2xl font-bold text-blue-400">Pacchetto Personalizzato</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(packageData).map(([key, value]) => (
                <div key={key} className="bg-white/5 backdrop-blur-md border border-blue-800 rounded-xl p-4 transition hover:shadow-lg group">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="uppercase text-sm tracking-widest text-blue-400">{key}</h3>
                    <button onClick={() => setEditField(key)} type="button" className="text-blue-400 hover:text-white transition text-xs border border-blue-400 px-2 py-1 rounded-lg">Modifica</button>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-white transition">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button onClick={handleConfirmation} className="px-8 py-4 rounded-xl text-black text-lg font-bold bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 transition-all shadow-lg animate-[pulse_2s_infinite] hover:scale-105">
                Conferma il pacchetto
              </button>
            </div>
          </motion.div>
        )}

        {stage === "summary" && (
          <motion.div key="summary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 w-full max-w-4xl mt-12 text-center space-y-8">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Riepilogo del tuo Viaggio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(packageData).map(([key, value]) => (
                <div key={key} className="bg-[#111827] border border-blue-700 p-5 rounded-xl shadow-inner backdrop-blur-md">
                  <h4 className="text-blue-400 text-sm uppercase tracking-wider mb-2">{key}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <button onClick={() => setStage("checkout")} className="text-lg font-semibold px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-black shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-800 animate-pulse">
                Procedi con la prenotazione
              </button>
            </div>
          </motion.div>
        )}

        {stage === "checkout" && (
          <motion.div key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 w-full max-w-lg mt-10 text-center space-y-6">
            <h2 className="text-3xl font-bold text-blue-400">Sei a un passo dalla tua esperienza</h2>
            {paymentSuccess ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-600/20 border border-green-500 text-green-300 p-6 rounded-xl shadow-lg text-lg">
                Pagamento effettuato con successo! Riceverai una mail con tutti i dettagli.
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} className="space-y-4 text-left">
                <Input label="Numero Carta" name="cardNumber" value={paymentData.cardNumber} onChange={handlePaymentChange} placeholder="1234 5678 9012 3456" />
                <Input label="Titolare Carta" name="holder" value={paymentData.holder} onChange={handlePaymentChange} placeholder="Nome e Cognome" />
                <div className="flex gap-4">
                  <Input label="Scadenza" name="expiry" value={paymentData.expiry} onChange={handlePaymentChange} placeholder="MM/AA" />
                  <Input label="CVV" name="cvv" value={paymentData.cvv} onChange={handlePaymentChange} placeholder="123" />
                </div>
                <button type="submit" className="w-full mt-6 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold text-lg shadow-lg hover:scale-105 transition-all animate-pulse">
                  Clicca e paga!
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {editField && (
          <Dialog open={true} onClose={() => setEditField(null)} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="relative z-50 bg-[#111827] p-6 rounded-xl shadow-2xl w-full max-w-md border border-blue-700">
              <Dialog.Title className="text-lg font-bold text-blue-400 mb-4">Modifica {editField}</Dialog.Title>
              {[1, 2, 3].map((num) => (
                <button key={num} className="w-full text-left bg-white/5 hover:bg-white/10 text-white p-3 mb-2 rounded-lg transition" onClick={() => handleFieldUpdate(editField, `${editField} alternativa ${num}`)}>
                  Suggerimento intelligente {num}
                </button>
              ))}
              <button onClick={() => setEditField(null)} className="mt-4 text-sm text-gray-400 hover:text-white transition">Annulla</button>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="w-full space-y-1">
      <label className="text-sm text-cyan-200 tracking-wide">{label}</label>
      <input {...props} className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 backdrop-blur-sm border border-cyan-400/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all" />
    </div>
  );
}
