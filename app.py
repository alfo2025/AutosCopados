import os
from flask import Flask, redirect, render_template, request, url_for
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

@app.route("/Login", methods=["GET", "POST"])
def login():
    css = '../static/css/LoginRegistrase.css'
    js = '../static/js/login.js'
    clase = 'formulario login'
    error = ""
    Respuesta = None
    
    if Respuesta == None:
        Respuesta = render_template("login.html", css = css, js = js, clase = clase)
    
    return Respuesta

if __name__ == "__main__":
    app.run(debug=True)


