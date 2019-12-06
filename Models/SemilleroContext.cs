
using Microsoft.EntityFrameworkCore;
namespace ProeyectoSemillero.Models
{
public class SemilleroContext : DbContext
{
public SemilleroContext(DbContextOptions<SemilleroContext> options) :
base(options)
{
}
public DbSet<EstudianteItem> Estudiantes { get; set; }
public DbSet<DocenteItem> Docente { get; set; }
public DbSet<ConvocatoriaItem> Convocatoria { get; set; }
public DbSet<SolicitudAvalItem> Aval { get; set; }
public DbSet<ProgramaItem> Programa { get; set; }
public DbSet<FacultadItem> Facultad { get; set; }
public DbSet<PlantrabajoItem> Trabajo { get; set; }
public DbSet<SemilleroItem> Semillero { get; set; }

}
}