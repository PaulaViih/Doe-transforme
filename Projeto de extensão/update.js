const { MongoClient } = require('mongodb');

async function main(){
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await updateListaByName(client, "Paula",
            { Name: "Maria" });

    } catch (e) {
            console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
    async function updateListaByName(client, nameOfListing, updateLista) {
        const result = await client.db("Doe&transforme").
        collection("Login").
        updateOne({ Name: nameOfListing}, { $set: updateLista });

        console.log(`Documento(s) atualizados`);

        if (result) {
            console.log(`Lista de Nome '${nameOfListing}'`);
            console.log(result);
        } else
            console.log(`Não está na lista '${nameOfListing}'`);

    };



