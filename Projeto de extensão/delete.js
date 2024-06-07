const { MongoClient } = require('mongodb');

async function main(){
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await deleteByName(client, "Maria");

    } catch (e) {
            console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
    async function deleteByName(client, nameOfListing) {
        const result = await client.db("Doe&transforme").
        collection("Login").
        deleteOne({ Name: nameOfListing});

        console.log(`${result.deletedCount} documentos deletados`);

    };



