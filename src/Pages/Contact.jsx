import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Confetti from "react-dom-confetti";
import "../Styles/Styles.css";


const Contact = () => {
  // État pour stocker les valeurs des champs de formulaire
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [inputFocus, setInputFocus] = useState(false);

  // État pour indiquer si le message a été envoyé avec succès
  const [isMessageSent, setIsMessageSent] = useState(false);

  // État pour afficher ou masquer les confettis
  const [showConfetti, setShowConfetti] = useState(false);

  // Gestionnaire de changement de champ de formulaire
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs de formulaire avant l'envoi
    const emailPattern = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Email non valide");
      return;
    }

    if (
      formData.firstname !== "" &&
      formData.lastname !== "" &&
      formData.email !== "" &&
      emailPattern.test(formData.email) &&
      formData.message !== ""
    ) {
      // Paramètres pour l'envoi d'e-mail via le service emailjs
      const serviceID = "service_zl06feb";
      const templateID = "template_y7ubhkb";
      const userID = "DwCzxlQFSlHiyszhY";

      // Envoi de l'e-mail via emailjs
      emailjs
        .send(serviceID, templateID, formData, userID)
        .then((response) => {
          console.log("E-mail envoyé !", response.status, response.text);
          setIsMessageSent(true);
          setFormData({ firstname: "", lastname: "", email: "", message: "" });
          setShowConfetti(true);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de l'e-mail :", error);
          alert(
            "Une erreur s'est produite lors de l'envoi du message. Merci de réessayer."
          );
        });
    }
  };

  // Effet pour masquer les confettis après 5 secondes
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    
  
    <article>
      
        <section className="container-contact">
        <div className="wrapper-pages">
        <div className="object3"></div>
        <div className="object4"></div>
        <div className="object5"></div>
        </div>
          <h3>Send me a message</h3>
          <p>
            Do not hesitate to contact me via the contact form below or my
            e-mail address. I would love to chat with you and share this common
            passion for development.
          </p>
          <div className="links-contact">
            <Link
              to="https://www.linkedin.com/in/tytgatmarion/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="https://github.com/marionty" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
          <div className="mymail">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;
            <strong>marion.tytgat@gmail.com</strong>
          </div>
        </section>
     

      <div className="container-contact-form">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              required
              onFocus={() => setInputFocus(true)} // Ajoutez la classe lorsque l'input obtient le focus
              onBlur={() => setInputFocus(false)} // Supprimez la classe lorsque l'input perd le focus
              className={inputFocus ? "input-with-focus" : ""} // Appliquez la classe conditionnellement
            />

            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              required
              onFocus={() => setInputFocus(true)} // Ajoutez la classe lorsque l'input obtient le focus
              onBlur={() => setInputFocus(false)} // Supprimez la classe lorsque l'input perd le focus
              className={inputFocus ? "input-with-focus" : ""} // Appliquez la classe conditionnellement
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              onFocus={() => setInputFocus(true)} // Ajoutez la classe lorsque l'input obtient le focus
              onBlur={() => setInputFocus(false)} // Supprimez la classe lorsque l'input perd le focus
              className={inputFocus ? "input-with-focus" : ""} // Appliquez la classe conditionnellement
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              onFocus={() => setInputFocus(true)} // Ajoutez la classe lorsque l'input obtient le focus
              onBlur={() => setInputFocus(false)} // Supprimez la classe lorsque l'input perd le focus
              className={inputFocus ? "input-with-focus" : ""} // Appliquez la classe conditionnellement
            />
          </div>
          {isMessageSent && (
            <div className="confirm-message">
              <p>Votre message a été envoyé</p>
            </div>
          )}

          <div className="button-contact-form">
            <Confetti
              active={showConfetti}
              config={
                {
                  /* Configuration des confettis */
                }
              }
            />
            <button
              className="button-envoyer"
              type="submit"
              onClick={handleSubmit}
            >
              Envoyer
            </button>
         </div>
        </form>
        </div>
    </article>
   
  );
};

export default Contact;
