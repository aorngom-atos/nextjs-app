import { useEffect, useState } from 'react';

export default function TestPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/items/42?q=hello") 
        .then((res) => res.json())
        .then((data) =>{
            setData(data);
        })
    }, []); //ne faire ça qu'une fois lors du chargemnt de la page

    return(
        <div>
            <h1>
                Voici la page de test. Nextjs vers API et API vers postgres tout ça avec docker
            </h1>

            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre> // afficher les données si on les a reçu
            ) : (
                <p>Chargement en cours...</p> //Ça si les données ne sont pas encore là
            )}
        </div>
    )
}