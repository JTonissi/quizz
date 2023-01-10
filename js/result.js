localStorage.getItem("note");
//sessionStorage.getItem("note");
if(localStorage.getItem("note") != null)
    app.textContent = `Vous avez eu ${localStorage.getItem("note")} sur 20 !`;