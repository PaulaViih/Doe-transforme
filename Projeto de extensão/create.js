const { MongoClient } = require('mongodb');

async function main(){
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await createListing(client, {
            "#": 1,
            "Name": "Paula",
            "Last name": "Santos",
            "Email adress": "Paula@gmail.com",
            "Phone number": "99999-9999",
            "Password": "Paula123"
        })

    } catch (e) {
            console.error(e);
    } finally {
        await client.close();
    }
}

async function createListing(client, newListing) {
    const result = await client.db("Doe&transforme")
                              .collection("Login")
                              .insertOne(newListing);

    console.log('Documento criado com sucesso!');
    console.log(result);
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`  - ${db.name}`));
}


main().catch(console.error);