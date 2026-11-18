from config import CONFIG_DB
from utilidades._mysql_db import insertDB, selectDB

def BuscarEmailUsuario(email):
    sql = """
    select id, nombre, apellido, mail, clave, dni, fotoUsuario, admin
    from usuario
    where mail = %s
    """
    usuarios = selectDB(CONFIG_DB, sql, (email,), dictionary=True)
    usuario = None
    
    if usuarios:
        usuario = usuarios[0]
    
    return usuario