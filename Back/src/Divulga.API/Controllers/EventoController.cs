﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Divulga.API.Data;
using Divulga.API.Models;

namespace Divulga.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventosController : ControllerBase
{
    private readonly DataContext _context;

    public EventosController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;
    }
    [HttpGet("{id}")]
    public Evento Get(int id)
    {
        return _context.Eventos.FirstOrDefault(evento => evento.EventoId == id);
    }
}