using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Dominio.Contratos
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario> 
    {
        Usuario Obter(string email, string senha);
        Usuario Obter(string email);
    }
}
