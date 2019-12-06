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
public class SemilleroController : ControllerBase
{
private readonly SemilleroContext _context;
public SemilleroController(SemilleroContext context)
{



  ProgramaItem Programa = new ProgramaItem { Nombreprograma = "Psicologia" };




_context = context;
if (_context.Semillero.Count() == 0)
{

    _context.Semillero.Add(new SemilleroItem {Nombrefacultad = "Facultad de ingenerias y tecnologias ",  Programa = null});
    _context.SaveChanges();

_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<SemilleroItem>>> GetPacienteItems()
{
return await _context.Semillero.ToListAsync();
}




[HttpGet("{id}")]
public async Task<ActionResult<SemilleroItem>> GetPacienteItem(int id)
{
var Semillero = await _context.Semillero.FindAsync(id);
if (Semillero == null)
{
return NotFound();
}
return Semillero;
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
public async Task<ActionResult<SemilleroItem>> PostPacienteItem(SemilleroItem item)
{
   
         // calcularEstudiante(item);
_context.Semillero.Add(item);
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