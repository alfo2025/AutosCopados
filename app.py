import os
from flask import Flask, redirect, render_template, request, session, url_for
from config import CONFIG_DB
from utilidades._mysql_db import deleteDB, insertDB, selectDB, updateDB
from utilidades.request_utils import getRequest

from modulos.usuarios import BuscarEmailUsuario

app = Flask(__name__)
app.config["SECRET_KEY"] = "clave-solo-para-desarrollo"
app.config["MAX_CONTENT_LENGTH"] = 2 * 1024 * 1024

CARPETA_UPLOADS = os.path.join(app.root_path, "static", "uploads")

@app.route("/inicio")
@app.route("/")
def inicio():
    css = '../static/css/inicio.css'
    pagina = render_template("inicio.html", css = css)
    return pagina

@app.route("/login", methods=["GET", "POST"])
def login():
    css = '../static/css/LoginRegistrase.css'
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
    Respuesta = redirect("inicio")
    return Respuesta

if __name__ == "__main__":
    app.run(debug=True)


