import dotenv from 'dotenv';
import connectDB from './config/db.js';

// ⚡ IMPORTANTE: Cargar variables de entorno PRIMERO
dotenv.config();

async function testConnection() {
    // 🔍 Debug: Ver qué valor tiene la variable
    console.log('📋 MONGODB_URI value:', process.env.MONGODB_URI);
    console.log('📋 Type:', typeof process.env.MONGODB_URI);
    console.log('📋 Length:', process.env.MONGODB_URI?.length);

    try {
        await connectDB();
        console.log('✅ Connection test successful');
        process.exit(0);
    } catch (error) {
        console.error('❌ Connection test failed:', error.message);
        process.exit(1);
    }
}

testConnection();