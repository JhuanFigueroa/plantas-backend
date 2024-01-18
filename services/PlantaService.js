const sequelize = require('../sequelize-config');

class PlantaService {
    constructor() {
    }

    async find() {
        //const [data] = await sequilize.query('insert into admision values ('+data.numFicha+')')
        const data = await sequelize.query('call ver_plantas()')

        return data;
    }

    async findCateforia(id) {
        //const [data] = await sequilize.query('insert into admision values ('+data.numFicha+')')
        const data = await sequelize.query(`call ver_plantas_by_categoria(${id})`);
        return data;
    }

    async crearVenta(cliente) {
        //const [data] = await sequilize.query('insert into admision values ('+data.numFicha+')')
        var sql = `call crearVenta(${cliente})`;
        console.log(sql)
        const [data] = await sequelize.query(sql);
        return data;
    }

    async crearDetalleVenta(datos) {

        var sql = 'INSERT INTO plantas.detalle_venta (cantidad_venta, precio_venta, id_planta, id_venta) VALUES ';
        datos.map(async planta => {

            sql += `(${planta.cantidad}, ${planta.precio}, ${planta.planta}, ${planta.venta}),`;
        })
        var str = sql.substring(0, sql.length - 1);
        str += ";";
        const [data] = await sequelize.query(str);
        return "exitoso";
    }

    async crearCliente(cliente) {
        var sql = `INSERT INTO plantas.cliente (nombre_cliente, apellido1, telefono_cliente, correo) VALUES ('${cliente.nombre}', '${cliente.apellido}', '${cliente.telefono}', '${cliente.correo}');`
        const [data] = await sequelize.query(sql);
        return data;
    }

    async getVenta(id) {
        var sql = `call ver_venta(${id});`;
        const [data] = await sequelize.query(sql);
        return data;
    }

    async crearCompra(compra) {
        var sql = `call crear_compra('${compra.proveedor}')`;
        var [data] = await sequelize.query(sql);
        return data;
    }

    async crearDetalleCompra(datos) {
        var sql = 'INSERT INTO plantas.detalle_compra (cantidad_compra, precio_compra, id_planta, id_compra) VALUES';
        datos.map(async detalle => {

            sql += `(${detalle.cantidad}, ${detalle.precio}, ${detalle.planta}, ${detalle.compra}),`;
        })
        var str = sql.substring(0, sql.length - 1);
        str += ";";
        const [data] = await sequelize.query(str);
        return "exitoso";
    }

    async login(cliente) {
        var [data] = await sequelize.query(`SELECT id_cliente as id, nombre_cliente as nombre, apellido1 as apellido,correo,contrasenia, id_rol as rol 
from cliente where correo='${cliente.correo}'`);

        if (data[0].id!=0){
            if (cliente.contrasenia===data[0].contrasenia){
                return data[0];
            }else{
                return null;
            }
        }
        return null;
    }

    async obtenerCliente(correo) {
        const [data] = await sequelize.query(`select * from cliente where correo='${correo}'`);
        return data;
    }

    async obtenerCategorias() {
        const [data] = await sequelize.query("select id_categoria as id,nombre_categoria as nombre from categoria");
        return data;
    }

    async obtnenerProveedores(){
        const [data] = await sequelize.query("SELECT " +
            "id_proveedor as id, " +
            "nombre_proveedor as nombre," +
            "telefono_proveedor as telefono " +
            "from proveedor");
        return data;
    }
}

module.exports = PlantaService;