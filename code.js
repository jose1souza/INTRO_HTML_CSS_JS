function changeColor() {
    p1.style.color = "red";
    p2.style.color = 'red';
}

titulo.addEventListener('click', changeColor);

function addParagraph(){
    const paragraphToBeAdd = document.createElement("p");
    const textToBeAddText = document.
        createTextNode("Text for a added Paragraph");
    
    paragraphToBeAdd.appendChild(textToBeAddText);

    document.body.appendChild(paragraphToBeAdd);
}

buttonAddParagraph.addEventListener('click', addParagraph);


function searchAPI(){
    const usersURL = "https://jsonplaceholder.typicode.com/users";

    // Requisition HTTP GET (requesy --> SERVER --> response)
    fetch(usersURL) // Return one Promisse
        .then(response => { // is lâmbida
            if(response.json){ // response status == ok
                alert('Consult completed!');
            }
        }); // one function
}

buttonRemoteQuery.addEventListener('click',searchAPI);