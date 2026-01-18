import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Loader2 } from "lucide-react";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // REMPLACE CES DEUX VALEURS PAR TES CLÉS
        const SERVICE_ID = "service_yz3unpb"; 
        const TEMPLATE_ID = "template_5ojjy3m"; // Trouve-le dans l'onglet 'Settings' de ton template
        const PUBLIC_KEY = "HWxd6uEcHfex4kao8";   // Trouve-la dans l'onglet 'Account' en bas à gauche

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
.then(() => {
    setStatus("success");
    form.current?.reset();
    setTimeout(() => setStatus("idle"), 5000);
}, (error) => {
    console.log(error); // On affiche l'objet d'erreur complet
    setStatus("error");
});
        }
    };

    return (
        <section id="Contact" className="py-20">
            <h2 className="text-5xl font-bold text-center mb-10">
                Contactez <span className="text-accent">-moi</span>
            </h2>
            
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 max-w-2xl mx-auto bg-base-200 p-8 rounded-3xl shadow-xl">
                <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="from_name" placeholder="Votre nom" className="input input-bordered focus:border-accent" required />
                    <input type="email" name="user_email" placeholder="Votre email" className="input input-bordered focus:border-accent" required />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-32 focus:border-accent" placeholder="Votre message..." required></textarea>

                <button type="submit" disabled={status === "sending"} className={`btn btn-accent w-full md:w-fit self-center ${status === "success" ? "btn-success text-white" : ""}`}>
                    {status === "sending" ? <Loader2 className="animate-spin" /> : status === "success" ? <CheckCircle size={20} /> : <Send size={20} />}
                    {status === "success" ? "Message envoyé !" : "Envoyer"}
                </button>
                
                {status === "error" && <p className="text-error text-center mt-2">Une erreur est survenue, réessayez plus tard.</p>}
            </form>
        </section>
    );
};

export default Contact;