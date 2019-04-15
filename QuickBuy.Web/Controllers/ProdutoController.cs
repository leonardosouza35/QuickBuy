using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;
using System.Linq;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[Controller]")]
    public class ProdutoController : Controller
    {

        private readonly IProdutoRepositorio _produtoRepositorio;
        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {            
            _produtoRepositorio = produtoRepositorio;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtoRepositorio.ObterTodos());
                //if(condicao == false)
                //{
                //    return BadRequest("")
                //}
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            try
            {                
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto", produto);

            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
