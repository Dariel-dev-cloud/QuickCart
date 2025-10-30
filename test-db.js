import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb+srv://darieldev:darieldev123@cluster0.b3b01m6.mongodb.net/?appName=Cluster0";

const clientOptions = {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true
    }
};

async function testConnection() {
    try {
        console.log('🔍 Intentando conectar a MongoDB...');
        console.log('📋 MONGODB_URI:', uri);

        // Conectar a MongoDB
        await mongoose.connect(uri, clientOptions);

        // Hacer ping para verificar conexión
        await mongoose.connection.db.admin().command({ ping: 1 });

        console.log('✅ ¡Conexión exitosa a MongoDB!');
        console.log('📦 Base de datos:', mongoose.connection.name || 'default');
        console.log('🌐 Host:', mongoose.connection.host);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error de conexión a MongoDB:');
        console.error('   Tipo:', error.name);
        console.error('   Mensaje:', error.message);
        process.exit(1);
    } finally {
        // Cerrar la conexión
        await mongoose.disconnect();
        console.log('🔌 Conexión cerrada');
    }
}

testConnection();