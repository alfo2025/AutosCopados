from config import CONFIG_DB
from utilidades._mysql_db import insertDB, selectDB
from datetime import date

def BuscarPubAutoNombre(nombre):
    sql = """"""
    if nombre != "":
        sql = """
        select P.id, P.modelo, P.foto, P.precio, P.km, U.nombre as 'Nvendedor', U.apellido as 'Avendedor'
        from publicacion_auto P
        inner join usuario U on U.id = P.id_vendedor
        where modelo LIKE %s
        """
    PubAutos = selectDB(CONFIG_DB, sql, (nombre,), dictionary=True)
    pub = None
    
    if PubAutos:
        pub = PubAutos
    
    return pub

def BuscarPubAutoID(id):
    sql = """
        select P.id, P.modelo, P.foto, P.precio, P.km, U.nombre as 'Nvendedor', P.combustible, U.apellido as 'Avendedor', M.nombre as "Marca", P.fechaPublicacion as 'fecha'
        from publicacion_auto P
        inner join usuario U on U.id = P.id_vendedor
        inner join marca M on M.id = P.id_marca
        where P.id = %s
        """
    PubAuto = selectDB(CONFIG_DB, sql, (id,), dictionary=True)
    pub = None
    
    if PubAuto:
        pub = PubAuto[0]
    return pub

def BuscarComentarioPub(id):
    sql = """
        select C.id, C.texto, C.fecha, U.nombre as 'Unombre'
        from comentario C
        inner join usuario U on U.id = C.id_usuario
        where C.id_pubAuto = %s
    """
    Comentarios = selectDB(CONFIG_DB, sql, (id,), dictionary=True)
    comentario = None
    
    if Comentarios:
        comentario = Comentarios
    
    return comentario

def ComentarPubAutoId(idP, idU, pregunta):
    sql = """
        insert into comentario (id_pubAuto,id_usuario,texto,fecha)
        value (%s,%s,%s,%s)
    """
    valores = (
        idP,
        idU,
        pregunta,
        date.today()
    )
    respuesta = False
    error = ""
    ComentarioPublicado = insertDB(CONFIG_DB, sql, valores)
    
    if ComentarioPublicado is None:
        error = "No se publico el comentario"
    else:
        respuesta = True
        
    return respuesta, error