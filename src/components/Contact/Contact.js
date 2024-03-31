const Contact=()=>{
    const submitHandler=()=>{};
    return (
        
           <form onSubmit={submitHandler}>
           <div>
               <label htmlFor="name" className="letter">Nombre</label>
               <input
               name="name"
               id="name"
               />
           </div>
           <div>
               <label htmlFor="email" className="letter">Email</label>
               <input
               type="email"
               name="email"
               id="email"
               />
           </div>
           <div>
               <label htmlFor="email2" className="letter">Confirmar Email</label>
               <input
               type="email"
               name="email"
               id="email2"
               />
           </div>
           <div>
               <label htmlFor="message" className="letter">Deje su mensaje</label>
               <textarea
               name="message"
               id="message"
    
               ></textarea>
           </div>
           <button><h4>Enviar</h4></button>
           </form >
        
    );
           };
        
 export default Contact
