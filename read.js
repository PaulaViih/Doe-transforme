const { MongoClient } = require('mongodb');

async function main(){
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await FindOneListingByName(client, "Paula");

    } catch (e) {
            console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
    async function FindOneListingByName(client, nameOfListing) {
        const result = await client.db("Doe&transforme").
        collection("Login").
        findOne({Name: nameOfListing});

        if (result) {
            console.log(`Lista de Nome '${nameOfListing}'`);
            console.log(result);
        } else
            console.log(`Não está na lista '${nameOfListing}'`);

    };



//function para o create

main().catch(console.error);

async function createListing(client, newListing) {
    const result = await client.db("Doe&transforme").
    collection("Login").
    insertOne(newListing);

    console.log('Documento criado com sucesso!');
}