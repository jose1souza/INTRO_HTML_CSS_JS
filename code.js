function changeColor() {
    p1.style.color = "red";
    p2.style.color = 'red';
}

titulo.addEventListener('click', changeColor);

function addParagraph(){
    const paragraphToBeAdd = document.createElement('p');
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
            if(!response.ok){ // response status == ok
               throw new Error("Error for consult API");
            }

            return response.json();
        }).then(data => {
            const p = document.createElement('p');
            const index = Math.floor(Math.random() * 9);
            const textNode = document.createTextNode("Name: " +
                data[index].name +
                " Email: " +
                data[index].email);

            p.appendChild(textNode);
            document.body.appendChild(p);
        }).catch(error => {
            const p = document.createElement('p');
            const textNode = document.createTextNode(error.message)

            p.appendChild(textNode);
            document.body.appendChild(p);
        }); // one function
}

buttonRemoteQuery.addEventListener('click',searchAPI);