from flask_app import mariadb, app
from sqlalchemy import text

class Dashboard:
    
    @staticmethod
    def get_fecha_corte():
        fecha_corte = mariadb.execute(text("SELECT MAX(a.fecha) FROM fgn.denuncia_fiscalia a;")).first()[0]
        fecha_corte = fecha_corte.strftime("%d/%m/%Y")
        return fecha_corte
    def get_total_registros_open_data():
        total_registros = mariadb.execute(text("SELECT COUNT(open_data_lake.`NoticiaDelito`) FROM reportes.open_data_lake as open_data_lake;")).first()[0]
        total_registros_formatted = f"{total_registros:,}"
        return total_registros_formatted