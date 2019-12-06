using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProeyectoSemillero.Models;
namespace ProeyectoSemillero.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class EstudianteController : ControllerBase
{
private readonly SemilleroContext _context;
public EstudianteController(SemilleroContext context)
{
_context = context;
if (_context.Estudiantes.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
// _context.Estudiantes.Add(new EstudianteItem {  Cedula=1212 ,Nombre="hola",Apellido="hola",Telefono="hola",Sexo="hola",FechaNacimiento="hola",Programa="hola",Semestre="hola",Proyecto="hola",Ingreso="hola"});

_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<EstudianteItem>>> GetPacienteItems()
{
return await _context.Estudiantes.ToListAsync();
}


[HttpGet("{id}")]
public async Task<ActionResult<EstudianteItem>> GetPacienteItem(int id)
{
var Estudiante = await _context.Estudiantes.FindAsync(id);
if (Estudiante == null)
{
return NotFound();
}
return Estudiante;
}

// public void calcularPaciente(EstudianteItem item){
//     if(item.Salario>2500000){
//         item.Tarifa=0.2;
//         item.ValorCopago=(item.Tarifa*item.ValorServivcio);
//     }else{
//         item.Tarifa=0.1;

//          item.ValorCopago=(item.Tarifa*item.ValorServivcio);
//     }
// }
[HttpPost]
public async Task<ActionResult<EstudianteItem>> PostPacienteItem(EstudianteItem item)
{
   
        // calcularPaciente(item);
_context.Estudiantes.Add(item);
await _context.SaveChangesAsync();

  
    return CreatedAtAction(nameof(GetPacienteItem), new { id = item.Id }, item);

}
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteTaskItem(int id)
{
var EstudianteItem = await
_context.Estudiantes.FindAsync(id);
if (EstudianteItem == null)
{
return NotFound();
}

_context.Estudiantes.Remove(EstudianteItem);
await _context.SaveChangesAsync();
return NoContent();
}
[HttpPut("{id}")]
public async Task<IActionResult> PutTaskItem(int id, EstudianteItem item)
{
if (id != item.Id)
{
return BadRequest();
}
_context.Entry(item).State = EntityState.Modified;
await _context.SaveChangesAsync();
return NoContent();
}
// PUT: api/Task/5
/*[HttpPut("{id}")]
public async Task<IActionResult> PutTaskItem(int id, TaskItem
item)
{
if (id != item.Id)
{
return BadRequest();
}
_context.Entry(item).State = EntityState.Modified;
await _context.SaveChangesAsync();
return NoContent();
}
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteTaskItem(int id)
{
var TaskItem = await
_context.TaskItems.FindAsync(id);
if (TaskItem == null)
{
return NotFound();
}

_context.TaskItems.Remove(TaskItem);
await _context.SaveChangesAsync();
return NoContent();
}*/

}
}