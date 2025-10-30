import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI; // ✅ CORRECTO: "process"

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function run() {
    try {

        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await mongoose.disconnect();
    }
}
run().catch(console.dir);


