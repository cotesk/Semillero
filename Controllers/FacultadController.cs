using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProeyectoSemillero.Models;
namespace ProeyectoSemillero.Controllers
{
[Route("api/[Controller]")]
[ApiController]
public class FacultadController : ControllerBase
{
private readonly SemilleroContext _context;
public FacultadController(SemilleroContext context)
{



  // ProgramaItem Programa = new ProgramaItem { Nombreprograma = "Psicologia" };




_context = context;
if (_context.Facultad.Count() == 0)
{

    _context.Facultad.Add(new FacultadItem {Nombrefacultad = "Facultad de ingenerias y tecnologias "});
    _context.SaveChanges();

_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<FacultadItem>>> GetPacienteItems()
{
return await _context.Facultad.ToListAsync();
}




[HttpGet("{id}")]
public async Task<ActionResult<FacultadItem>> GetPacienteItem(int id)
{
var Facultad = await _context.Facultad.FindAsync(id);
if (Facultad == null)
{
return NotFound();
}
return Facultad;
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
public async Task<ActionResult<FacultadItem>> PostPacienteItem(FacultadItem item)
{
   
         // calcularEstudiante(item);
_context.Facultad.Add(item);
await _context.SaveChangesAsync();

  
    return CreatedAtAction(nameof(GetPacienteItem), new { id = item.Id }, item);

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