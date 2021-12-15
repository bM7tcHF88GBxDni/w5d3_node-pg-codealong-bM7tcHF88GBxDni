import  pg  from 'pg'; //import postgres

const pool = new pg.Pool({
    user: 'gcwbjfjnnmexop',
    host: 'ec2-54-155-208-5.eu-west-1.compute.amazonaws.com',
    database: 'd7sspfnokg2cv1',
    password: '4d94162a96088569aa64859cd889ea76819588460010b35d5ad070c01786e567',
    port: 5432,
    ssl: {rejectUnauthorized: false }
});

export function query(text, params) {/* we dont use the optional third callback parameter, which means this exported function will return a promise because we are not dealing with it here in a callback */
    return pool.query(text, params);
}