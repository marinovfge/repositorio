from flask_app import app, flex_monster_lic
from flask_app.models.dashboard import Dashboard
from flask import render_template, redirect, flash, session, request
from urllib import request
from datetime import datetime


@app.route('/dashboard-general')
def dashboard_general():
    return render_template("dashboard_general_test.html")


@app.route('/reporte-crear', methods=['GET'])
def dashboard_crear():
    fecha_corte = Dashboard.get_fecha_corte()
    return render_template("reporte_crear2.html", fecha_corte=fecha_corte, flex_monster_lic = flex_monster_lic)


@app.route('/reporte-crear-desi', methods=['GET'])
def dashboard_crear_reporte_desi():
    """_summary_
    Genera la Vista para Operar sobre Lakendd hasta que se habilite la vista al publico
    Returns:
        _type_: _description_
    """
    fecha_corte = Dashboard.get_fecha_corte()
    return render_template("reporte_desi.html", fecha_corte=fecha_corte, flex_monster_lic = flex_monster_lic)


@app.route('/dashboard-general-fge', methods=['GET'])
def dashboard_general_fge():
    fecha_corte = Dashboard.get_fecha_corte()
    return render_template("dashboard_general_fge.html", fecha_corte = fecha_corte, flex_monster_lic = flex_monster_lic)

@app.route('/acerca-de-los-datos')
def acerca_datos():
    fecha_corte = Dashboard.get_fecha_corte()
    fecha_ini = datetime(2015,1,1).strftime("%d/%m/%Y")
    return render_template("acerca_datos.html", fecha_corte=fecha_corte, fecha_ini=fecha_ini)

