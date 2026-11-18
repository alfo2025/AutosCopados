import os
from flask import Flask, redirect, render_template, request, session, url_for
from config import CONFIG_DB
from utilidades._mysql_db import deleteDB, insertDB, selectDB, updateDB
from utilidades.request_utils import getRequest

from modulos.usuarios import BuscarEmailUsuario
from modulos.pubauto import BuscarPubAutoNombre,BuscarPubAutoID,BuscarComentarioPub,ComentarPubAutoId

app = Flask(__name__)
app.config["SECRET_KEY"] = "clave-solo-para-desarrollo"
app.config["MAX_CONTENT_LENGTH"] = 2 * 1024 * 1024

CARPETA_UPLOADS = os.path.join(app.root_path, "static", "uploads")

def UsuarioConectado():
    conectado = False
    
    if "id" in session:
        conectado = True
    
    return conectado

@app.route("/", methods=["GET", "POST"])
def inicio():
    css = '/css/inicio.css'
    pagina = None
    
    if request.method == "POST":
        datos = getRequest()
        
        if datos["nombreA"] != "":
            pagina = redirect(url_for("ListaAutosC", nombre = datos["nombreA"]))
    if pagina == None:
        pagina = render_template("inicio.html", css = css)
    return pagina

@app.route("/login", methods=["GET", "POST"])
def login():
    css = '/css/LoginRegistrase.css'
    js = '../static/js/login.js'
    clase = 'formulario login'
    error = ""
    Respuesta = None
    
    if request.method == "POST":
        datos = getRequest()
        usuario = BuscarEmailUsuario(datos.get("correo",""))
        credencial = False
        print("hola, llegaste aqui")
        if usuario:
            clave = datos.get("clave","")
            credencial = clave == usuario["clave"]
            print("hola, verificando clave")
        
        if credencial:
            print("Guardando datos")
            session["id"] = usuario["id"]
            session["Nombre"] = usuario["nombre"]
            session["Apellido"] = usuario["apellido"]
            session["FotoUsuario"] = usuario["fotoUsuario"]
            session["admin"] = usuario["admin"]
            print("Se guardaron los datos")
            Respuesta = redirect(url_for("inicio"))
        else:
            error = "Email o clave erronea"
    if Respuesta == None:
        Respuesta = render_template("login.html", css = css, js = js, clase = clase, error = error)
    
    return Respuesta


@app.route("/logout")
def logout():
    session.clear()
    Respuesta = redirect(url_for("inicio"))
    return Respuesta

@app.route("/autos/<nombre>/buscar", methods=["GET", "POST"])
def ListaAutosC(nombre):
    Respuesta = None
    css = "/css/ListaAutos.css"
    idbody = "BodyComprador"
    js = 'js'
    
    if request.method == "POST":
            datos = getRequest()
            if datos["nombreA"] != "":
                Respuesta = redirect(url_for("ListaAutosC", nombre = datos["nombreA"]))
            else: 
                n = nombre
                Respuesta = redirect(url_for("ListaAutosC", nombre = n))
            
    elif UsuarioConectado():
        autos = BuscarPubAutoNombre('%'+nombre+'%')
        if autos is None:
            autos = "No se encontraron autos"
        Respuesta = render_template("listar_autos_comprador.html", autos = autos, css = css, idbody = idbody, valor = nombre)
    else:
        Respuesta = redirect(url_for("login"))
    
    return Respuesta

@app.route("/autos/<int:id>/detalle", methods = ["GET","POST"])
def DetalleAuto(id):
    Respuesta = None
    css = "css/detalleAuto.css"
    PubAuto = BuscarPubAutoID(id)
    comentarios = BuscarComentarioPub(id)
    
    if PubAuto == None:
        PubAuto = "No se encontro el auto"
    
    if comentarios == None:
        comentarios = "No hubo comentarios"
    
    if request.method == "POST":
        datos = getRequest()
        if len(datos["PreguntaComprador"])>10:
            Respuesta = comentarAuto(id,datos["PreguntaComprador"])
    if Respuesta == None:
        Respuesta = render_template("DetalleAuto.html", PubAuto = PubAuto, comentarios = comentarios, css = css)
    return Respuesta
 
def comentarAuto(idP, pregunta):
    pagina = None
    respuesta, error = ComentarPubAutoId(idP,session["id"],pregunta)
    if respuesta:
        pagina = redirect(url_for("DetalleAuto", id = idP)) 
    else:
        pagina = redirect(url_for("DetalleAuto", id = idP))
        print(error)

    return pagina
        
    


if __name__ == "__main__":
    app.run(debug=True)



        