using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = new Evento[] {
            new Evento() {
                EventoId = 1,
                Tema = "Agunlar e .NET 5",
                Local = "Belo Horizonte",
                Lote = "18 Lotes",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString("dd/mm/yyyy")

            },
            new Evento() {
                EventoId = 2,
                Tema = ".NET 5",
                Local = "Mato Grosso do Sul",
                Lote = "14 Lotes",
                QtdPessoas = 100,
                DataEvento = DateTime.Now.AddDays(3).ToString("dd/mm/yyyy")
            }
        };

        public EventoController()
        {
           
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }
        [HttpGet("{id}")]
        public IEnumerable<Evento>  Get(int id)
        {
            return _evento.Where(evento => evento.EventoId == id);
        }
    }
}