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


@app.route('/dashboard-robospbi', methods=['GET'])
def load_dashboard_robos_powerbi():
    # fecha_corte = Dashboard.get_fecha_corte()
    fecha_corte = datetime(2023,11,8).strftime('%Y/%m/%d')
    return render_template("dashboard_robos.html", fecha_corte = fecha_corte, flex_monster_lic = flex_monster_lic)


@app.route('/dashboard-muertesviolentas-bi', methods=['GET'])
def load_dashboard_muertesviolentas_powerbi():
    # fecha_corte = Dashboard.get_fecha_corte()
    fecha_corte = datetime(2023,11,19).strftime('%Y/%m/%d')
    return render_template("dashboard_muertes_violentas.html", fecha_corte = fecha_corte, flex_monster_lic = flex_monster_lic)


@app.route('/acerca-de-los-datos')
def acerca_datos():
    fecha_corte = Dashboard.get_fecha_corte()
    fecha_ini = datetime(2015,1,1).strftime("%d/%m/%Y")
    total_registros = Dashboard.get_total_registros_open_data()
    return render_template("acerca_datos.html", fecha_corte=fecha_corte, fecha_ini=fecha_ini, total_registros=total_registros)

@app.route('/acerca-de-los-datos-robos')
def acerca_datos_robo():
    fecha_corte = Dashboard.get_fecha_corte()
    fecha_ini = datetime(2015,1,1).strftime("%d/%m/%Y")
    total_registros = Dashboard.get_total_registros_open_data()
    return render_template("acerca_datos_robos.html", fecha_corte=fecha_corte, fecha_ini=fecha_ini, total_registros=total_registros)

@app.route('/reporte-crear-femicidio', methods=['GET'])
def dashboard_crear_reporte_femicidio():
    """_summary_
    Genera la Vista para Operar sobre femicidio_opendata 
    Returns:
        _type_: _description_
    """
    # fecha_corte = Dashboard.get_fecha_corte() 
    # ToDo leer la fecha de corte de femicidio de una base de datos
    fecha_corte = datetime.now().strftime("%d/%m/%Y")
    return render_template("reporte_femicidio.html", fecha_corte=fecha_corte, flex_monster_lic = flex_monster_lic)
