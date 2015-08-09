using System.Web;
using System.Web.Mvc;

namespace App
{
    public class Datos
    {
        [HttpGet]
        public void Index()
        {
            return;
        }
        
        [HttpPost]
        public void Index(string mensaje)
        {
            return "Exito";
        }
    }
}