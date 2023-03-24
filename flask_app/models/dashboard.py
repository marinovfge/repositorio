from flask_app import mariadb, app
from sqlalchemy import text

class Dashboard:
    
    @staticmethod
    def get_fecha_corte():
        fecha_corte = mariadb.execute(text("SELECT MAX(a.fecha) FROM fgn.denuncia_fiscalia a;")).first()[0]
        fecha_corte = fecha_corte.strftime("%d/%m/%Y")
        return fecha_corte