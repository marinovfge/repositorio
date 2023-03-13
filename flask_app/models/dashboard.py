from flask_app import mariadb, app
from sqlalchemy import text

class Dashboard:
    
    @staticmethod
    def get_fecha_corte():
        return mariadb.execute(text("SELECT MAX(a.fecha) FROM fgn.denuncia_fiscalia a;")).first()[0]