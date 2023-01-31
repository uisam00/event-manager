using Microsoft.EntityFrameworkCore;
using Divulga.API.Models;

namespace Divulga.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Evento> Eventos { get; set; }

    }
}