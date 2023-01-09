using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace Gracon
{
    /// <summary>
    /// Descrição resumida de Calculadora
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que esse serviço da web seja chamado a partir do script, usando ASP.NET AJAX, remova os comentários da linha a seguir. 
    // [System.Web.Script.Services.ScriptService]
    public class Calculadora : System.Web.Services.WebService
    {

        [WebMethod]
        public int Soma(int a, int b)
        {
            return (a + b);
        }

        [WebMethod]
        public System.Single Subtração(System.Single A, System.Single B)
        {
            return (A - B);
        }

        [WebMethod]
        public System.Single Multiplicacao(System.Single A, System.Single B)
        {
            return A * B;
        }

        [WebMethod]
        public System.Single Divisao(System.Single A, System.Single B)
        {
            if (B == 0) return -1;
            return Convert.ToSingle(A / B);

        }
            public string HelloWorld()
        {
            return "O filho se torna o pai e o pai se torna o filho";
        }
    }
}
